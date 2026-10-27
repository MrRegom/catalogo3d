import * as React from "react";
import ClothingRailShowroom, { type IndustryKey } from "@/components/ui/demo";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

export default function App() {
  const [category, setCategory] = React.useState<IndustryKey>("apparel");

  const whatsappUrl =
    "https://wa.me/56949253373?text=Hola!%20Vi%20la%20demo%20del%20cat%C3%A1logo%203D%20y%20me%20gustar%C3%ADa%20cotizar%20para%20mi%20marca";

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white flex flex-col font-sans">
      {/* iMac Minimal Top Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-black/[0.06] bg-white/75 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tracking-tight uppercase">
              Showroom<span className="font-light text-zinc-400">.3D</span>
            </span>
            <span className="hidden sm:inline-block h-3.5 w-px bg-zinc-300" />
            <span className="hidden sm:inline-block text-[11px] text-zinc-500 font-normal tracking-wide">
              Catálogo Interactivo para Negocios
            </span>
          </div>

          {/* Minimalist Industry Switcher (Apple Style Segmented Control) */}
          <div className="p-1 rounded-full bg-zinc-100/90 border border-zinc-200/80 flex items-center shadow-inner">
            <button
              type="button"
              onClick={() => setCategory("apparel")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                category === "apparel"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              👕 Ropa
            </button>
            <button
              type="button"
              onClick={() => setCategory("bakery")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                category === "bakery"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              🍰 Pastelería
            </button>
            <button
              type="button"
              onClick={() => setCategory("produce")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                category === "produce"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              🥑 Frutas & Huerta
            </button>
          </div>

          {/* Contactar Button */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full border border-zinc-300/80 bg-white text-zinc-800 hover:bg-zinc-50 shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Contactar</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Interactive Showroom */}
      <main className="flex-1">
        {/* Minimal Hero Header */}
        <div className="max-w-4xl mx-auto px-4 pt-12 pb-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase mb-3 bg-black/[0.03] border border-black/[0.05] text-zinc-600">
            <Sparkles className="w-3 h-3 text-amber-500" />
            Vitrina 3D Multirubro
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900 text-balance">
            La vitrina interactiva para cualquier tipo de producto.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-500 max-w-xl mx-auto font-normal leading-relaxed">
            {category === "apparel" && "Explora moda, poleras y streetwear con perchero de física real y giro 360°."}
            {category === "bakery" && "Exhibición gourmet para pastelerías, tortas de autor y repostería artesanal."}
            {category === "produce" && "Catálogo fresco para huertos, canastas de verduras y frutas del campo a la puerta."}
          </p>
        </div>

        {/* 3D Showcase Component */}
        <section className="relative w-full py-4">
          <ClothingRailShowroom category={category} />
        </section>
      </main>

      {/* Floating WhatsApp Quick Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
      >
        <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
        <span className="text-xs font-semibold pr-1">Contactar</span>
      </a>

      {/* iMac Minimal Footer */}
      <footer className="border-t border-black/[0.06] py-8 px-4 sm:px-6 bg-white/60 text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Showroom 3D · Demostración de catálogo interactivo para tiendas.</p>
          <div className="flex items-center gap-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors flex items-center gap-1.5 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Contactar por WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-zinc-900 transition-colors"
            >
              Volver arriba ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
