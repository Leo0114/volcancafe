import aguaBoda from "@assets/layout/aguaBoda.webp";
import fogatero from "@assets/layout/Fogatero.webp";
import banner from "@assets/layout/banner.webp";
import bodas from "@assets/layout/bodas.webp";
import cabañas from "@assets/layout/cabañas.webp";
import camastros from "@assets/layout/camastros.webp";
import descanso from "@assets/layout/descanso.webp";
import hoteles from "@assets/layout/hoteles.webp";
import intro from "@assets/layout/intro.webp";
import meseros from "@assets/layout/meserosBoda.webp";
import nocheCabaña from "@assets/layout/nocheCabaña.webp";
import tours from "@assets/layout/tours.webp";
import villas from "@assets/layout/villas.webp";

export const layoutImages = (layoutImg: string) => {
  const images = {
    aguaBoda: aguaBoda,
    fogatero: fogatero,
    banner: banner,
    bodas: bodas,
    cabañas: cabañas,
    camastros: camastros,
    descanso: descanso,
    hoteles: hoteles,
    intro: intro,
    meseros: meseros,
    nocheCabaña: nocheCabaña,
    tours: tours,
    villas: villas,
  };
  return images[layoutImg] || null;
};
