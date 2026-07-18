"use client";

import { FormEvent, MouseEvent, useState } from "react";
import { saveOrder } from "@/lib/orders";

const whatsappNumber = "212675409754";

const Icon = ({ name }: { name: "volume" | "usb" | "shield" | "feather" | "truck" | "wallet" | "check" }) => {
  const paths = {
    volume: <><path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="m19 9-6 6m0-6 6 6"/></>,
    usb: <><path d="M12 3v12"/><path d="m8 7 4-4 4 4"/><path d="M8 11H5v4a3 3 0 0 0 3 3h4"/><path d="M16 13v5h-4"/><circle cx="16" cy="11" r="2"/><circle cx="12" cy="20" r="2"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    feather: <><path d="M20.2 4.8c-4.5-4.5-12.2-.8-14.4 5.5L3 21l10.7-2.8c6.3-2.2 10-9.9 5.5-14.4Z"/><path d="M6 18 15 9"/></>,
    truck: <><path d="M3 6h11v10H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
    wallet: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M16 12h5"/><path d="M3 9h18"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
};

const benefits = [
  { icon: "volume" as const, title: "Moteur discret", text: "Un bruit réduit pour toiletter sans stresser votre animal." },
  { icon: "usb" as const, title: "Rechargeable USB", text: "Sans fil, légère et toujours prête à vous accompagner." },
  { icon: "shield" as const, title: "Lame de précision", text: "Pensée pour les petites zones et les finitions délicates." },
  { icon: "feather" as const, title: "Prise en main facile", text: "Un format ergonomique pour garder le contrôle du geste." },
];

const kit = ["Tondeuse de précision", "Coupe-griffes", "Peigne métallique", "Lime à griffes", "Brosse de nettoyage", "Flacon applicateur", "Câble USB", "Pochette de rangement"];

export default function Home() {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function tilt(event: MouseEvent<HTMLDivElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    event.currentTarget.style.setProperty("--rx", `${-y * 10}deg`);
    event.currentTarget.style.setProperty("--ry", `${x * 12}deg`);
    event.currentTarget.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    event.currentTarget.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  }

  function resetTilt(event: MouseEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
  }

  async function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const city = String(form.get("city") || "").trim();
    if (!name || !city || !/^(?:\+?212|0)[5-7]\d{8}$/.test(phone.replace(/[\s.-]/g, ""))) {
      setError("Merci de renseigner votre nom, votre ville et un numéro marocain valide. / عافاك دخل الاسم، المدينة ورقم هاتف مغربي صحيح.");
      return;
    }
    setError("");
    setIsSubmitting(true);
    const message = `Bonjour, je souhaite commander le kit de toilettage Shool:One à 199 DH.\n\nNom : ${name}\nTéléphone : ${phone}\nVille / adresse : ${city}\n\nPaiement à la réception.`;
    const sheetRequest = saveOrder({
      product: "Kit de toilettage Shool:One",
      price: 199,
      quantity: 1,
      customerName: name,
      phone,
      address: city,
      page: window.location.pathname,
      website: String(form.get("website") || ""),
    });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");

    try {
      await sheetRequest;
    } catch {
      setError("WhatsApp a été ouvert, mais Google Sheets n'a pas pu enregistrer la commande. Merci de la noter manuellement.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="site-shell">
      <div className="announcement"><span>Livraison partout au Maroc · التوصيل للمغرب كامل</span><i />Paiement à la réception · الخلص عند الاستلام</div>
      <header className="nav wrap">
        <a href="#" className="brand" aria-label="Shool One, accueil"><b>Shool</b><span>:One</span><small>pet care</small></a>
        <nav aria-label="Navigation principale"><a href="#avantages">Avantages</a><a href="#kit">Le kit</a><a href="#avis">Avis</a></nav>
        <a className="button button-small" href="#commander">Commander <span>199 DH</span></a>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span>★ 4,9/5</span> Adopté par les maîtres attentionnés</div>
          <h1>Son bien-être.<br/><em>Votre savoir-faire.</em></h1>
          <p className="hero-lead">Le kit complet pour prendre soin de votre chien ou de votre chat, simplement et sereinement, à la maison.</p>
          <div className="price-row"><div><span>Seulement</span><strong>199<sup>DH</sup></strong></div><p><Icon name="truck"/> Livraison partout<br/>au Maroc</p></div>
          <div className="hero-actions"><a className="button" href="#commander">Je commande mon kit <span>→</span></a><span className="micro-proof"><Icon name="shield"/> Paiement sécurisé<br/>à la réception</span></div>
          <div className="pet-row"><div className="pet-faces"><img src="/grooming-cat.png" alt="Chat pendant son toilettage"/><img src="/grooming-comb.png" alt="Chien pendant son toilettage"/><img src="/grooming-hero.png" alt="Kit de toilettage utilisé sur un chien"/></div><p><b>+ de 500 animaux</b><br/>chouchoutés à la maison</p></div>
        </div>

        <div className="hero-visual" onMouseMove={tilt} onMouseLeave={resetTilt}>
          <div className="orb orb-one"/><div className="orb orb-two"/>
          <div className="visual-card"><img src="/grooming-kit.png" alt="Kit de toilettage Shool One complet"/><div className="shine"/></div>
          <div className="float-card float-card-a"><span><Icon name="volume"/></span><div><b>Faible bruit</b><small>Pour rester zen</small></div></div>
          <div className="float-card float-card-b"><span><Icon name="usb"/></span><div><b>Sans fil</b><small>Recharge USB</small></div></div>
          <div className="float-card float-card-c"><span><Icon name="check"/></span><div><b>8 accessoires</b><small>Kit ultra complet</small></div></div>
        </div>
      </section>

      <section className="trust-strip"><div className="wrap"><span><Icon name="truck"/><b>Livraison nationale</b><small>Partout au Maroc</small></span><span><Icon name="wallet"/><b>Paiement à la réception</b><small>Aucun risque</small></span><span><Icon name="shield"/><b>Produit contrôlé</b><small>Avant expédition</small></span></div></section>

      <section id="avantages" className="benefits wrap section"><div className="section-heading"><span>DOUX, PRÉCIS, COMPLET</span><h2>Le toilettage devient<br/><em>un moment de complicité</em></h2><p>Tout ce qu’il faut pour des soins réguliers, sans déplacement et sans stress.</p></div><div className="benefit-grid">{benefits.map((item, index) => <article key={item.title}><div className="number">0{index + 1}</div><span className="feature-icon"><Icon name={item.icon}/></span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

      <section id="kit" className="kit-section section"><div className="wrap kit-grid"><div className="kit-photo"><img src="/grooming-real.webp" alt="Photo réelle du kit complet et de sa boîte"/><span>Photo réelle du produit</span></div><div className="kit-copy"><span className="section-kicker">DANS VOTRE KIT</span><h2>Tout est là.<br/><em>Rien ne manque.</em></h2><p>Un ensemble compact et bien pensé pour les petites zones, les griffes et l’entretien du pelage.</p><ul>{kit.map(item => <li key={item}><span><Icon name="check"/></span>{item}</li>)}</ul><a className="text-link" href="#commander">Obtenir le kit complet <span>→</span></a></div></div></section>

      <section className="story section wrap"><div className="story-copy"><span className="section-kicker">UN GESTE QUI RASSURE</span><h2>Précis pour vous.<br/><em>Doux pour eux.</em></h2><p>Son format fin permet d’atteindre facilement les pattes, les oreilles et les petites zones. Le moteur discret aide votre compagnon à rester calme pendant le soin.</p><div><span>✓ Chiens</span><span>✓ Chats</span><span>✓ Petites zones</span></div></div><div className="story-gallery"><img src="/grooming-ear.png" alt="Tonte délicate près de l’oreille d’un chien"/><img src="/grooming-face.png" alt="Soin de précision du visage d’un chien"/></div></section>

      <section id="avis" className="quote-section"><div className="wrap"><p className="quote-mark">“</p><blockquote>La tondeuse est vraiment silencieuse. Mon petit chien reste calme et j’ai enfin tout ce qu’il faut dans une seule pochette.</blockquote><div className="stars">★★★★★</div><p><b>Samira A.</b> · Casablanca</p></div></section>

      <section id="commander" className="order-section section"><div className="order-card wrap"><div className="order-summary"><span className="section-kicker">OFFRE DU MOMENT · عرض اليوم</span><h2>Votre kit complet<br/><em>à 199 DH</em></h2><img src="/grooming-kit.png" alt="Tous les accessoires inclus dans le kit"/><ul><li><Icon name="check"/>8 accessoires inclus · 8 أدوات</li><li><Icon name="check"/>Livraison partout au Maroc · التوصيل للمغرب كامل</li><li><Icon name="check"/>Paiement à la réception · الخلص عند الاستلام</li></ul></div><div className="order-form"><div className="form-head"><span>Commande rapide · طلب سريع</span><b>199 DH</b></div><h3>Où devons-nous livrer ? <span dir="rtl">فين نوصّلو ليك؟</span></h3><p>Remplissez ces informations. · عمّر المعلومات ديالك وغادي نوجدو الطلب عبر واتساب.</p><form onSubmit={submitOrder} noValidate><label>Nom complet · الاسم الكامل<input name="name" autoComplete="name" placeholder="Votre nom / الاسم ديالك"/></label><label>Téléphone · رقم الهاتف<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="06 12 34 56 78"/></label><label>Ville et adresse · المدينة والعنوان<textarea name="city" rows={3} autoComplete="street-address" placeholder="Ville, quartier, adresse / المدينة، الحي، العنوان..."/></label><input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="order-honeypot"/>{error && <p className="form-error" role="alert">{error}</p>}<button className="button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Enregistrement…" : "Commander via WhatsApp · طلب عبر واتساب"} <span>→</span></button><small><Icon name="shield"/> Vos informations servent uniquement à traiter votre commande. · معلوماتك غير لتجهيز الطلب.</small></form></div></div></section>

      <footer><div className="wrap"><a href="#" className="brand"><b>Shool</b><span>:One</span><small>pet care</small></a><p>Le soin professionnel, avec la douceur de la maison.</p><span>© 2026 Shool:One · Maroc</span></div></footer>
      <a className="mobile-order" href="#commander"><span>Commander maintenant</span><b>199 DH</b></a>
    </main>
  );
}
