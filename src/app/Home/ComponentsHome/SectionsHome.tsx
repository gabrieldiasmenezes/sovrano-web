//Essa é a segunda secao da página Home que descreve brevemente a experiencia Sovrano
export function DescriptionSovrano(){
    return(
            <section className="flex flex-col py-24 px-8 bg-[#f7f7f7] items-center justify-center gap-12 pt-32">
                <h1 className="relative top-20 text-5xl text-[#6B5645] font-semibold text-center mb-30">
                    Sovrano – Elegância e Tradição
                </h1>
                <p className="text-xl leading-relaxed text-[#6B5645] mx-auto max-w-4xl text-center mb-12">
                    Inspirado na alta gastronomia italiana, o Sovrano combina técnicas clássicas e ingredientes premium para criar pratos inesquecíveis. Cada detalhe, do ambiente sofisticado ao serviço impecável, foi pensado para proporcionar momentos únicos.
                </p>
            </section>
    )
}

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

//Seção de Contatos
// Dados de contato em um objeto
const contactData = [
    {
      title: "Contato e Reserva",
      content: "contato@restaurante.com\n(11) 98765-4321",
    },
    {
      title: "Horário de Funcionamento",
      content: "Almoço: 12:00 - 15:00\nJantar: 19:00 - 23:00",
    },
    {
      title: "Endereço",
      content: "Rua Exemplo, 123 - Cidade, Estado",
    },
  ];
  
  // Componente para o mapa
  export function ContactMap() {
    return (
      <section className="w-full bg-[#FAF3EB] py-24 px-12 flex flex-col items-center justify-center shadow-lg gap-12">
        <div className="relative top-10 w-full h-screen flex flex-col md:flex-row items-center md:justify-between md:gap-32 lg:gap-32 space-y-10 px-6 md:px-12">
          
          <iframe
            className="w-full lg:w-[70%] h-90 object-cover rounded-lg md:self-center md:mr-16 lg:mr-24"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.9537363153157!3d-37.81720997975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1d7ab8f%3A0x508ef9b0842ad7f5!2sMelbourne%2C%20VIC%2C%20Austr%C3%A1lia!5e0!3m2!1spt-BR!2sbr!4v1645678901234!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          <div className="text-[#6B5645] space-y-15 text-right">
            {contactData.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="font-regular mt-2">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  