import descanso from "@assets/layout/descanso.webp";
import tours from "@assets/layout/tours.webp";
import villas from "@assets/layout/villas.webp";
import bodas from "@assets/layout/bodas.webp";
import cabañas from "@assets/layout/cabañas.webp";
import hoteles from "@assets/layout/hoteles.webp";

export const procesarEstancias = (estancias: any) => {};

export const estancias = [
  {
    src: cabañas,
    alt: "Imagen cabañas",
    content: "Cabañas",
    href: "/volcancafe/cabanas",
  },
  {
    src: descanso,
    alt: "Imagen casas de descanso",
    content: "Casas Descanso",
    href: "/volcancafe/descanso",
  },
  {
    src: villas,
    alt: "Imagen villas",
    content: "Villas",
    href: "/volcancafe/villas",
  },
  {
    src: tours,
    alt: "Imagen tours",
    content: "Tours",
    href: "/volcancafe/tours",
  },
  {
    src: bodas,
    alt: "Imagen Bodas",
    content: "Bodas",
    href: "/volcancafe/bodas",
  },
  {
    src: hoteles,
    alt: "Imagen hoteles",
    content: "Hoteles",
    href: "/volcancafe/hoteles",
  },
];
