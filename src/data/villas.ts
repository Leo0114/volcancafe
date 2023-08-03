import alcatras from "@assets/layout/villas.webp";
import bugan from "@assets/villas/bugambilia.webp";
import laurel from "@assets/villas/Laurel.webp";
export const procesarVillas = (villas: any) => {};

export const villas = [
  {
    imagen: alcatras,
    detalles: "/volcancafe/villas/Alcatraces",
    nombre: "Alcatraces",
    ubicacion: "Cofradía de Suchitlán, Comala",
    huespedes: 4,
    habitaciones: 2,
    baños: 1,
    camas: 1,
    precio: "2,300",
    precioAlto: "2,850",
    tipo: "Villa",
    disponible: true,
    minimoNoches: 2,
    fechasE: "Navidad y Año nuevo",
    fechasEminimoNoches: 2,
    fechasEPrecio: "3850",
    texto: "",
    promocion: "Preguntar por precios al ser menos de 4 personas",
    amenidades: ["Cocina equipada", "TV", "Wifi", "Estacionamiento"],
    reglas: [""],
  },
  {
    imagen: bugan,
    detalles: "/volcancafe/villas/Buganvilias",
    nombre: "Buganvilias",
    ubicacion: "Cofradía de Suchitlán, Comala",
    huespedes: 6,
    habitaciones: 2,
    camas: 1,
    baños: 1,
    precio: "2,700",
    precioAlto: "3,200",
    tipo: "Villa",
    disponible: true,
    minimoNoches: 2,
    fechasE: "Navidad y Año Nuevo",
    fechasEminimoNoches: 2,
    fechasEPrecio: "4,200",
    promocion: "Preguntar por precios al ser menos de 4 personas",
    amenidades: ["Cocina equipada", "TV", "Wifi", "Estacionamiento"],
    reglas: [""],
  },
  {
    imagen: laurel,
    detalles: "/volcancafe/villas/Laureles",
    nombre: "Laureles",
    ubicacion: "Cofradía de Suchitlán, Comala",
    huespedes: 4,
    habitaciones: 2,
    camas: 1,
    baños: 1,
    precio: "2,350",
    precioAlto: "2,850",
    tipo: "Villa",
    disponible: true,
    minimoNoches: 2,
    fechasE: "Navidad y Año Nuevo",
    fechasEminimoNoches: 2,
    fechasEPrecio: "3,850",
    promocion: "Preguntar por precios al ser menos de 4 personas",
    amenidades: ["Cocina equipada", "TV", "Wifi", "Estacionamiento"],
    reglas: [""],
  },
];
