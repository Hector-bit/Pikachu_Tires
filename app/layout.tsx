import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Pikachu's Tire Repair | Bellingham, WA",
  description: "Servicio profesional de llantas en Bellingham, WA. Balanceo, cambio, reparación y alineación. 120 W Smith Road.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="G-T95CF8G9WQ" />
      <body>{children}</body>
    </html>
  );
}
