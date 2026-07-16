import "./css/style.css";

export const metadata = {
  title: "Premium Maroc | مشترك 4 بريزات + 4 USB",
  description: "اطلب المشترك الكهربائي الآمن بـ4 بريزات و4 مداخل USB. التوصيل لجميع مدن المغرب والأداء عند الاستلام.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar-MA" dir="rtl" className="scroll-smooth">
      <body
        className="bg-[#f7f5ef] font-sans tracking-tight text-gray-900 antialiased"
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
