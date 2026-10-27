"use client";

import * as React from "react";
import ClothingRailHero from "@/components/ui/product-rail-gallery";
import type { RailGarment } from "@/components/ui/product-rail-gallery";

export const COLLECTION_TITANIUM: RailGarment[] = [
  {
    id: "bone-tee",
    name: "Heavyweight Boxy Tee · Bone White",
    kind: "tee",
    color: "#EFEBE2",
    tag: "COTTON 240G",
    description: "240 GSM organic heavy cotton con corte relajado oversized y hombros caídos.",
    details: ["240 GSM Heavy Cotton", "Corte Boxy Oversized", "100% Algodón Peinado", "Tallas S · M · L · XL"],
    image: "https://cdn.21st.dev/assets/mirror/14/1485bf44725b18fcdba71bfae54d67d648ab3bff4b24215a042c0cc4c895a2e6.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/69/69937e656430ae33d950303e0d53051273e5b02189750ef1e7429ec4bbf95e20.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/83/838468c32f16b4acba62e4601276737411156052444712ff2534fefe994a7bed.webp",
  },
  {
    id: "cc-graphic",
    name: "Graphic Pump Cover Tee · Pitch Black",
    kind: "tee",
    color: "#101214",
    tag: "OVERSIZED",
    description: "Camiseta de corte relajado con serigrafía de alta definición y caída fluida.",
    details: ["Calce Pump Cover", "Costuras dobles reforzadas", "Algodón lavado vintage", "Drop shoulder"],
    image: "https://cdn.21st.dev/assets/mirror/d7/d769f183472d0fd98a7aff2a643593748cd36ef9da1497d9bf6f0d87d1025a9b.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/fe/fec6f7e96b198cc5b9aad333ca2c4c10968a746d87f6dc11d9c118607b509058.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/b3/b3b6984ea94b8b8cd19fb15387e89dca457ac0f947115c2a54a33217e4fb4571.webp",
  },
  {
    id: "oxford-sky",
    name: "Lounge Oxford Shirt · Sky Blue",
    kind: "shirt",
    color: "#A3D3EB",
    tag: "PREMIUM",
    description: "Camisa de algodón oxford respirable con caída suave para estilo contemporáneo.",
    details: ["100% Algodón Oxford", "Corte Relaxed Fit", "Bolsillo frontal estructurado"],
    image: "https://cdn.21st.dev/assets/mirror/47/470a7723cef068f81e8a4c09d1ab3f8630c61b734c2168b10f3858e45efbf31f.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/9b/9be14e5dce879756775677e2d82dadc2ad9a1690b7df2f82de360cb3600d0ee5.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/59/5984d5ca60fd1aeee7e688ec33c2219a1c537fcde90d2accab813c13985f8632.webp",
  },
  {
    id: "cardigan-olive",
    name: "Heavy Knit Cardigan · Moss Olive",
    kind: "knit",
    color: "#758151",
    tag: "EDICIÓN",
    description: "Cárdigan de punto grueso acanalado con botones orgánicos de madera y textura agradable.",
    details: ["Tejido acanalado grueso", "Botones de nogal", "Diseño unisex atemporal"],
    image: "https://cdn.21st.dev/assets/mirror/58/581b13c5ca241c653dc94d2c8048c92a60f022cfbaaf153261076d3a6655827e.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/d9/d9178d906d37268565cf10af3431aee543aacfc73610f7fa7b0fa4758c498cb3.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/de/dee1c529600e0460413f1a9b07a29bedb7ea7dc96181fce5d9d6501231e6e45d.webp",
  },
  {
    id: "hoodie-heather",
    name: "Fleece Heavyweight Hoodie · Heather Grey",
    kind: "hoodie",
    color: "#A0A5AB",
    tag: "420 GSM",
    description: "Polerón con capucha 420 GSM con interior afelpado térmico de tacto premium.",
    details: ["420 GSM Ultra Heavy", "Capucha doble capa sin cordón", "Bolsillo canguro oculto"],
    image: "https://cdn.21st.dev/assets/mirror/51/51750ba098dd622df46695bca781b3f0ec336a36b93b070e638cc04455def6d6.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/e7/e75c4ac8fb7f14caae756338a31f81f1437bb312b78e0d7d906e9f956e7968fa.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/a2/a2eb2463d52146c341ede6bb9f6067e917a23eb29b7b1d1d4c40ac084a01c7ce.webp",
  },
  {
    id: "polo-forest",
    name: "Piqué Sport Polo · Deep Forest",
    kind: "tee",
    color: "#185B37",
    tag: "ESSENTIAL",
    description: "Polo clásico de piqué peinado con cuello rígido de alta durabilidad.",
    details: ["100% Piqué Peinado", "Botonera invisible", "Calce Regular Fit"],
    image: "https://cdn.21st.dev/assets/mirror/19/19fe43cb681195ae227e3164088d86a07a1b6e33cc54c6e35637374736a16894.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/e0/e095182b1a7f04e600c5662aa871b4c055c294b152586817d84e312c22f744cf.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/00/005a8e10be234bc40917f3153208b8196ba1610c53c987e39942da1f4a7cd808.webp",
  },
];

export const COLLECTION_BLUSH: RailGarment[] = [
  {
    id: "calza-nude",
    name: "Calzas 7/8 Phone Pocket · Rosa Nude",
    kind: "knit",
    color: "#D7B5B2",
    tag: "SEAMLESS",
    description: "Calzas 7/8 en tono malva nude con bolsillo lateral profundo para smartphone y costuras planas anti-roce.",
    details: ["Bolsillo lateral para smartphone", "Tiro alto estilizador", "Cintura ancha sin enrollarse", "Tallas S · M · L"],
    image: "/products/calza-nude-pockets.png",
  },
  {
    id: "peto-celeste",
    name: "Peto Deportivo Racerback · Celeste Pastel",
    kind: "tee",
    color: "#8BC8E8",
    tag: "SOPORTE ALTO",
    description: "Top deportivo racerback de soporte anatómico, confeccionado en lycra deportiva transpirable.",
    details: ["Soporte medio-alto", "Espalda racerback ergonómica", "Secado rápido", "Copas removibles"],
    image: "/products/peto-celeste.png",
  },
  {
    id: "sweat-lilac",
    name: "Crewneck Fleece Sweatshirt · Muted Lilac",
    kind: "knit",
    color: "#D4BFE8",
    tag: "OVERSIZED",
    description: "Sweatshirt cuello redondo en tinte pastel lavado con puños y pretina de alta recuperación elástica.",
    details: ["380 GSM", "Pigment Dye Lavado Pastel", "Puños acanalados 2x2"],
    image: "https://cdn.21st.dev/assets/mirror/8e/8e38660e2add9637c27846d9b8d620f2abb228a5a153ccfd7b1c808b6845e1f8.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/b9/b9214a6e009ce4b3044595a51ea010c299135bab5b26775c43d7175c86e77898.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/59/591872e42b483c43c1cd08a3ac4d7d40c0b5fa2bc585a36096faded2e696e84e.webp",
  },
  {
    id: "calza-olive",
    name: "Calzas Capri Active · Verde Oliva Mesh",
    kind: "knit",
    color: "#6C7A52",
    tag: "MESH TECH",
    description: "Calzas deportivas capri de tiro alto con detalle de panel transpirable microperforado en pantorrillas.",
    details: ["Tiro alto reductor", "Paneles mesh transpirables", "Tela opaca anti-transparencias", "Calce anatómico"],
    image: "/products/calza-olive-mesh.png",
  },
  {
    id: "short-biker",
    name: "Biker Short Training · Gris Jaspeado",
    kind: "tee",
    color: "#7E8590",
    tag: "FLEX FIT",
    description: "Short deportivo de tiro alto en tejido suave y elástico, ideal para running, crossfit o gym.",
    details: ["Tiro alto", "Largo medio muslo", "Compresión anatómica", "Costura reforzada"],
    image: "/products/short-biker-gris.png",
  },
  {
    id: "breton",
    name: "Breton Stripe Longsleeve · Marine & Cream",
    kind: "knit",
    color: "#ECE6DA",
    tag: "ESSENTIAL",
    description: "Manga larga clásica marinera a rayas finas con cuello barco y algodón de caída suave.",
    details: ["220 GSM", "Rayas teñidas en hilo", "Calce relajado"],
    image: "https://cdn.21st.dev/assets/mirror/09/096002a95aba7de9c197de4cb5c78cbbe17c1677b19c547cc20c6dbef47a899c.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/74/74408a7dbb4f4fc6761ebb8d6ed93187248cddf75e1c2e70d38d04dfdd328776.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/ed/eda3afca537071a80d7d82b3f0d1055b56f1f3263c20772224bae6660bf4072c.webp",
  },
];

interface ShowroomProps {
  mode: "titanium" | "blush";
}

export default function ClothingRailShowroom({ mode = "titanium" }: ShowroomProps) {
  const items = mode === "blush" ? COLLECTION_BLUSH : COLLECTION_TITANIUM;
  const isBlush = mode === "blush";

  return (
    <div
      data-rail-demo
      className={`w-full transition-colors duration-500 ${
        isBlush
          ? "bg-gradient-to-b from-rose-50/70 via-pink-50/30 to-background text-zinc-900"
          : "bg-background text-foreground"
      }`}
    >
      <ClothingRailHero
        key={mode}
        items={items}
        hanger="wood"
        eyebrow={isBlush ? "ATELIER BLUSH · COLECCIÓN FEMENINA & ACTIVE" : "STUDIO TITANIUM · APPAREL & STREETWEAR"}
        heading="Tu clóset digital interactivo, prenda por prenda."
        caption="Desliza con el mouse o dedo por el riel, gira cada prenda en 360° y tócala para ver su ficha técnica."
        autoplay={false}
        labels={{
          front: "Frente",
          back: "Espalda",
          close: "Cerrar",
          show: "Ver prenda",
        }}
        action={
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/56949253373?text=Hola!%20Vi%20la%20demo%20del%20cat%C3%A1logo%203D%20y%20me%20gustar%C3%ADa%20cotizar%20para%20mi%20marca"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                isBlush
                  ? "bg-rose-500 hover:bg-rose-600 text-white"
                  : "bg-foreground hover:opacity-90 text-background"
              }`}
            >
              Consultar por WhatsApp (+569 49253373) →
            </a>
            <button
              type="button"
              onClick={() => {
                const el = document.querySelector('[data-garment="0"]') as HTMLButtonElement | null;
                el?.click();
              }}
              className="rounded-full border border-border/80 bg-background/80 backdrop-blur-sm px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-muted transition-colors"
            >
              Probar 360°
            </button>
          </div>
        }
      />
    </div>
  );
}
