"use client";

import * as React from "react";
import ClothingRailHero from "@/components/ui/product-rail-gallery";
import type { RailGarment } from "@/components/ui/product-rail-gallery";

export const SHOWROOM_APPAREL: RailGarment[] = [
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
    description: "Camisa de algodón oxford respirable con caída fluida para estilo contemporáneo.",
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
    description: "Cárdigan de punto grueso acanalado con botones orgánicos de madera y tacto suave.",
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
    description: "Polerón con capucha 420 GSM con interior afelpado térmico de máxima densidad.",
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
];

export const SHOWROOM_BAKERY: RailGarment[] = [
  {
    id: "torta-chocolate",
    name: "Torta Dúo Chocolate Belga & Avellanas",
    tag: "$24.990",
    description: "Bizcocho húmedo de trufa con ganache de chocolate belga 70% y praliné crujiente de avellanas.",
    details: ["12 a 14 porciones", "Cacao 70% Belga", "Sin conservantes artificiales", "Pedidos con 24h anticipación"],
    image: "/products/cake-chocolate.png",
  },
  {
    id: "cheesecake-frutos",
    name: "Cheesecake New York Frutos Rojos",
    tag: "$22.990",
    description: "Horneado lentamente con crema Philadelphia y corona de coulis casero de frambuesas y moras.",
    details: ["10 a 12 porciones", "Queso crema Philadelphia", "Base crujiente de galleta de mantequilla"],
    image: "/products/cheesecake.png",
  },
  {
    id: "croissant-pistacho",
    name: "Croissant de Mantequilla & Pistacho",
    tag: "$3.990",
    description: "Hojaldre tradicional francés con 48 capas de mantequilla y relleno de crema de pistacho siciliano.",
    details: ["Recién horneado a diario", "100% Mantequilla francesa", "Sin grasas hidrogenadas"],
    image: "/products/croissant.png",
  },
  {
    id: "macarons-box",
    name: "Caja de Macarons Franceses (12 Unid)",
    tag: "$14.990",
    description: "Surtido de macarons de harina de almendras: chocolate, pistacho, frambuesa y caramelo salado.",
    details: ["Caja para regalo", "100% Harina de almendras", "12 unidades surtidas"],
    image: "/products/macarons.png",
  },
  {
    id: "cinnamon-roll",
    name: "Roll de Canela Glaseado Artesanal",
    tag: "$2.990",
    description: "Masa brioche fermentada 24h con canela de Ceilán y glaseado suave de cream cheese.",
    details: ["Receta artesanal", "Canela Ceilán importada", "Glaseado cream cheese"],
    image: "/products/cinnamon-roll.png",
  },
  {
    id: "berry-tart",
    name: "Tartaleta Pastelera con Berries Silvestres",
    tag: "$18.990",
    description: "Base masa sablé crocante con suave crema pastelera a la vainilla y selección de frutos rojos frescos.",
    details: ["8 a 10 porciones", "Vaina de vainilla natural", "Fruta fresca del día"],
    image: "/products/berry-tart.png",
  },
];

export const SHOWROOM_PRODUCE: RailGarment[] = [
  {
    id: "canasta-familiar",
    name: "Canasta Familiar Huerta del Valle (10 kg)",
    tag: "$19.990",
    description: "Selección completa semanal de frutas, verduras y hojas verdes frescas cosechadas el mismo día.",
    details: ["10 kg variados", "Cosecha del día", "Frutas y verduras de temporada", "Directo del agricultor"],
    image: "/products/canasta-huerto.png",
  },
  {
    id: "paltas-hass",
    name: "Malla Paltas Hass Premium Quillota (2 kg)",
    tag: "$9.990",
    description: "Paltas Hass calibre 1 de textura mantecosa y cremosa, directo del Valle de Quillota.",
    details: ["Malla 2 kg", "Calibre 1 Selección", "100% Cremosidad garantizada"],
    image: "/products/paltas-hass.png",
  },
  {
    id: "frutillas-campo",
    name: "Caja Frutillas de San Pedro (1.5 kg)",
    tag: "$5.990",
    description: "Frutillas grandes y dulces cosechadas al punto óptimo de maduración en San Pedro de Melipilla.",
    details: ["Caja 1.5 kg", "Calibre exportación", "Sabor dulce natural"],
    image: "/products/strawberries.png",
  },
  {
    id: "citricos-pack",
    name: "Pack Cítricos Vitamina C (4 kg)",
    tag: "$7.490",
    description: "2 kg de naranjas de jugo Valencia y 2 kg de limones sutil jugosos de piel fina.",
    details: ["4 kg en total", "Naranjas de jugo dulces", "Limones sutil recién cortados"],
    image: "/products/citrus-box.png",
  },
  {
    id: "tomates-limachinos",
    name: "Cajón Tomates Limachinos Orgánicos (3 kg)",
    tag: "$6.990",
    description: "Auténticos tomates limachinos de semilla ancestral, con aroma intenso y pulpa jugosa.",
    details: ["Cajón 3 kg", "Cultivo orgánico sin químicos", "Sabor de antaño"],
    image: "/products/tomates-organicos.png",
  },
  {
    id: "arandanos-export",
    name: "Pack Arándanos del Sur (1 kg)",
    tag: "$4.990",
    description: "Arándanos gigantes crujientes de primera selección, ricos en antioxidantes naturales.",
    details: ["Pote 1 kg", "Calibre Jumbo", "Sur de Chile"],
    image: "/products/arandanos.png",
  },
];

export type IndustryKey = "apparel" | "bakery" | "produce";

export interface ShowroomProps {
  category?: IndustryKey;
}

export default function ClothingRailShowroom({ category = "apparel" }: ShowroomProps) {
  const whatsappUrl =
    "https://wa.me/56949253373?text=Hola!%20Vi%20la%20demo%20del%20cat%C3%A1logo%203D%20y%20me%20gustar%C3%ADa%20cotizar%20para%20mi%20marca";

  const data = React.useMemo(() => {
    switch (category) {
      case "bakery":
        return {
          items: SHOWROOM_BAKERY,
          hanger: "none" as const,
          eyebrow: "PASTELERÍA & REPOSTERÍA DE AUTOR",
          heading: "Tu vitrina dulce interactiva, postre por postre.",
          caption: "Desliza para ver tortas, hojaldres y postres artesanales. Toca para ver porciones y encargar.",
        };
      case "produce":
        return {
          items: SHOWROOM_PRODUCE,
          hanger: "none" as const,
          eyebrow: "HUERTA FRESCA & FRUTAS DE CAMPO",
          heading: "Del campo a tu hogar en una vitrina 3D.",
          caption: "Desliza por canastas, paltas y cosechas del día. Toca cualquier producto para pedirlo fresco.",
        };
      case "apparel":
      default:
        return {
          items: SHOWROOM_APPAREL,
          hanger: "wood" as const,
          eyebrow: "STUDIO SHOWROOM · VIRTUAL APPAREL",
          heading: "Tu clóset digital interactivo, prenda por prenda.",
          caption: "Desliza con el mouse o dedo, gira cada prenda en 360° frente/espalda y tócala para ver detalles.",
        };
    }
  }, [category]);

  return (
    <div data-rail-demo className="w-full bg-background text-foreground transition-all duration-300">
      <ClothingRailHero
        key={category}
        items={data.items}
        hanger={data.hanger}
        eyebrow={data.eyebrow}
        heading={data.heading}
        caption={data.caption}
        autoplay={false}
        labels={{
          front: "Frente",
          back: "Espalda",
          close: "Cerrar",
          show: "Ver producto",
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
              Inspeccionar 3D
            </button>
          </div>
        }
      />
    </div>
  );
}
