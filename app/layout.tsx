import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Rob's Beef | Smash Burgers · Cuenca",
  description: "Smash burgers de carne real para amantes de la buena burger. Delivery or pick up en Cuenca.",
  icons: { icon: "/logo.png" },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#080808",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
