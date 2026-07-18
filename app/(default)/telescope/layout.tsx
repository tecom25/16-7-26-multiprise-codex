import type { Metadata } from "next";
import "./telescope.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://morobest.com"),
  title: "Télescope astronomique enfant à 349 DH | MoroBest Maroc",
  description: "Télescope astronomique Science Horse avec grossissements 30X et 60X, trépied réglable et support téléphone. Livraison partout au Maroc, paiement à la réception.",
  alternates: { canonical: "/telescope" },
  openGraph: {
    title: "Son premier voyage dans les étoiles | Télescope 349 DH",
    description: "Télescope astronomique pour petits explorateurs. Livraison partout au Maroc et paiement à la réception.",
    url: "/telescope",
    images: [{ url: "/telescope-og.png", width: 1536, height: 1024, alt: "Télescope astronomique pour enfant proposé par MoroBest" }],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Télescope astronomique enfant · 349 DH | MoroBest",
    description: "Explorez la Lune et les étoiles depuis la maison.",
    images: ["/telescope-og.png"],
  },
};

export default function TelescopeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
