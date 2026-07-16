"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "212675409754";

const features = [
  ["4", "بريزات أوروبية"],
  ["2", "مداخل USB-A سريعة"],
  ["2", "مداخل USB-C سريعة"],
  ["1", "زر أمان وتحكم"],
];

const benefits = [
  ["⚡", "كلشي فبلاصة وحدة", "شحن الحاسوب، التلفون، التلفاز والأجهزة اليومية بمشترك واحد."],
  ["🛡️", "حماية قوية", "حماية من السخونية الزائدة ومن ارتفاع التيار بمواد مقاومة للاشتعال."],
  ["🔌", "صغيرة وعملية", "تصميم منظم كيوفر المساحة فالدار، فالمكتب وحتى فالكوزينة."],
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
      setError("عافاك دخل الاسم، العنوان ورقم هاتف مغربي صحيح.");
      return;
    }

    setError("");
    const message = [
      "السلام عليكم، بغيت نطلب المشترك الكهربائي 4 بريزات + 4 USB.",
      "الثمن: 169 درهم، التوصيل داخل فالثمن.",
      "",
      `الاسم: ${name}`,
      `الهاتف: ${phone}`,
      `العنوان: ${address}`,
      "",
      "الأداء عند الاستلام.",
    ].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-right text-[#161915]">
      <div className="bg-[#b31d25] px-4 py-2 text-center text-sm font-bold text-white">🇲🇦 التوصيل لجميع مدن المغرب • خلّص ملي توصلك السلعة</div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#" className="text-xl font-black tracking-tight"><span className="text-[#b31d25]">PREMIUM</span> MAROC</a>
        <a href="#commander" className="rounded-full bg-[#1f8d49] px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5">اطلب دابا</a>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-5 lg:grid-cols-[1.05fr_.95fr] lg:pt-10">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d9d5c9] bg-white px-4 py-2 text-xs font-extrabold text-[#406c38]">✓ منتوج عملي للاستعمال اليومي</div>
          <h1 className="max-w-2xl text-4xl font-black leading-[1.15] tracking-[-.035em] sm:text-6xl">بريزات كثر.<br/><span className="text-[#68a72b]">فوضى أقل.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5d615a]">المشترك المتكامل باش تشحن وتستعمل أجهزتك كاملة بسرعة وأمان، بلا صداع ديال الخيوط.</p>
          <div className="mt-5 flex items-end gap-3"><strong className="text-4xl font-black text-[#b31d25]">169 درهم</strong><span className="pb-1.5 text-sm font-extrabold text-[#1f8d49]">التوصيل مجاني</span></div>
          <div className="relative mt-7 lg:hidden">
            <div className="absolute -inset-2 rotate-2 rounded-[1.6rem] bg-[#68a72b]" />
            <img src="/multiprise-1.png" alt="مشترك كهربائي بأربع بريزات وأربع مداخل USB" className="relative w-full -rotate-1 rounded-[1.4rem] object-cover shadow-2xl" />
            <div className="absolute -bottom-4 -right-1 rounded-xl bg-white px-4 py-2 shadow-xl"><span className="block text-[10px] font-bold text-[#747870]">طلب ساهل وسريع</span><strong className="text-sm text-[#1f8d49]">عبر واتساب ✓</strong></div>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {features.map(([number, label]) => <div key={label} className="rounded-2xl border border-[#dedbd1] bg-white p-4 shadow-sm"><strong className="block text-2xl text-[#1f8d49]">{number}</strong><span className="text-xs font-bold text-[#666b63]">{label}</span></div>)}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#commander" className="rounded-xl bg-[#b31d25] px-7 py-4 font-black text-white shadow-xl shadow-red-950/20 transition hover:-translate-y-1">بغيت نطلب دابا</a>
            <span className="text-sm font-bold text-[#676b64]">✓ خلّص غير ملي توصلك السلعة</span>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-[#68a72b]" />
          <img src="/multiprise-1.png" alt="مشترك كهربائي بأربع بريزات وأربع مداخل USB" className="relative w-full -rotate-1 rounded-[1.7rem] object-cover shadow-2xl" />
          <div className="absolute -bottom-5 -right-3 rounded-2xl bg-white px-5 py-3 shadow-xl"><span className="block text-xs font-bold text-[#747870]">طلب ساهل وسريع</span><strong className="text-[#1f8d49]">عبر واتساب ✓</strong></div>
        </div>
      </section>

      <section className="bg-[#182019] py-16 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-10 max-w-2xl text-center"><p className="text-sm font-black tracking-[.1em] text-[#85c63f]">مصمم لراحتك اليومية</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">حل واحد لجميع أجهزتك</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map(([icon, title, text]) => <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6"><span className="text-3xl">{icon}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-2 leading-7 text-white/65">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16"><div className="grid gap-5 md:grid-cols-2"><img src="/multiprise-2.png" alt="تنظيم الأجهزة والخيوط بالمشترك الكهربائي" className="h-full w-full rounded-3xl object-cover shadow-lg" /><img src="/multiprise-3.png" alt="خصائص الأمان والحماية" className="h-full w-full rounded-3xl object-cover shadow-lg" /></div></section>

      <section id="commander" className="scroll-mt-4 bg-[#efe9dc] py-16">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl lg:grid-cols-[.8fr_1.2fr]">
          <div className="relative min-h-80 bg-[#20231f] p-6 text-white">
            <img src="/multiprise-real.jpg" alt="الصورة الحقيقية للمشترك الكهربائي" className="h-72 w-full rounded-2xl object-cover" />
            <h2 className="mt-6 text-2xl font-black">مشترك 4 بريزات + 4 USB</h2>
            <div className="mt-3 text-3xl font-black text-[#85c63f]">169 درهم <span className="text-sm text-white/70">التوصيل مجاني</span></div>
            <ul className="mt-4 space-y-2 text-sm text-white/75"><li>✓ كنراجعو المنتوج قبل الإرسال</li><li>✓ التوصيل لجميع مدن المغرب</li><li>✓ الأداء عند الاستلام</li></ul>
          </div>
          <div className="p-6 sm:p-10">
            <p className="font-black tracking-widest text-[#1f8d49]">اطلب دابا</p>
            <h2 className="mt-2 text-3xl font-black">عمر المعلومات ديالك</h2>
            <p className="mt-3 inline-flex rounded-full bg-[#e9f5e7] px-4 py-2 font-black text-[#1f8d49]">المجموع: 169 درهم • التوصيل مجاني</p>
            <p className="mt-2 text-[#686c65]">من بعد التأكيد، غادي يتحل واتساب والطلب ديالك واجد غير صيفطو.</p>
            <form onSubmit={submitOrder} className="mt-7 space-y-4" noValidate>
              <label className="block"><span className="mb-2 block text-sm font-extrabold">الاسم الكامل</span><input name="name" autoComplete="name" className="w-full rounded-xl border-[#d9d5ca] bg-[#faf9f6] px-4 py-3.5 text-right focus:border-[#1f8d49] focus:ring-[#1f8d49]" placeholder="مثال: يوسف العلوي" /></label>
              <label className="block"><span className="mb-2 block text-sm font-extrabold">رقم الهاتف</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" className="w-full rounded-xl border-[#d9d5ca] bg-[#faf9f6] px-4 py-3.5 text-right focus:border-[#1f8d49] focus:ring-[#1f8d49]" placeholder="06 12 34 56 78" /></label>
              <label className="block"><span className="mb-2 block text-sm font-extrabold">العنوان الكامل</span><textarea name="address" autoComplete="street-address" rows={3} className="w-full resize-none rounded-xl border-[#d9d5ca] bg-[#faf9f6] px-4 py-3.5 text-right focus:border-[#1f8d49] focus:ring-[#1f8d49]" placeholder="المدينة، الحي، الزنقة..." /></label>
              {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm font-bold text-[#b31d25]">{error}</p>}
              <button type="submit" className="w-full rounded-xl bg-[#1f8d49] px-6 py-4 text-lg font-black text-white shadow-lg shadow-green-950/20 transition hover:bg-[#18763b]">أكد الطلب عبر واتساب</button>
              <p className="text-center text-xs text-[#767a73]">🔒 معلوماتك غادي نستعملوها غير باش نجهزو الطلب.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 text-center"><img src="/multiprise-4.png" alt="استعمالات المشترك فالدار والمكتب والكوزينة والألعاب" className="mx-auto w-full max-w-3xl rounded-3xl shadow-xl" /></section>
      <footer className="border-t border-black/10 px-5 py-8 text-center text-sm text-[#6c7069]">© 2026 Premium Maroc • التوصيل لجميع مدن المغرب • الأداء عند الاستلام</footer>
      <a href="#commander" className="fixed bottom-4 left-4 right-4 z-50 rounded-xl bg-[#b31d25] py-3.5 text-center font-black text-white shadow-2xl sm:hidden">اطلب دابا • 169 درهم بالتوصيل</a>
    </main>
  );
}
