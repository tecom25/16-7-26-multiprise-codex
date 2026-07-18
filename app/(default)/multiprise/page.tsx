"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "212675409754";

const features = [
  { value: "4", label: "Prises européennes", ar: "مقابس أوروبية" },
  { value: "2", label: "Ports USB-A", ar: "منافذ USB-A" },
  { value: "2", label: "Ports USB-C", ar: "منافذ USB-C" },
  { value: "1", label: "Interrupteur général", ar: "زر تشغيل رئيسي" },
];

const useCases = [
  ["Maison", "المنزل", "Télévision, lampes, téléphones et appareils du quotidien."],
  ["Bureau", "المكتب", "Ordinateur, écran et accessoires regroupés sur un seul point."],
  ["Cuisine", "المطبخ", "Une solution compacte pour les petits appareils, dans la limite de 10 A."],
  ["Gaming", "الألعاب", "Console, écran, routeur et chargeurs sans multiplier les adaptateurs."],
];

export default function MultipriseLandingPage() {
  const [error, setError] = useState("");

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").replace(/[\s.-]/g, "");
    const city = String(data.get("city") || "").trim();
    const quantity = String(data.get("quantity") || "1");

    if (!name || !city || !/^(?:\+?212|0)[5-7]\d{8}$/.test(phone)) {
      setError("Merci de compléter votre nom, votre ville et un numéro marocain valide. · المرجو إدخال الاسم والمدينة ورقم هاتف مغربي صحيح.");
      return;
    }

    setError("");
    const message = [
      "Bonjour MoroBest, je souhaite commander la multiprise 4 prises + 4 ports USB à 169 DH, livraison incluse.",
      "السلام عليكم، بغيت نطلب المشترك الكهربائي ديال 4 مقابس و4 منافذ USB بثمن 169 درهم، التوصيل داخل فالثمن.",
      "",
      `Nom / الاسم: ${name}`,
      `Téléphone / الهاتف: ${phone}`,
      `Ville et adresse / المدينة والعنوان: ${city}`,
      `Quantité / الكمية: ${quantity}`,
      "",
      "Total : 169 DH par unité, livraison incluse / 169 درهم للوحدة والتوصيل داخل فالثمن.",
      "Paiement à la réception / الدفع عند الاستلام.",
    ].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="mp-site">
      <div className="mp-announcement"><span>169 DH · Livraison incluse</span><i /><b dir="rtl">169 درهم · التوصيل داخل فالثمن</b><i /><span>Paiement à la réception</span><i /><b dir="rtl">الدفع عند الاستلام</b></div>

      <header className="mp-nav mp-wrap">
        <a className="mp-brand" href="/" aria-label="Retour à l’accueil MoroBest"><strong>Moro</strong>Best<span>.</span><small>Smart living</small></a>
        <nav aria-label="Navigation principale"><a href="#avantages">Avantages <small dir="rtl">المميزات</small></a><a href="#details">Détails <small dir="rtl">التفاصيل</small></a><a href="#commander">Commander <small dir="rtl">اطلب الآن</small></a></nav>
        <a className="mp-nav-cta" href="#commander">Je commande · 169 DH <span dir="rtl">اطلب الآن</span></a>
      </header>

      <section id="top" className="mp-hero mp-wrap">
        <div className="mp-hero-copy">
          <div className="mp-pill"><span>●</span> 8 connexions, un seul branchement</div>
          <h1>Branchez tout.<br /><em>Gardez le contrôle.</em></h1>
          <p className="mp-ar-lead" dir="rtl">شبّك أجهزتك كاملة، بلا فوضى وبلا ما تبقى تقلب على بلاصة فارغة.</p>
          <p className="mp-lead">Une multiprise compacte qui réunit <strong>4 prises européennes, 2 USB-A et 2 USB-C</strong>, avec un interrupteur général bien visible.</p>
          <div className="mp-price"><strong>169<sup>DH</sup></strong><span>Livraison incluse<small dir="rtl">التوصيل داخل فالثمن</small></span></div>
          <div className="mp-hero-actions"><a className="mp-primary" href="#commander">Commander maintenant <span>→</span><small dir="rtl">اطلب دابا</small></a><a className="mp-secondary" href="#details">Voir le produit <span>↓</span></a></div>
          <div className="mp-mini-proof"><span>✓ Livraison nationale</span><span>✓ Paiement à la réception</span><span>✓ Confirmation par WhatsApp</span></div>
        </div>
        <div className="mp-hero-visual"><div className="mp-hero-halo" /><img src="/multiprise-hero.png" alt="Multiprise noire MoroBest avec quatre prises européennes, deux ports USB-A, deux ports USB-C et interrupteur rouge" /><div className="mp-float mp-float-one"><b>4 + 4</b><span>Prises + USB</span><small dir="rtl">مقابس ومنافذ</small></div><div className="mp-float mp-float-two"><b>10 A</b><span>Maximum indiqué</span><small dir="rtl">الحد الأقصى</small></div></div>
      </section>

      <section className="mp-spec-bar"><div className="mp-wrap">{features.map((item) => <article key={item.label}><strong>{item.value}</strong><p>{item.label}<small dir="rtl">{item.ar}</small></p></article>)}</div></section>

      <section id="avantages" className="mp-problem mp-section mp-wrap">
        <div className="mp-section-head"><div><span>MOINS DE CÂBLES, PLUS D’ESPACE</span><h2>Le désordre s’arrête ici.<small dir="rtl">الفوضى كتوقف هنا.</small></h2></div><p>Au lieu d’empiler les adaptateurs, regroupez vos appareils et vos téléphones sur une seule multiprise compacte.</p></div>
        <div className="mp-problem-grid">
          <figure className="mp-problem-image"><img src="/multiprise-2.png" alt="Comparaison entre un bureau encombré de câbles et une installation organisée avec la multiprise" /><figcaption>Un seul point de connexion pour simplifier votre bureau.</figcaption></figure>
          <div className="mp-benefit-list">
            <article><span>01</span><div><h3>Fini les prises manquantes</h3><p>Quatre appareils secteur peuvent être branchés en même temps.</p><small dir="rtl">ربعة ديال الأجهزة فبلاصة وحدة.</small></div></article>
            <article><span>02</span><div><h3>Chargez sans adaptateur</h3><p>Deux ports USB-A et deux ports USB-C sont intégrés directement.</p><small dir="rtl">شحن مباشر بـ USB-A وUSB-C.</small></div></article>
            <article><span>03</span><div><h3>Coupez tout d’un geste</h3><p>L’interrupteur rouge permet d’éteindre l’ensemble sans retirer chaque fiche.</p><small dir="rtl">طفي كلشي بضغطة وحدة.</small></div></article>
          </div>
        </div>
      </section>

      <section id="details" className="mp-details mp-section"><div className="mp-wrap mp-details-grid">
        <div className="mp-real-card"><img src="/multiprise-real.jpg" alt="Photo réelle de la face avant de la multiprise" /><span>Photo réelle du produit · صورة حقيقية</span></div>
        <div className="mp-details-copy"><span className="mp-kicker">CARACTÉRISTIQUES RÉELLES</span><h2>Compacte devant.<br /><em>Pratique derrière.</em><small dir="rtl">صغيرة وعملية.</small></h2><p>Son boîtier rectangulaire regroupe toutes les connexions sur la face avant. À l’arrière, deux encoches permettent une fixation murale adaptée.</p>
          <ul><li><b>4</b><span>prises européennes rondes<small dir="rtl">4 مقابس أوروبية</small></span></li><li><b>4</b><span>ports USB : 2 USB-A + 2 USB-C<small dir="rtl">4 منافذ للشحن</small></span></li><li><b>10 A</b><span>maximum indiqué, 220 V~, 50/60 Hz<small dir="rtl">المواصفات المكتوبة على المنتج</small></span></li><li><b>2</b><span>encoches de fixation au dos<small dir="rtl">فتحتان للتثبيت على الحائط</small></span></li></ul>
          <p className="mp-note">Respectez la puissance maximale de 10 A indiquée sur le produit. Ne branchez pas plusieurs appareils très énergivores simultanément.</p>
        </div>
      </div></section>

      <section className="mp-spaces mp-section mp-wrap">
        <div className="mp-section-head"><div><span>UNE SOLUTION, PLUSIEURS ESPACES</span><h2>Elle trouve sa place partout.<small dir="rtl">كتنفعك فكل بلاصة.</small></h2></div><p>Maison, bureau, cuisine ou coin gaming : elle centralise les branchements sans prendre toute la table.</p></div>
        <div className="mp-spaces-grid"><img src="/multiprise-4.png" alt="Multiprise utilisée à la maison, au bureau, dans la cuisine et pour un espace gaming" /><div>{useCases.map(([title, ar, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}<small dir="rtl">{ar}</small></h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="mp-reassurance"><div className="mp-wrap"><article><b>🚚</b><h3>Livraison incluse<small dir="rtl">التوصيل داخل فالثمن</small></h3></article><article><b>💵</b><h3>Paiement à la réception<small dir="rtl">الدفع عند الاستلام</small></h3></article><article><b>💬</b><h3>Commande via WhatsApp<small dir="rtl">الطلب عبر واتساب</small></h3></article></div></section>

      <section id="commander" className="mp-order mp-section"><div className="mp-wrap mp-order-card">
        <div className="mp-order-summary"><span>169 DH · LIVRAISON INCLUSE</span><h2>Prêt à simplifier vos branchements ?<small dir="rtl">واجد ترتّب أجهزتك؟</small></h2><img src="/multiprise-1.png" alt="Résumé des caractéristiques de la multiprise" /><p>Votre demande est envoyée directement à MoroBest sur WhatsApp. Notre équipe vous contacte pour confirmer les détails.</p></div>
        <form className="mp-form" onSubmit={submitOrder} noValidate><div><span>FORMULAIRE WHATSAPP</span><b>169 DH · Livraison incluse</b></div><h3>Où devons-nous livrer ?<small dir="rtl">فين نوصّلو ليك؟</small></h3>
          <label>Nom complet · الاسم الكامل<input name="name" autoComplete="name" placeholder="Votre nom / الاسم ديالك" /></label><label>Téléphone · رقم الهاتف<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="06 12 34 56 78" /></label><label>Ville et adresse · المدينة والعنوان<textarea name="city" rows={3} autoComplete="street-address" placeholder="Ville, quartier, adresse / المدينة، الحي، العنوان" /></label><label>Quantité · الكمية<select name="quantity" defaultValue="1"><option value="1">1 multiprise</option><option value="2">2 multiprises</option><option value="3">3 multiprises</option><option value="4">4 multiprises</option></select></label>
          {error && <p className="mp-form-error" role="alert">{error}</p>}<button type="submit">Envoyer sur WhatsApp <span>→</span><small dir="rtl">صيفط الطلب فواتساب</small></button><p className="mp-privacy">🔒 Vos informations servent uniquement à confirmer cette commande.</p>
        </form>
      </div></section>

      <footer className="mp-footer"><div className="mp-wrap"><a className="mp-brand" href="/" aria-label="Retour à l’accueil MoroBest"><strong>Moro</strong>Best<span>.</span></a><p>Les bons produits, livrés chez vous.<small dir="rtl">أحسن المنتجات حتى لباب دارك.</small></p><span>© 2026 MoroBest · Maroc</span></div></footer>

      <div className="mp-floating-actions"><a className="mp-float-whatsapp" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour MoroBest, je souhaite avoir plus d'informations sur la multiprise à 169 DH, livraison incluse.")}`} target="_blank" rel="noreferrer" aria-label="Contacter MoroBest sur WhatsApp"><span>●</span><b>WhatsApp</b></a><a className="mp-float-order" href="#commander"><b>Commander · 169 DH</b><small dir="rtl">اطلب الآن</small></a></div>
    </main>
  );
}
