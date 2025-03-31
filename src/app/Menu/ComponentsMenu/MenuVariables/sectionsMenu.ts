import { backgroundImages } from "./backgroundSections";
import { images } from "./imagesSections";
import * as section from "./textMenu";
import { MenuSection } from "./types";

// Lista de seções do menu
export const menuSections: MenuSection[] = [
  {
    etapa: "ENTRADAS",
    id: "entradas",
    background: backgroundImages.appetizers,
    text: section.appetizersMenu,
    imagens: images.appetizers,
  },
  {
    etapa: "CARNES E PEIXES",
    id: "carnes-e-peixes",
    background: backgroundImages.meats,
    text: section.meatsMenu,
    imagens: images.meats,
  },
  {
    etapa: "MASSAS",
    id: "massas",
    background: backgroundImages.pasta,
    text: section.pastasMenu,
    imagens: images.pastas,
  },
  {
    etapa: "SOBREMESA",
    id: "sobremesas",
    background: backgroundImages.desserts,
    text: section.dessertsMenu,
    imagens: images.desserts,
  },
];

export const CoqueteisMenu: MenuSection[] = [
  {
    etapa: "COQUETEIS CLÁSSICOS & AUTORIAS",
    id: "coqueteis",
    background: backgroundImages.coqueteis,
    text: section.coqueteisMenu,
    imagens: images.coqueteis,
  },
  {
    etapa: "BEBIDAS NÃO ALCOÓLICAS",
    id: "bebidas",
    background: backgroundImages.bebidas,
    text: section.bebidasMenu,
    imagens: images.bebidas,
  },
];
