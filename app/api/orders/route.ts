import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const moroccanPhone = /^(?:\+?212|0)[5-7]\d{8}$/;

type IncomingOrder = {
  product?: unknown;
  price?: unknown;
  quantity?: unknown;
  customerName?: unknown;
  phone?: unknown;
  address?: unknown;
  page?: unknown;
  website?: unknown;
};

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  let input: IncomingOrder;

  try {
    input = (await request.json()) as IncomingOrder;
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Honeypot: real customers never see or fill this field.
  if (text(input.website, 200)) {
    return NextResponse.json({ ok: true, reference: "ignored" });
  }

  const product = text(input.product, 120);
  const customerName = text(input.customerName, 120);
  const phone = text(input.phone, 30).replace(/[\s.-]/g, "");
  const address = text(input.address, 500);
  const page = text(input.page, 200);
  const price = Number(input.price);
  const quantity = Math.min(20, Math.max(1, Math.trunc(Number(input.quantity))));

  if (
    !product ||
    !customerName ||
    !address ||
    !page ||
    !moroccanPhone.test(phone) ||
    !Number.isFinite(price) ||
    price <= 0 ||
    !Number.isFinite(quantity)
  ) {
    return NextResponse.json({ error: "Informations de commande invalides." }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    console.error("Google Sheets webhook is not configured.");
    return NextResponse.json({ error: "Google Sheets n'est pas encore configuré." }, { status: 503 });
  }

  const reference = `MB-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const order = {
    secret: webhookSecret,
    reference,
    createdAt: new Date().toISOString(),
    product,
    price,
    quantity,
    total: price * quantity,
    customerName,
    phone,
    address,
    source: "morobest.com",
    page,
    status: "Nouvelle",
  };

  try {
    const googleResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(order),
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });
    const result = (await googleResponse.json()) as { ok?: boolean; error?: string };

    if (!googleResponse.ok || !result.ok) {
      throw new Error(result.error || `Google Sheets HTTP ${googleResponse.status}`);
    }

    return NextResponse.json({ ok: true, reference });
  } catch (error) {
    console.error("Unable to save order in Google Sheets:", error);
    return NextResponse.json({ error: "Enregistrement Google Sheets indisponible." }, { status: 502 });
  }
}
