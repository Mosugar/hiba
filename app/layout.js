import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://pristinedentalcenter.vercel.app'),
  title: "Dr. Hiba Guelida - Pristine Dental Center Kenitra | Dentiste Kenitra",
  description: "Votre dentiste de confiance à Kenitra. Dr. Hiba Guelida vous accompagne avec professionnalisme pour tous vos soins dentaires : orthodontie, blanchiment, implants. Prenez rendez-vous : 0530-220071",
  keywords: "dentiste Kenitra, Dr Hiba Guelida, Pristine Dental Center, orthodontie Kenitra, blanchiment dentaire, implants dentaires, soins dentaires Maroc",
  author: "Dr. Hiba Guelida",
  robots: "index, follow",
  openGraph: {
    title: "Dr. Hiba Guelida - Pristine Dental Center Kenitra",
    description: "Votre dentiste de confiance à Kenitra. Soins dentaires professionnels et bienveillants.",
    url: "https://pristinedentalcenter.vercel.app",
    siteName: "Pristine Dental Center",
    locale: "fr_FR",
    type: "website",
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}