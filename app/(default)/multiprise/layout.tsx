export const metadata = {
  metadataBase: new URL("https://morobest.com"),
  title: "Multiprise 4 prises + 4 USB à 169 DH | MoroBest Maroc",
  description: "Multiprise compacte avec 4 prises européennes, 2 ports USB-A, 2 ports USB-C et interrupteur à 169 DH, livraison incluse au Maroc.",
  alternates: { canonical: "/multiprise" },
  openGraph: {
    title: "4 prises + 4 USB à 169 DH | MoroBest",
    description: "Branchez tout. Gardez le contrôle. 169 DH, livraison incluse au Maroc.",
    url: "/multiprise",
    images: [{ url: "/og.png", width: 1734, height: 906, alt: "Multiprise MoroBest avec 4 prises et 4 ports USB" }],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "4 prises + 4 USB à 169 DH | MoroBest",
    description: "Branchez tout. Gardez le contrôle. Livraison incluse.",
    images: ["/og.png"],
  },
};

export default function MultipriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
