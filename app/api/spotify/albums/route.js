import { NextResponse } from "next/server";

async function getAccessToken() {
  const res = await fetch("https://harsh-kurware-portfolio.vercel.app/api/spotify/access"); 
  const data = await res.json();
  return data.access_token;
}

export async function GET() {
  try {
    const access_token = await getAccessToken();
    const res = await fetch("https://api.spotify.com/v1/me/albums?limit=10", {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    const data = await res.json();
    console.log(data)
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
