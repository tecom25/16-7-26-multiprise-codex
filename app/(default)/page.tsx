"use client";

import { MouseEvent, useState } from "react";

const steps = [
  ["01", "Vous voyez l’annonce", "Une offre claire apparaît sur vos réseaux sociaux.", "كتشوف الإشهار", "العرض كيبان ليك واضح فمواقع التواصل."],
  ["02", "Vous cliquez", "Le lien vous mène vers la page dédiée au produit.", "كتكليكي", "الرابط كيديك مباشرة لصفحة المنتوج."],
  ["03", "Vous choisissez", "Vous découvrez les détails et sélectionnez votre offre.", "كتختار", "كتشوف التفاصيل وكتختار العرض لي ناسبك."],
  ["04", "Vous commandez", "Un formulaire simple suffit, sans paiement en ligne.", "كتعمّر الطلب", "كتعمّر فورمولير ساهل بلا خلصة فالأنترنت."],
  ["05", "Nous confirmons", "Notre équipe vous contacte pour valider la commande.", "كنتاصلوا بيك", "الفريق ديالنا كيتاصل بيك باش يأكد الطلب."],
  ["06", "Nous préparons", "Contrôle, emballage et étiquetage avec soin.", "كنوجدوا الكولي", "كنراقبوا المنتوج، كنغلفوه وكنوجدوا الإتيكيت."],
  ["07", "Vous recevez", "Le livreur vous remet le colis partout au Maroc.", "كيوصلك حتى للدار", "الليفرور كيوصل ليك الكولي فين ما كنتي فالمغرب."],
];

const regions = ["طنجة - تطوان - الحسيمة", "الشرق", "فاس - مكناس", "الرباط - سلا - القنيطرة", "بني ملال - خنيفرة", "الدار البيضاء - سطات", "مراكش - آسفي", "درعة - تافيلالت", "سوس - ماسة", "كلميم - واد نون", "العيون - الساقية الحمراء", "الداخلة - وادي الذهب"];

const MiniIcon = ({ type }: { type: "box" | "truck" | "cash" | "spark" }) => {
  const drawings = {
    box: <><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="M4 7v10l8 4 8-4V7M12 11v10"/></>,
    truck: <><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
    cash: <><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M7 9H6v1M17 15h1v-1"/></>,
    spark: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[type]}</svg>;
};

export default function MoroccoBestHome() {
  const [lang, setLang] = useState<"fr" | "ar">("ar");
  const ar = lang === "ar";
  function moveStage(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    event.currentTarget.style.setProperty("--mbx", `${x * 10}deg`);
    event.currentTarget.style.setProperty("--mby", `${-y * 8}deg`);
  }

  function resetStage(event: MouseEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--mbx", "0deg");
    event.currentTarget.style.setProperty("--mby", "0deg");
  }

  return <main className={`mb-site ${ar ? "mb-ar" : ""}`} dir={ar ? "rtl" : "ltr"}>
    <div className="mb-topline">{ar ? "التوصيل لجميع مدن المغرب" : "Livraison partout au Maroc"} <span/> {ar ? "الخلص عند الاستلام" : "Paiement à la réception"}</div>
    <header className="mb-nav mb-wrap">
      <a className="mb-logo" href="#"><b>Moro</b>Best<i>.</i><small>Morocco&apos;s best products</small></a>
      <nav><a href="#mission">{ar ? "المهمة ديالنا" : "Notre mission"}</a><a href="#parcours">{ar ? "كيفاش كتدوز الطلبية" : "Comment ça marche"}</a><a href="#maroc">{ar ? "التوصيل فالمغرب" : "Livraison au Maroc"}</a></nav>
      <button className="mb-lang" onClick={() => setLang(ar ? "fr" : "ar")}>{ar ? "FR" : "العربية"}</button>
    </header>

    <section className="mb-hero mb-wrap">
      <div className="mb-hero-copy">
        <div className="mb-kicker"><i/> {ar ? "طريقة جديدة وساهلة للتسوق فالمغرب" : "Une nouvelle façon d'acheter au Maroc"}</div>
        <h1>{ar ? <>منتوجات زوينة.<br/><em>كتوصلك حتى للدار.</em></> : <>Les bons produits.<br/><em>Livrés chez vous.</em></>}</h1>
        <p>{ar ? "MoroBest كاتختار ليك منتوجات مفيدة ومطلوبة، وكتسهّل عليك الطلب من أول كليك حتى يوصلك الكولي لباب دارك." : "MoroBest sélectionne des produits utiles et désirables, puis simplifie chaque étape jusqu'à votre porte."}</p>
        <div className="mb-actions"><a href="#parcours" className="mb-primary">{ar ? "شوف كيفاش كتدوز الطلبية" : "Voir comment ça marche"} <span>→</span></a><div><b>100%</b><small>{ar ? "الخلص ملي يوصلك الكولي" : "Paiement à la livraison"}</small></div></div>
        <div className="mb-proof"><span><MiniIcon type="truck"/>{ar ? "المغرب كامل" : "Tout le Maroc"}</span><span><MiniIcon type="cash"/>{ar ? "بلا خلصة فالأنترنت" : "Sans paiement en ligne"}</span><span><MiniIcon type="box"/>{ar ? "كنراقبوا الكولي" : "Colis contrôlés"}</span></div>
      </div>

      <div className="mb-stage" onMouseMove={moveStage} onMouseLeave={resetStage}>
        <div className="mb-glow"/><div className="mb-ring mb-ring-one"/><div className="mb-ring mb-ring-two"/>
        <div className="mb-phone">
          <div className="mb-phone-top"><span>9:41</span><i/></div>
          <div className="mb-social"><span>morobest</span><b>•••</b></div>
          <div className="mb-product-scene"><div className="mb-pedestal"/><div className="mb-box-shape"><i>MB</i></div><span className="mb-spark s1">✦</span><span className="mb-spark s2">✦</span></div>
          <div className="mb-post-copy"><b>{ar ? "المنتوج الجاي لي غيعجبك." : "Votre prochain coup de cœur."}</b><span>{ar ? "ساهل. سريع. حتى للدار." : "Simple. Rapide. Livré."}</span><button>{ar ? "اكتشف" : "Découvrir"}</button></div>
        </div>
        <div className="mb-float mb-float-a"><span><MiniIcon type="spark"/></span><p><b>{ar ? "اختيارات مفيدة" : "Sélection utile"}</b><small>{ar ? "لحياتك اليومية" : "Pour le quotidien"}</small></p></div>
        <div className="mb-float mb-float-b"><span><MiniIcon type="truck"/></span><p><b>{ar ? "توصيل سريع" : "Livraison rapide"}</b><small>{ar ? "للمغرب كامل" : "Partout au Maroc"}</small></p></div>
        <div className="mb-float mb-float-c"><span>✓</span><p><b>{ar ? "تأكد الطلب" : "Commande confirmée"}</b><small>{ar ? "مع الفريق ديالنا" : "Par notre équipe"}</small></p></div>
      </div>
    </section>

    <section className="mb-marquee"><div>{ar ? <>الدار <i>✦</i> الجمال <i>✦</i> الراحة <i>✦</i> الإكسسوارات <i>✦</i> التكنولوجيا <i>✦</i> الحيوانات <i>✦</i> الحياة اليومية</> : <>MAISON <i>✦</i> BEAUTÉ <i>✦</i> BIEN-ÊTRE <i>✦</i> ACCESSOIRES <i>✦</i> HIGH-TECH <i>✦</i> ANIMAUX <i>✦</i> QUOTIDIEN</>}</div></section>

    <section id="mission" className="mb-mission mb-wrap">
      <div className="mb-section-label">{ar ? "01 — المهمة ديالنا" : "01 — NOTRE MISSION"}</div>
      <div className="mb-mission-copy"><h2>{ar ? <>تجارة إلكترونية<br/><em>بالثقة والنية.</em></> : <>Le e-commerce<br/><em>en toute confiance.</em></>}</h2><p>{ar ? "كنقربوا للمغاربة اختيارات متنوعة ديال المنتوجات، بتجربة واضحة، إنسانية ومضمونة. بلا كارت بنكية وبلا تعقيدات: نتا كتطلب، حنا كنتاصلوا بيك، وكتخلص غير ملي يوصلك الكولي." : "Nous connectons les Marocains à une sélection variée de produits, avec une expérience claire, humaine et rassurante. Pas de carte bancaire, pas de complication : vous commandez, nous confirmons et vous payez à la réception."}</p></div>
      <div className="mb-stats"><article><strong>12</strong><span>{ar ? <>جهة<br/>كنوصلوا ليها</> : <>régions<br/>desservies</>}</span></article><article><strong>COD</strong><span>{ar ? <>الخلص<br/>عند الاستلام</> : <>paiement<br/>à la livraison</>}</span></article><article><strong>7/7</strong><span>{ar ? <>تتبع<br/>الطلبيات</> : <>suivi des<br/>commandes</>}</span></article></div>
    </section>

    <section id="parcours" className="mb-process">
      <div className="mb-wrap"><div className="mb-process-head"><div><span>{ar ? "02 — الطريق ديال طلبيتك" : "02 — VOTRE PARCOURS"}</span><h2>{ar ? <>من أول كليك<br/><em>حتى لباب دارك.</em></> : <>Du premier clic<br/><em>jusqu&apos;à votre porte.</em></>}</h2></div><p>{ar ? "كل طلبية كدوز من طريق واضح ومنظم. الفريق ديالنا كيتبع كل مرحلة باش تجربتك تبقى سهلة وسريعة." : "Chaque commande suit un parcours précis. Notre équipe veille sur chaque étape pour que votre expérience reste simple et rapide."}</p></div>
        <div className="mb-timeline">{steps.map(([number,title,text,arTitle,arText],index)=><article key={number}><div className="mb-step-line"><b>{number}</b><i/><span>{index===steps.length-1?"✓":""}</span></div><h3>{ar ? arTitle : title}</h3><p>{ar ? arText : text}</p></article>)}</div>
      </div>
    </section>

    <section id="maroc" className="mb-morocco">
      <div className="mb-zellige"/><div className="mb-wrap mb-morocco-grid"><div><span className="mb-section-label">{ar ? "من طنجة حتى للكويرة" : "DU NORD AU SUD"}</span><h2>{ar ? <>كنوصلوا ليك<br/><em>فين ما كنتي.</em></> : <>Nous livrons<br/><em>partout au Maroc.</em></>}</h2><p>{ar ? "شبكة التوصيل ديالنا كاتغطي 12 جهة. من بعد تأكيد الطلب، كنوجدوا الكولي وكنصيفطوه مع الليفرور فالأقرب وقت." : "Notre réseau dessert les 12 régions du Royaume. Après confirmation, votre colis est contrôlé, étiqueté puis remis au livreur dans les meilleurs délais."}</p></div><figure className="mb-map"><img src="/morocco-regions-official.svg" alt="الخريطة الرسمية الكاملة للمملكة المغربية بجهاتها الاثنتي عشرة"/><figcaption>{ar ? "الخريطة الرسمية للمملكة المغربية · 12 جهة" : "Carte officielle du Royaume du Maroc · 12 régions"}</figcaption></figure><div className="mb-regions">{regions.map(region=><span key={region}>{region}</span>)}</div></div>
    </section>

    <section id="engagements" className="mb-values mb-wrap">
      <div className="mb-section-label">{ar ? "03 — الالتزام ديالنا" : "03 — NOS ENGAGEMENTS"}</div><div className="mb-values-grid"><h2>{ar ? <>علاش تختار<br/><em>MoroBest؟</em></> : <>Pourquoi choisir<br/><em>MoroBest ?</em></>}</h2><article><span><MiniIcon type="box"/></span><h3>{ar ? "منتوجات مختارة" : "Produits sélectionnés"}</h3><p>{ar ? "كنختاروا عروض مفيدة، مطلوبة وبثمن مناسب للجودة." : "Des offres choisies pour leur utilité, leur tendance et leur rapport qualité-prix."}</p></article><article><span><MiniIcon type="truck"/></span><h3>{ar ? "توصيل وطني" : "Livraison nationale"}</h3><p>{ar ? "خدمة توصيل منظمة باش توصلك الطلبية فين ما كنتي فالمغرب." : "Une logistique organisée pour vous servir, où que vous soyez au Maroc."}</p></article><article><span><MiniIcon type="cash"/></span><h3>{ar ? "بلا مخاطرة" : "Aucun risque"}</h3><p>{ar ? "ما كتخلص حتى يوصلك الكولي وتستلم الطلبية ديالك." : "Vous réglez votre commande uniquement lorsqu'elle arrive entre vos mains."}</p></article></div>
    </section>

    <section className="mb-final"><div className="mb-wrap"><div><span>{ar ? "مرحبا بيك فـ MOROBEST" : "BIENVENUE CHEZ MOROBEST"}</span><h2>{ar ? <>الأحسن كيوصلك<br/><em>حتى لدارك.</em></> : <>Le meilleur arrive<br/><em>chez vous.</em></>}</h2></div><div className="mb-final-orbit"><span>م</span><i/><i/><i/></div></div></section>
    <footer><div className="mb-wrap"><a className="mb-logo" href="#"><b>Moro</b>Best<i>.</i></a><p>{ar ? "أحسن المنتوجات، كتوصل حتى لدارك." : "Morocco's best products, livrés chez vous."}</p><span>© 2026 MoroBest · المغرب</span></div></footer>
  </main>;
}
