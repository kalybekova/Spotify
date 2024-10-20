import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import querystring from "querystring";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const code = searchParams.get("code");

  const { data } = await axios.post(
    "https://accounts.spotify.com/api/token",
    querystring.stringify({
      grant_type: "authorization_code",
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
    })
  );

  const { access_token, refresh_token, expires_in } = data;

  const cookieStorege = cookies();
  cookieStorege.set("spotify_access_token", access_token, {
    path: "/",
    maxAge: expires_in,
  });

  cookieStorege.set("spotify_refresh_token", refresh_token, {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_FRONTEND_URL}`);
};
