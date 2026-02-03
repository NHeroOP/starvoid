import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "StarVoid • Fantasy Survival Minecraft Server",
  description: "StarVoid is a fantasy survival Minecraft server featuring a town-based SMP, custom armor and weapons, RPG progression, and Hypixel Skyblock-inspired mining systems like Gold Mines and Dwarven Mines. Build towns, conquer resources, fight powerful mobs, and progress beyond vanilla survival.",
  keywords: ["StarVoid Minecraft Server","StarVoid SMP","Fantasy Minecraft Server","Towny Style SMP","Custom Survival SMP","Hypixel Skyblock Inspired Survival","Progression Based Minecraft Server","Custom Mining System","Dwarven Mines","Gold Mines Progression","Custom Armor Minecraft","RPG Survival SMP","Endgame Survival Minecraft","Player Towns Minecraft","Fantasy Town System","Custom Weapons Minecraft","Boss Fights Minecraft","Quest Based Survival","RPG Progression SMP","Space Fantasy Minecraft Server","Cosmic Minecraft SMP","Star Themed SMP","Non Pay To Win Minecraft Server","Community Driven SMP","Unique Minecraft Experience"],
  authors: [{ name: "StarVoid Network" }],
  creator: "StarVoid Network",
  publisher: "StarVoid Network",
  applicationName: "StarVoid",
  category: "game",
  metadataBase: new URL("https://starvoid.fun"),
  openGraph: {
    title: "StarVoid • Fantasy Survival Minecraft Server",
    description: "A fantasy survival SMP with towns, custom gear, RPG progression, and Hypixel Skyblock-inspired mining. Progress beyond vanilla on StarVoid.",
    url: "https://starvoid.fun",
    siteName: "StarVoid",
    images: [{ url: "/image/sv.png", width: 1200, height: 630, alt: "StarVoid Minecraft Server" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "StarVoid • Fantasy Survival Minecraft Server",
    description: "Fantasy SMP with towns, custom armor, RPG progression, and Skyblock-inspired mining systems.",
    images: ["/image/sv.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
  },
  alternates: {
    canonical: "https://starvoid.fun"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
