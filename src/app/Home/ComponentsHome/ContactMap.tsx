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
  