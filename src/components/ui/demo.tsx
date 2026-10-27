"use client";

import * as React from "react";
import ClothingRailHero from "@/components/ui/product-rail-gallery";
import type { RailGarment } from "@/components/ui/product-rail-gallery";

export const SHOWROOM_ITEMS: RailGarment[] = [
  {
    id: "bone-tee",
    name: "Heavyweight Boxy Tee · Bone White",
    kind: "tee",
    color: "#EFEBE2",
    tag: "$24.990",
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
    tag: "$26.990",
    description: "Camiseta de entrenamiento pesada con estampa tipográfica mate en serigrafía de alta densidad.",
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
    tag: "$32.990",
    description: "Camisa de algodón oxford respirable con caída fluida para estilo urbano y post-entrenamiento.",
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
    tag: "$36.990",
    description: "Cárdigan de punto grueso acanalado con botones orgánicos de madera y tacto ultra suave.",
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
    tag: "$38.990",
    description: "Polerón con capucha 420 GSM con interior de micropolar afelpado térmico de máxima densidad.",
    details: ["420 GSM Ultra Heavy", "Capucha doble capa sin cordón", "Bolsillo canguro oculto"],
    image: "https://cdn.21st.dev/assets/mirror/51/51750ba098dd622df46695bca781b3f0ec336a36b93b070e638cc04455def6d6.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/e7/e75c4ac8fb7f14caae756338a31f81f1437bb312b78e0d7d906e9f956e7968fa.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/a2/a2eb2463d52146c341ede6bb9f6067e917a23eb29b7b1d1d4c40ac084a01c7ce.webp",
  },
  {
    id: "sweat-lilac",
    name: "Crewneck Fleece Sweatshirt · Muted Lilac",
    kind: "knit",
    color: "#CCB2E0",
    tag: "$34.990",
    description: "Sweatshirt cuello redondo en tinte pastel lavado con puños y pretina de alta recuperación elástica.",
    details: ["380 GSM", "Pigment Dye Lavado", "Puños acanalados 2x2"],
    image: "https://cdn.21st.dev/assets/mirror/8e/8e38660e2add9637c27846d9b8d620f2abb228a5a153ccfd7b1c808b6845e1f8.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/b9/b9214a6e009ce4b3044595a51ea010c299135bab5b26775c43d7175c86e77898.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/59/591872e42b483c43c1cd08a3ac4d7d40c0b5fa2bc585a36096faded2e696e84e.webp",
  },
  {
    id: "polo-forest",
    name: "Piqué Sport Polo · Deep Forest",
    kind: "tee",
    color: "#185B37",
    tag: "$28.990",
    description: "Polo deportivo de piqué premium con cuello rígido que mantiene su forma tras múltiples lavados.",
    details: ["100% Piqué Peinado", "Botonera invisible", "Calce Regular Fit"],
    image: "https://cdn.21st.dev/assets/mirror/19/19fe43cb681195ae227e3164088d86a07a1b6e33cc54c6e35637374736a16894.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/e0/e095182b1a7f04e600c5662aa871b4c055c294b152586817d84e312c22f744cf.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/00/005a8e10be234bc40917f3153208b8196ba1610c53c987e39942da1f4a7cd808.webp",
  },
  {
    id: "henley-brick",
    name: "Waffle Texture Henley · Terracotta",
    kind: "knit",
    color: "#B05139",
    tag: "$29.990",
    description: "Henley de manga larga confeccionado en punto waffle térmico y textura tridimensional.",
    details: ["Tejido Waffle Térmico", "3 botones metálicos mate", "Costuras planas"],
    image: "https://cdn.21st.dev/assets/mirror/84/84aa4b0e21ed11fcbc083647a607b94ee3a6c21cb66c114cfb1dad0792c15499.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/01/01c299df56a29afca8dad4a64858bd506667338bfbd0435118e6c3698c7881b3.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/9c/9ca38eeb156aae7d199d3c1ffb7947e395f77d1f094eea006c1b5fbb22352b4e.webp",
  },
  {
    id: "breton",
    name: "Breton Stripe Longsleeve · Marine",
    kind: "knit",
    color: "#E4DFD3",
    tag: "$27.990",
    description: "Manga larga clásica marinera a rayas azul marino con cuello barco y algodón de medio gramaje.",
    details: ["220 GSM", "Rayas teñidas en hilo", "Calce relajado"],
    image: "https://cdn.21st.dev/assets/mirror/09/096002a95aba7de9c197de4cb5c78cbbe17c1677b19c547cc20c6dbef47a899c.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/74/74408a7dbb4f4fc6761ebb8d6ed93187248cddf75e1c2e70d38d04dfdd328776.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/ed/eda3afca537071a80d7d82b3f0d1055b56f1f3263c20772224bae6660bf4072c.webp",
  },
  {
    id: "oversized-ochre",
    name: "Vintage Gym Tee · Ochre Gold",
    kind: "tee",
    color: "#DE9C31",
    tag: "$25.990",
    description: "Polera de entrenamiento en tono ocre vintage con lavado a la piedra y calce amplio.",
    details: ["Stone wash acabado vintage", "Algodón transpirable", "Tallas S · M · L"],
    image: "https://cdn.21st.dev/assets/mirror/72/7208c811f54e123dd7b1a5c1c3926f43ca832f6c4c20c45de10671ffd544409d.webp",
    backImage: "https://cdn.21st.dev/assets/mirror/d3/d356989b7bc741c5cfc934cac34983dfb24d5d6a6b6e7b8b7f6b27cd3eceae69.webp",
    sideImage: "https://cdn.21st.dev/assets/mirror/bf/bf94beeafb21f9cb21aa45057a67dc8a2e23ba95c7ac0f79dd27ba3ce4a1230c.webp",
  },
];

export default function ClothingRailShowroom() {
  const whatsappUrl =
    "https://wa.me/56949253373?text=Hola!%20Vi%20la%20demo%20del%20cat%C3%A1logo%203D%20y%20me%20gustar%C3%ADa%20cotizar%20para%20mi%20marca";

  return (
    <div data-rail-demo className="w-full bg-background text-foreground">
      <ClothingRailHero
        items={SHOWROOM_ITEMS}
        hanger="wood"
        eyebrow="STUDIO SHOWROOM · VIRTUAL APPAREL"
        heading="Tu clóset digital interactivo, prenda por prenda."
        caption="Desliza con el mouse o dedo, gira cada prenda en 360° frente/espalda y tócala para ver detalles."
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
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-background shadow-sm outline-none transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            >
              Contactar por WhatsApp →
            </a>
            <button
              type="button"
              onClick={() => {
                const el = document.querySelector('[data-garment="0"]') as HTMLButtonElement | null;
                el?.click();
              }}
              className="rounded-full border border-border/80 bg-background/80 backdrop-blur-sm px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-muted transition-colors"
            >
              Probar 360°
            </button>
          </div>
        }
      />
    </div>
  );
}
