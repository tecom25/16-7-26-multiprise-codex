"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "212675409754";

const features = [
  ["4", "prises européennes"],
  ["2", "ports USB-A rapides"],
  ["2", "ports USB-C rapides"],
  ["1", "interrupteur sécurisé"],
];

const benefits = [
  ["⚡", "Tout brancher", "Ordinateur, téléphone, TV et appareils du quotidien sur une seule multiprise."],
  ["🛡️", "Protection renforcée", "Protection contre la surchauffe et les surtensions, avec matériaux ignifuges."],
  ["🔌", "Compacte et pratique", "Un format propre qui libère votre espace à la maison comme au bureau."],
];

export default function Home() {
  const [error, setError] = useState("");

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const address = String(form.get("address") || "").trim();

    if (!name || !address || !/^(?:\+?212|0)[5-7]\d{8}$/.test(phone.replace(/[\s.-]/g, ""))) {
      setError("Merci de saisir votre nom, votre adresse et un numéro marocain valide.");
      return;
    }

    setError("");
    const message = [
      "Salam, je souhaite commander la Multiprise 4 prises + 4 USB.",
      "Prix : 169 DH (livraison incluse).",
      "",
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Adresse : ${address}`,
      "",
      "Paiement à la livraison.",
    ].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#161915]">
      <div className="bg-[#b31d25] px-4 py-2 text-center text-sm font-bold text-white">
        🇲🇦 Livraison partout au Maroc • Paiement à la livraison
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#" className="text-xl font-black tracking-tight"><span className="text-[#b31d25]">DAR</span> DEALS</a>
        <a href="#commander" className="rounded-full bg-[#1f8d49] px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5">Commander</a>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-5 lg:grid-cols-[1.05fr_.95fr] lg:pt-10">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d9d5c9] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#406c38]">✓ Produit pratique du quotidien</div>
          <h1 className="max-w-2xl text-4xl font-black leading-[1.03] tracking-[-.045em] sm:text-6xl">Plus de prises.<br/><span className="text-[#68a72b]">Moins de désordre.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5d615a]">La multiprise tout-en-un pour charger et alimenter tous vos appareils, rapidement et en toute sécurité.</p>
          <div className="mt-5 flex items-end gap-3"><strong className="text-4xl font-black text-[#b31d25]">169 DH</strong><span className="pb-1.5 text-sm font-extrabold text-[#1f8d49]">Livraison incluse</span></div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {features.map(([number, label]) => <div key={label} className="rounded-2xl border border-[#dedbd1] bg-white p-4 shadow-sm"><strong className="block text-2xl text-[#1f8d49]">{number}</strong><span className="text-xs font-bold text-[#666b63]">{label}</span></div>)}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#commander" className="rounded-xl bg-[#b31d25] px-7 py-4 font-black text-white shadow-xl shadow-red-950/20 transition hover:-translate-y-1">Je commande maintenant</a>
            <span className="text-sm font-bold text-[#676b64]">✓ Vous payez quand vous recevez</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-[#68a72b]" />
          <img src="/multiprise-1.png" alt="Multiprise avec quatre prises, deux ports USB-A et deux ports USB-C" className="relative w-full -rotate-1 rounded-[1.7rem] object-cover shadow-2xl" />
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-3 shadow-xl"><span className="block text-xs font-bold text-[#747870]">COMMANDE FACILE</span><strong className="text-[#1f8d49]">Via WhatsApp ✓</strong></div>
        </div>
      </section>

      <section className="bg-[#182019] py-16 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-10 max-w-2xl text-center"><p className="text-sm font-black uppercase tracking-[.2em] text-[#85c63f]">Pensée pour votre quotidien</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Une seule solution, partout chez vous</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map(([icon, title, text]) => <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6"><span className="text-3xl">{icon}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-2 leading-7 text-white/65">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-2">
          <img src="/multiprise-2.png" alt="Comparaison entre plusieurs câbles en désordre et la multiprise organisée" className="h-full w-full rounded-3xl object-cover shadow-lg" />
          <img src="/multiprise-3.png" alt="Protections de sécurité de la multiprise" className="h-full w-full rounded-3xl object-cover shadow-lg" />
        </div>
      </section>

      <section id="commander" className="bg-[#efe9dc] py-16 scroll-mt-4">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl lg:grid-cols-[.8fr_1.2fr]">
          <div className="relative min-h-80 bg-[#20231f] p-6 text-white">
            <img src="/multiprise-real.jpg" alt="Photo réelle de la multiprise vendue" className="h-72 w-full rounded-2xl object-cover" />
            <h2 className="mt-6 text-2xl font-black">Multiprise 4 prises + 4 USB</h2>
            <div className="mt-3 text-3xl font-black text-[#85c63f]">169 DH <span className="text-sm text-white/70">livraison incluse</span></div>
            <ul className="mt-4 space-y-2 text-sm text-white/75"><li>✓ Produit vérifié avant envoi</li><li>✓ Livraison partout au Maroc</li><li>✓ Paiement à la réception</li></ul>
          </div>
          <div className="p-6 sm:p-10">
            <p className="font-black uppercase tracking-widest text-[#1f8d49]">طلب الآن • Commandez</p>
            <h2 className="mt-2 text-3xl font-black">Remplissez vos informations</h2>
            <p className="mt-3 inline-flex rounded-full bg-[#e9f5e7] px-4 py-2 font-black text-[#1f8d49]">Total : 169 DH • Livraison incluse</p>
            <p className="mt-2 text-[#686c65]">Après validation, WhatsApp s’ouvrira avec votre commande prête à envoyer.</p>
            <form onSubmit={submitOrder} className="mt-7 space-y-4" noValidate>
              <label className="block"><span className="mb-2 block text-sm font-extrabold">Nom complet</span><input name="name" autoComplete="name" className="w-full rounded-xl border-[#d9d5ca] bg-[#faf9f6] px-4 py-3.5 focus:border-[#1f8d49] focus:ring-[#1f8d49]" placeholder="Ex : Youssef Alaoui" /></label>
              <label className="block"><span className="mb-2 block text-sm font-extrabold">Numéro de téléphone</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" className="w-full rounded-xl border-[#d9d5ca] bg-[#faf9f6] px-4 py-3.5 focus:border-[#1f8d49] focus:ring-[#1f8d49]" placeholder="06 12 34 56 78" /></label>
              <label className="block"><span className="mb-2 block text-sm font-extrabold">Adresse complète</span><textarea name="address" autoComplete="street-address" rows={3} className="w-full resize-none rounded-xl border-[#d9d5ca] bg-[#faf9f6] px-4 py-3.5 focus:border-[#1f8d49] focus:ring-[#1f8d49]" placeholder="Ville, quartier, rue..." /></label>
              {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm font-bold text-[#b31d25]">{error}</p>}
              <button type="submit" className="w-full rounded-xl bg-[#1f8d49] px-6 py-4 text-lg font-black text-white shadow-lg shadow-green-950/20 transition hover:bg-[#18763b]">Commander sur WhatsApp</button>
              <p className="text-center text-xs text-[#767a73]">🔒 Vos informations servent uniquement à traiter votre commande.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 text-center"><img src="/multiprise-4.png" alt="Utilisations de la multiprise à la maison, au bureau, dans la cuisine et pour le gaming" className="mx-auto w-full max-w-3xl rounded-3xl shadow-xl" /></section>

      <footer className="border-t border-black/10 px-5 py-8 text-center text-sm text-[#6c7069]">© 2026 Dar Deals • Livraison partout au Maroc • Paiement à la livraison</footer>
      <a href="#commander" className="fixed bottom-4 left-4 right-4 z-50 rounded-xl bg-[#b31d25] py-3.5 text-center font-black text-white shadow-2xl sm:hidden">Commander • 169 DH livré</a>
    </main>
  );
}
