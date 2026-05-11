import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pikachu's Tire Repair | Bellingham, WA",
  description: "Servicio profesional de llantas en Bellingham, WA. Balanceo, cambio, reparación y alineación. 120 W Smith Road.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
