"use client";

import { MouseEvent } from "react";

const steps = [
  ["01", "Vous voyez l’annonce", "Une offre claire apparaît sur vos réseaux sociaux."],
  ["02", "Vous cliquez", "Le lien vous mène vers la page dédiée au produit."],
  ["03", "Vous choisissez", "Vous découvrez les détails et sélectionnez votre offre."],
  ["04", "Vous commandez", "Un formulaire simple suffit, sans paiement en ligne."],
  ["05", "Nous confirmons", "Notre équipe vous contacte pour valider la commande."],
  ["06", "Nous préparons", "Contrôle, emballage et étiquetage avec soin."],
  ["07", "Vous recevez", "Le livreur vous remet le colis partout au Maroc."],
];

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

  return <main className="mb-site">
    <div className="mb-topline">Livraison partout au Maroc <span/> Paiement à la réception</div>
    <header className="mb-nav mb-wrap">
      <a className="mb-logo" href="#"><b>Moro</b>Best<i>.</i><small>Morocco&apos;s best products</small></a>
      <nav><a href="#mission">Notre mission</a><a href="#parcours">Comment ça marche</a><a href="#engagements">Nos engagements</a></nav>
      <a href="#parcours" className="mb-nav-cta">Découvrir le parcours <b>↘</b></a>
    </header>

    <section className="mb-hero mb-wrap">
      <div className="mb-hero-copy">
        <div className="mb-kicker"><i/> Une nouvelle façon d&apos;acheter au Maroc</div>
        <h1>Les bons produits.<br/><em>Livrés chez vous.</em></h1>
        <p>MoroBest sélectionne des produits utiles et désirables, puis simplifie chaque étape jusqu&apos;à votre porte.</p>
        <div className="mb-actions"><a href="#parcours" className="mb-primary">Voir comment ça marche <span>→</span></a><div><b>100%</b><small>Paiement à la livraison</small></div></div>
        <div className="mb-proof"><span><MiniIcon type="truck"/>Tout le Maroc</span><span><MiniIcon type="cash"/>Sans paiement en ligne</span><span><MiniIcon type="box"/>Colis contrôlés</span></div>
      </div>

      <div className="mb-stage" onMouseMove={moveStage} onMouseLeave={resetStage}>
        <div className="mb-glow"/><div className="mb-ring mb-ring-one"/><div className="mb-ring mb-ring-two"/>
        <div className="mb-phone">
          <div className="mb-phone-top"><span>9:41</span><i/></div>
          <div className="mb-social"><span>morobest</span><b>•••</b></div>
          <div className="mb-product-scene"><div className="mb-pedestal"/><div className="mb-box-shape"><i>MB</i></div><span className="mb-spark s1">✦</span><span className="mb-spark s2">✦</span></div>
          <div className="mb-post-copy"><b>Votre prochain coup de cœur.</b><span>Simple. Rapide. Livré.</span><button>Découvrir</button></div>
        </div>
        <div className="mb-float mb-float-a"><span><MiniIcon type="spark"/></span><p><b>Sélection utile</b><small>Pour le quotidien</small></p></div>
        <div className="mb-float mb-float-b"><span><MiniIcon type="truck"/></span><p><b>Livraison rapide</b><small>Partout au Maroc</small></p></div>
        <div className="mb-float mb-float-c"><span>✓</span><p><b>Commande confirmée</b><small>Par notre équipe</small></p></div>
      </div>
    </section>

    <section className="mb-marquee"><div>MAISON <i>✦</i> BEAUTÉ <i>✦</i> BIEN-ÊTRE <i>✦</i> ACCESSOIRES <i>✦</i> HIGH-TECH <i>✦</i> ANIMAUX <i>✦</i> QUOTIDIEN</div></section>

    <section id="mission" className="mb-mission mb-wrap">
      <div className="mb-section-label">01 — NOTRE MISSION</div>
      <div className="mb-mission-copy"><h2>Le e-commerce<br/><em>en toute confiance.</em></h2><p>Nous connectons les Marocains à une sélection variée de produits, avec une expérience claire, humaine et rassurante. Pas de carte bancaire, pas de complication : vous commandez, nous confirmons et vous payez à la réception.</p></div>
      <div className="mb-stats"><article><strong>12</strong><span>régions<br/>desservies</span></article><article><strong>COD</strong><span>paiement<br/>à la livraison</span></article><article><strong>7/7</strong><span>suivi des<br/>commandes</span></article></div>
    </section>

    <section id="parcours" className="mb-process">
      <div className="mb-wrap"><div className="mb-process-head"><div><span>02 — VOTRE PARCOURS</span><h2>Du premier clic<br/><em>jusqu&apos;à votre porte.</em></h2></div><p>Chaque commande suit un parcours précis. Notre équipe veille sur chaque étape pour que votre expérience reste simple et rapide.</p></div>
        <div className="mb-timeline">{steps.map(([number,title,text],index)=><article key={number}><div className="mb-step-line"><b>{number}</b><i/><span>{index===steps.length-1?"✓":""}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section id="engagements" className="mb-values mb-wrap">
      <div className="mb-section-label">03 — NOS ENGAGEMENTS</div><div className="mb-values-grid"><h2>Pourquoi choisir<br/><em>MoroBest ?</em></h2><article><span><MiniIcon type="box"/></span><h3>Produits sélectionnés</h3><p>Des offres choisies pour leur utilité, leur tendance et leur rapport qualité-prix.</p></article><article><span><MiniIcon type="truck"/></span><h3>Livraison nationale</h3><p>Une logistique organisée pour vous servir, où que vous soyez au Maroc.</p></article><article><span><MiniIcon type="cash"/></span><h3>Aucun risque</h3><p>Vous réglez votre commande uniquement lorsqu&apos;elle arrive entre vos mains.</p></article></div>
    </section>

    <section className="mb-final"><div className="mb-wrap"><div><span>BIENVENUE CHEZ MOROBEST</span><h2>Le meilleur arrive<br/><em>chez vous.</em></h2></div><div className="mb-final-orbit"><span>M</span><i/><i/><i/></div></div></section>
    <footer><div className="mb-wrap"><a className="mb-logo" href="#"><b>Moro</b>Best<i>.</i></a><p>Morocco&apos;s best products, livrés chez vous.</p><span>© 2026 MoroBest · Maroc</span></div></footer>
  </main>;
}
