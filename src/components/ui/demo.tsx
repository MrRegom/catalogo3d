"use client";

import * as React from "react";
import ClothingRailHero from "@/components/ui/product-rail-gallery";
import type { RailGarment } from "@/components/ui/product-rail-gallery";

export const CHILEAN_FOOTBALL_JERSEYS: RailGarment[] = [
  {
    id: "chile-local",
    name: "Camiseta Selección Chilena · La Roja Oficial",
    kind: "tee",
    color: "#D52B1E",
    tag: "$49.990",
    description: "Camiseta oficial de la Selección Chilena en vibrante color rojo con vivos azul marino y blanco en cuello y mangas.",
    details: ["100% Poliéster Reciclado", "Tecnología Dry-Fit Transpirable", "Escudo Federación Bordado", "Tallas S · M · L · XL"],
    image: "/products/jersey-chile.png",
  },
  {
    id: "colo-colo-local",
    name: "Camiseta Colo-Colo · Local Blanca Oficial",
    kind: "tee",
    color: "#FFFFFF",
    tag: "$46.990",
    description: "La clásica e histórica camiseta alba del Eterno Campeón con cuello negro y escudo del Cacique en alta definición.",
    details: ["Camiseta Oficial Local", "Escudo Cacique en Alta Definición", "Tejido Antitranspirante", "Tallas S · M · L · XL · XXL"],
    image: "/products/jersey-colocolo.png",
  },
  {
    id: "u-de-chile-local",
    name: "Camiseta Universidad de Chile · Local Azul Bulla",
    kind: "tee",
    color: "#002B7F",
    tag: "$46.990",
    description: "Camiseta oficial del Romántico Viajero en azul rey con la emblemática 'U' roja en el pecho y detalles en blanco.",
    details: ["Azul Rey Oficial", "Emblemática 'U' Roja Bordada", "Calce Regular Fit", "Tallas S · M · L · XL"],
    image: "/products/jersey-udechile.png",
  },
  {
    id: "u-catolica-local",
    name: "Camiseta Universidad Católica · Franja Cruzada",
    kind: "tee",
    color: "#FFFFFF",
    tag: "$46.990",
    description: "Histórica camiseta cruzada en blanco puro con la tradicional franja horizontal azul rey en el pecho.",
    details: ["Tradicional Franja Cruzada", "Escudo UC en Relieve", "Tela Técnica Ligera", "Tallas S · M · L · XL"],
    image: "/products/jersey-ucatolica.png",
  },
  {
    id: "colo-colo-visita",
    name: "Camiseta Colo-Colo · Visita Negra",
    kind: "tee",
    color: "#181A1D",
    tag: "$44.990",
    description: "Edición visitante en negro mate profundo con vivos blancos en hombros y escudo albo.",
    details: ["Edición Negra Alternativa", "Detalles en Blanco Mate", "Tejido Deportivo Transpirable", "Tallas S · M · L · XL"],
    image: "/products/jersey-colocolo-away.png",
  },
  {
    id: "cobreloa-local",
    name: "Camiseta Cobreloa · Naranja Zorro del Desierto",
    kind: "tee",
    color: "#E85D04",
    tag: "$42.990",
    description: "La representativa camiseta naranja de Calama, símbolo de los mineros y grandes gestas continentales.",
    details: ["Naranja Clásico Minero", "Escudo Zorro del Desierto", "Edición Especial", "Tallas S · M · L · XL"],
    image: "/products/jersey-cobreloa.png",
  },
];

export default function ClothingRailShowroom() {
  const whatsappUrl =
    "https://wa.me/56949253373?text=Hola!%20Vi%20la%20demo%20del%20cat%C3%A1logo%203D%20de%20camisetas%20y%20me%20gustar%C3%ADa%20cotizar%20para%20mi%20tienda";

  return (
    <div data-rail-demo className="w-full bg-background text-foreground">
      <ClothingRailHero
        items={CHILEAN_FOOTBALL_JERSEYS}
        hanger="wood"
        eyebrow="TIENDA DEPORTIVA 3D · FÚTBOL CHILENO & SELECCIÓN"
        heading="Tu clóset futbolero interactivo, camiseta por camiseta."
        caption="Desliza con el mouse o dedo por el riel, gira cada camiseta en 360° y tócala para ver tallas y detalles."
        autoplay={false}
        labels={{
          front: "Frente",
          back: "Espalda",
          close: "Cerrar",
          show: "Ver camiseta",
        }}
        action={
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-background shadow-sm outline-none transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            >
              Pedir por WhatsApp →
            </a>
            <button
              type="button"
              onClick={() => {
                const el = document.querySelector('[data-garment="0"]') as HTMLButtonElement | null;
                el?.click();
              }}
              className="rounded-full border border-border/80 bg-background/80 backdrop-blur-sm px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-muted transition-colors"
            >
              Inspeccionar 360°
            </button>
          </div>
        }
      />
    </div>
  );
}
