interface BackgroundMenuProps{
    image:string;
    etapas:"ENTRADAS"|"CARNES E PEIXES"|"MASSAS"|"SOBREMESA"|"CARTA DE VINHOS"|"COQUETEIS CLÁSSICOS & AUTORIAS"|"BEBIDAS NÃO ALCOÓLICAS"
}

export default function BackgroundMenu({image,etapas}:BackgroundMenuProps) {
    return (
        <div className="relative z-10 w-full h-[80vh] flex justify-center items-center text-center overflow-hidden">
            <img className="absolute w-full h-full object-cover" src={image} alt="Background da página inicial" />
            <div className="absolute w-full h-full bg-black opacity-60"></div>
            
            {/* Texto centralizado */}
            <h1 className="relative w-full text-center text-primary z-10 text-4xl font-bold">{etapas}</h1>
        </div>
    );
}