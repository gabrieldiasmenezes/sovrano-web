//Segunda secao após o carrossel onde mostra um prato do menu e sua descrição
export function IntrodutionMenu(){
    return(
        <section className="w-full bg-[#FAF3EB] py-24 px-12 flex flex-col items-center justify-center shadow-lg gap-12">
                <h1 className="relative top-15 text-5xl font-semibold text-[#6B5645] text-center mb-30">
                    Descubra o Sabor do Sovrano
                </h1>

                <div className="w-full flex flex-col md:flex-row items-center md:justify-between md:gap-24 lg:gap-32">
                    <div className="flex flex-col md:w-1/2 items-center md:items-start text-center md:text-left space-y-8">
                        <h3 className="text-2xl font-semibold text-[#6B5645] mb-6">
                            Tiramisù Clássico
                        </h3>
                        <p className="text-lg text-[#6B5645] leading-relaxed font-light mb-8">
                            Uma sobremesa irresistível que derrete na boca! Camadas cremosas de mascarpone envolvem delicadamente biscoitos de champagne embebidos no mais puro café espresso, finalizados com uma generosa camada de cacau. A combinação perfeita de suavidade, intensidade e um toque sutil de doçura que transporta você direto à tradição italiana. Cada colherada é um convite ao prazer, despertando os sentidos com seu equilíbrio perfeito entre cremosidade e sabor marcante.
                        </p>
                        <button className="px-6 py-3 bg-transparent border-[#6B5645] border-2 text-[#6B5645] font-semibold rounded-lg hover:bg-[#6B5645] hover:text-[#FAF3EB] transition duration-300">
                            Ver Cardápio
                        </button>
                    </div>

                    <img 
                        src="MenuDishes/tiramisu.png" 
                        alt="Prato sofisticado" 
                        className="w-90 h-90 object-cover rounded-lg shadow-lg md:self-center md:mr-16 lg:mr-24"
                    />
                </div>
            </section>
    )
}