export type BackgroundMenuProps={
    image:string;
    etapas:"ENTRADAS"|"CARNES E PEIXES"|"MASSAS"|"SOBREMESA"|"CARTA DE VINHOS"|"COQUETEIS CLÁSSICOS & AUTORIAS"|"BEBIDAS NÃO ALCOÓLICAS"
}



export type MenuSection ={
    etapa: "ENTRADAS"|"CARNES E PEIXES"|"MASSAS"|"SOBREMESA"|"CARTA DE VINHOS"|"COQUETEIS CLÁSSICOS & AUTORIAS"|"BEBIDAS NÃO ALCOÓLICAS";
    id:string;
    background: string;
    text: any;
    imagens: any;
  }