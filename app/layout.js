import "./globals.css";
import { Shadows_Into_Light, Montserrat, Bebas_Neue } from "next/font/google";
import DesktopAlert from "./_components/desktop-alert"; // Langsung impor DesktopAlert

// Memuat font dinamis
const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-shadows",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "600"],
  variable: "--font-montserrat",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-bebas",
});

// Metadata untuk halaman
export const metadata = {
  title: "Asvaraka42",
  description: "The best School Generation in SMASA",
  openGraph: {
    title: "Asvaraka42",
    description: "The best School Generation in SMASA",
  },
  keywords: ["Asvaraka", "SMASA", "Show your quality"],
};

// RootLayout untuk aplikasi
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${bebas.variable} ${shadows.variable} body`}
        suppressHydrationWarning={true}
      >
        <main className="main-page">{children}</main>
        <DesktopAlert /> {/* Langsung gunakan DesktopAlert */}
      </body>
    </html>
  );
}
