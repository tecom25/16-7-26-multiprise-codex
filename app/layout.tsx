import "./css/style.css";
import MetaPixel from "./meta-pixel";

export const metadata = {
  title: "MoroBest | Morocco's Best Products",
  description: "Découvrez MoroBest, votre destination e-commerce au Maroc. Produits sélectionnés, livraison à domicile partout au Maroc et paiement à la réception.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr-MA" className="scroll-smooth"><body>{children}<MetaPixel /></body></html>;
}
