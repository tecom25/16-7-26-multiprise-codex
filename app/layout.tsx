import "./css/style.css";

export const metadata = {
  title: "Kit de toilettage Shool:One | 199 DH",
  description: "Le kit complet de toilettage pour chiens et chats : tondeuse silencieuse rechargeable, coupe-griffes, peigne et accessoires. Livraison partout au Maroc.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr-MA" className="scroll-smooth"><body>{children}</body></html>;
}
