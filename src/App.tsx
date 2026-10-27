import * as React from "react";
import ClothingRailShowroom from "@/components/ui/demo";
import { ArrowUpRight, Check, MessageCircle, Sparkles } from "lucide-react";

export default function App() {
  const [mode, setMode] = React.useState<"titanium" | "blush">("titanium");
  const isBlush = mode === "blush";

  const whatsappUrl =
    "https://wa.me/56949253373?text=Hola!%20Vi%20la%20demo%20del%20cat%C3%A1logo%203D%20y%20me%20gustar%C3%ADa%20cotizar%20para%20mi%20marca";

  return (
    <div
      className={`min-h-screen antialiased flex flex-col font-sans transition-colors duration-700 ${
        isBlush
          ? "bg-[#FCF9F9] text-zinc-900 selection:bg-rose-200 selection:text-rose-950"
          : "bg-[#FAFAFA] text-zinc-900 selection:bg-zinc-900 selection:text-white"
      }`}
    >
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
              Catálogo Interactivo para Marcas de Ropa
            </span>
          </div>

          {/* Minimalist Mode Selector (Apple Style Segmented Control) */}
          <div className="p-1 rounded-full bg-zinc-100/90 border border-zinc-200/80 flex items-center shadow-inner">
            <button
              type="button"
              onClick={() => setMode("titanium")}
              className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                !isBlush
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Minimal
            </button>
            <button
              type="button"
              onClick={() => setMode("blush")}
              className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                isBlush
                  ? "bg-rose-500 text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <span>🌸</span>
              <span>Femenino</span>
            </button>
          </div>

          {/* Direct WhatsApp Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-full border transition-all ${
              isBlush
                ? "border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100"
                : "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-50"
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>+569 49253373</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>
        </div>
      </header>

      {/* Main Interactive Showroom */}
      <main className="flex-1">
        {/* Subhead Minimal Announcement */}
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-2 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase mb-3 bg-black/[0.03] border border-black/[0.05] text-zinc-600">
            <Sparkles className="w-3 h-3 text-amber-500" />
            Demo de Exhibición Virtual
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900 text-balance">
            La forma más elegante de presentar prendas en internet.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-500 max-w-xl mx-auto font-normal leading-relaxed">
            Una vitrina virtual donde cada cliente puede recorrer el perchero, girar cada pieza y consultar directo por WhatsApp.
          </p>

          {/* Quick Switch Helper */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-zinc-400">
            <span>Visualizando modo:</span>
            <span className="font-semibold text-zinc-700">
              {isBlush ? "Atelier Blush (Colección Femenina)" : "Studio Titanium (Colección Contemporánea)"}
            </span>
          </div>
        </div>

        {/* 3D Rail Hero Component */}
        <section className="relative w-full py-4">
          <ClothingRailShowroom mode={mode} />
        </section>

        {/* Apple Style Minimalist Specifications / Overview */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 border-t border-black/[0.06]">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
              Diseñado para alta conversión y máxima simplicidad.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500">
              Sin carritos complicados ni plantillas recargadas. Directo al grano.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div className="border-l border-zinc-200 pl-4 py-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
                Física Fluida en 3D
              </h3>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed font-normal">
                Efecto de inercia real, balanceo al deslizar y vista 360° frente y espalda en cualquier navegador sin instalar aplicaciones.
              </p>
            </div>

            <div className="border-l border-zinc-200 pl-4 py-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
                100% Adaptable a tu Marca
              </h3>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed font-normal">
                Montamos las fotos de tus poleras, polerones, vestidos o calzas con la paleta de colores y tipografía de tu negocio.
              </p>
            </div>

            <div className="border-l border-zinc-200 pl-4 py-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
                Cierre Directo por WhatsApp
              </h3>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed font-normal">
                Cada prenda redirige con un solo toque al chat de WhatsApp con el producto y talla ya seleccionados por el cliente.
              </p>
            </div>
          </div>
        </section>

        {/* Minimalist Contact Block */}
        <section className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div
            className={`p-8 sm:p-10 rounded-3xl border transition-all ${
              isBlush
                ? "bg-rose-50/50 border-rose-200/70"
                : "bg-white border-zinc-200/80 shadow-sm"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
              ¿Quieres implementar esta vitrina en tu tienda?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 leading-relaxed">
              Hablemos directamente por WhatsApp para coordinar una prueba con tus prendas y logotipo.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isBlush
                    ? "bg-rose-500 hover:bg-rose-600 text-white shadow-sm"
                    : "bg-zinc-900 hover:bg-zinc-800 text-white shadow-sm"
                }`}
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Hablar al WhatsApp (+569 49253373)</span>
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-5 text-[11px] text-zinc-400">
              <span className="inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Entrega rápida
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Optimizado para celular
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Quick Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2 group"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="text-xs font-semibold pr-1 hidden sm:inline-block">WhatsApp</span>
      </a>

      {/* iMac Minimal Footer */}
      <footer className="border-t border-black/[0.06] py-8 px-4 sm:px-6 bg-white/50 text-xs text-zinc-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Showroom 3D · Demostración de catálogo interactivo para tiendas.</p>
          <div className="flex items-center gap-6 text-zinc-600">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">
              WhatsApp: +569 49253373
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
