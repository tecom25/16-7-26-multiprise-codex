import "./css/style.css";

export const metadata = {
  metadataBase: new URL("https://morobest.com"),
  title: "Multiprise 4 prises + 4 USB | MoroBest Maroc",
  description: "Multiprise compacte avec 4 prises européennes, 2 ports USB-A, 2 ports USB-C et interrupteur à 169 DH, livraison incluse au Maroc.",
  openGraph: {
    title: "4 prises + 4 USB | MoroBest",
    description: "Branchez tout. Gardez le contrôle. 169 DH, livraison incluse au Maroc.",
    images: [{ url: "/og.png", width: 1734, height: 906, alt: "Multiprise MoroBest avec 4 prises et 4 ports USB" }],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "4 prises + 4 USB | MoroBest",
    description: "Branchez tout. Gardez le contrôle.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr-MA" className="scroll-smooth"><body>{children}</body></html>;
}
