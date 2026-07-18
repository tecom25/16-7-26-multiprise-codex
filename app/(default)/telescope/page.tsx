"use client";

import { FormEvent, useState } from "react";
import { saveOrder } from "@/lib/orders";

const whatsappNumber = "212675409754";

const features = [
  { icon: "30×", title: "Grossissement 30X", text: "Pour commencer à observer la Lune et le ciel facilement." },
  { icon: "60×", title: "Grossissement 60X", text: "Pour aller plus loin et distinguer davantage de détails." },
  { icon: "△", title: "Trépied réglable", text: "Une base stable, ajustable à la taille de votre explorateur." },
  { icon: "▣", title: "Support téléphone", text: "Pour cadrer l’observation et partager les découvertes." },
];

const boxContents = ["Télescope astronomique", "2 oculaires 30X et 60X", "Trépied stable et réglable", "Support pour téléphone", "Viseur d’alignement", "Accessoires d’installation"];

export default function TelescopeLandingPage() {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").replace(/[\s.-]/g, "");
    const address = String(data.get("address") || "").trim();
    const quantity = Number(data.get("quantity") || 1);

    if (!name || !address || !/^(?:\+?212|0)[5-7]\d{8}$/.test(phone)) {
      setError("Merci de renseigner votre nom, votre adresse et un numéro marocain valide. · عافاك دخل الاسم والعنوان ورقم هاتف مغربي صحيح.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    const message = [
      "Bonjour MoroBest, je souhaite commander le télescope astronomique Science Horse à 349 DH.",
      "السلام عليكم، بغيت نطلب التلسكوب الفلكي بثمن 349 درهم.",
      "",
      `Nom / الاسم: ${name}`,
      `Téléphone / الهاتف: ${phone}`,
      `Ville et adresse / المدينة والعنوان: ${address}`,
      `Quantité / الكمية: ${quantity}`,
      `Total: ${349 * quantity} DH`,
      "",
      "Paiement à la réception / الدفع عند الاستلام.",
    ].join("\n");

    window.fbq?.("track", "Lead", { content_name: "Télescope astronomique Science Horse", value: 349, currency: "MAD" });
    const sheetRequest = saveOrder({
      product: "Télescope astronomique Science Horse",
      price: 349,
      quantity,
      customerName: name,
      phone,
      address,
      page: window.location.pathname,
      website: String(data.get("website") || ""),
    });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");

    try {
      await sheetRequest;
    } catch {
      setError("WhatsApp a été ouvert, mais la commande n’a pas pu être enregistrée automatiquement. Merci de la noter manuellement.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="ts-site">
      <div className="ts-skyline"><span>Livraison partout au Maroc</span><i />Paiement à la réception <i /><b dir="rtl">التوصيل للمغرب كامل · الدفع عند الاستلام</b></div>

      <header className="ts-nav ts-wrap">
        <a className="ts-brand" href="/" aria-label="Retour à l’accueil MoroBest"><strong>Moro</strong>Best<span>.</span><small>petits explorateurs</small></a>
        <nav aria-label="Navigation principale"><a href="#decouvrir">Découvrir</a><a href="#contenu">Dans la boîte</a><a href="#commander">Commander</a></nav>
        <a className="ts-nav-cta" href="#commander">Commander <b>349 DH</b></a>
      </header>

      <section className="ts-hero ts-wrap">
        <div className="ts-hero-copy">
          <div className="ts-kicker"><span>✦</span> Le ciel devient son terrain de jeu</div>
          <h1>Son premier voyage<br />dans les <em>étoiles.</em></h1>
          <p>Un télescope simple et complet pour éveiller la curiosité, observer la Lune et transformer chaque soirée en aventure scientifique.</p>
          <p className="ts-ar" dir="rtl">خلي صغيرك يكتاشف القمر والنجوم من الدار، بتلسكوب ساهل فالاستعمال وكامل بالأدوات.</p>
          <div className="ts-offer"><strong>349<sup>DH</sup></strong><span>Livraison partout<br />au Maroc</span></div>
          <div className="ts-actions"><a className="ts-primary" href="#commander">Je commande maintenant <span>→</span></a><a href="#decouvrir" className="ts-link">Voir les détails ↓</a></div>
          <div className="ts-mini-proof"><span>✓ Facile à utiliser</span><span>✓ Paiement à la réception</span><span>✓ Cadeau éducatif</span></div>
        </div>
        <div className="ts-visual">
          <div className="ts-orbit ts-orbit-one" /><div className="ts-orbit ts-orbit-two" /><div className="ts-moon" />
          <figure><img src="/telescope-product.jpg" alt="Télescope astronomique Science Horse avec trépied et accessoires" /><figcaption>Photo du produit</figcaption></figure>
          <div className="ts-float ts-float-a"><b>30X</b><span>Observation facile</span></div>
          <div className="ts-float ts-float-b"><b>60X</b><span>Plus de détails</span></div>
          <div className="ts-float ts-float-c"><b>✦</b><span>Éveil scientifique</span></div>
        </div>
      </section>

      <section className="ts-trust"><div className="ts-wrap"><article><span>☾</span><b>La Lune de plus près</b><small>Une première fenêtre sur l’espace</small></article><article><span>△</span><b>Stable et réglable</b><small>Trépied inclus dans la boîte</small></article><article><span>▣</span><b>Souvenirs à partager</b><small>Support téléphone inclus</small></article></div></section>

      <section id="decouvrir" className="ts-features ts-section ts-wrap">
        <div className="ts-heading"><span>PENSÉ POUR LES PETITS CURIEUX</span><h2>Simple à installer.<br /><em>Magique à découvrir.</em></h2><p>Tout est pensé pour une première expérience d’astronomie amusante, accompagnée par un adulte.</p></div>
        <div className="ts-feature-grid">{features.map((feature, index) => <article key={feature.title}><small>0{index + 1}</small><span>{feature.icon}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
      </section>

      <section id="contenu" className="ts-box ts-section"><div className="ts-wrap ts-box-grid">
        <div className="ts-box-photo"><img src="/telescope-product.jpg" alt="Télescope, trépied, support téléphone et boîte Science Horse" /><span>Kit complet prêt à explorer</span></div>
        <div className="ts-box-copy"><span className="ts-kicker-light">DANS LA BOÎTE</span><h2>Tout pour sa<br /><em>première exploration.</em></h2><p>Installez le trépied, choisissez le grossissement et commencez l’observation. Le support téléphone facilite le cadrage et le partage.</p><ul>{boxContents.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul><a href="#commander">Offrir le télescope <span>→</span></a></div>
      </div></section>

      <section className="ts-gift ts-section ts-wrap"><div><span>LE CADEAU QUI OUVRE UN UNIVERS</span><h2>Moins d’écran.<br /><em>Plus d’émerveillement.</em></h2><p>Un cadeau éducatif qui invite à observer, poser des questions et découvrir le monde autrement.</p></div><div className="ts-gift-card"><span>✦</span><b>Idéal pour</b><p>Anniversaire · Réussite scolaire · Fête · Surprise</p><small>Utilisation recommandée sous la supervision d’un adulte.</small></div></section>

      <section className="ts-reassurance"><div className="ts-wrap"><article><span>🚚</span><b>Livraison nationale</b><small>Partout au Maroc</small></article><article><span>💵</span><b>Paiement à la réception</b><small>Vous payez à la livraison</small></article><article><span>✓</span><b>Commande confirmée</b><small>Directement sur WhatsApp</small></article></div></section>

      <section id="commander" className="ts-order ts-section"><div className="ts-order-card ts-wrap">
        <div className="ts-summary"><span>OFFRE DU MOMENT</span><h2>Le ciel à portée<br /><em>de regard.</em></h2><img src="/telescope-product.jpg" alt="Télescope astronomique enfant proposé à 349 DH" /><div><strong>349 DH</strong><small>Livraison partout au Maroc</small></div></div>
        <form className="ts-form" onSubmit={submitOrder} noValidate><div className="ts-form-top"><span>COMMANDE RAPIDE</span><b>349 DH</b></div><h3>Où devons-nous livrer ?<small dir="rtl">فين نوصّلو ليك؟</small></h3><p>Remplissez vos informations puis finalisez la commande sur WhatsApp.</p>
          <label>Nom complet · الاسم الكامل<input name="name" autoComplete="name" placeholder="Votre nom / الاسم ديالك" /></label>
          <label>Téléphone · رقم الهاتف<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="06 12 34 56 78" /></label>
          <label>Ville et adresse · المدينة والعنوان<textarea name="address" rows={3} autoComplete="street-address" placeholder="Ville, quartier, adresse / المدينة، الحي، العنوان" /></label>
          <label>Quantité · الكمية<select name="quantity" defaultValue="1"><option value="1">1 télescope</option><option value="2">2 télescopes</option><option value="3">3 télescopes</option></select></label>
          <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="order-honeypot" />
          {error && <p className="ts-error" role="alert">{error}</p>}
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enregistrement…" : "Commander via WhatsApp"}<span>→</span><small dir="rtl">طلب عبر واتساب</small></button>
          <small className="ts-privacy">🔒 Vos informations servent uniquement à confirmer cette commande.</small>
        </form>
      </div></section>

      <footer className="ts-footer"><div className="ts-wrap"><a className="ts-brand" href="/"><strong>Moro</strong>Best<span>.</span></a><p>Les bons produits, livrés chez vous.</p><span>© 2026 MoroBest · Maroc</span></div></footer>
      <div className="ts-floating"><a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour MoroBest, je souhaite avoir plus d’informations sur le télescope astronomique à 349 DH.")}`} target="_blank" rel="noreferrer">WhatsApp</a><a href="#commander"><span>Commander</span><b>349 DH</b></a></div>
    </main>
  );
}
