import { NextResponse } from "next/server";

export const revalidate = 300;

export async function GET() {
  const userId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!userId || !accessToken) {
    return NextResponse.json({ connected: false, posts: [] });
  }

  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
  const url = new URL(`https://graph.facebook.com/v25.0/${userId}/media`);
  url.searchParams.set("fields", fields);
  url.searchParams.set("limit", "8");
  url.searchParams.set("access_token", accessToken);

  try {
    const response = await fetch(url, { next: { revalidate: 300 } });
    if (!response.ok) throw new Error("Instagram API request failed");
    const payload = await response.json();
    return NextResponse.json({ connected: true, posts: payload.data || [] });
  } catch {
    return NextResponse.json({ connected: false, posts: [] }, { status: 502 });
  }
}
