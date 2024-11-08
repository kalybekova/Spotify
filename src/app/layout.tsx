import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import LayoutClient from "./Layout.client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify -Web Player:Music for everyone!",
  description:
    "Spotify’s platform revolutionized music listening forever when we launched in 2008. Our move into podcasting brought innovation and a new generation of listeners to the medium, and in 2022 we entered the next audio market primed for growth with the addition of audiobooks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
