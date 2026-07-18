export type OrderPayload = {
  product: string;
  price: number;
  quantity: number;
  customerName: string;
  phone: string;
  address: string;
  page: string;
  website?: string;
};

export async function saveOrder(order: OrderPayload) {
  const response = await fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
    keepalive: true,
  });

  if (!response.ok) {
    throw new Error("La commande n'a pas pu être enregistrée dans Google Sheets.");
  }

  return response.json() as Promise<{ reference: string }>;
}
