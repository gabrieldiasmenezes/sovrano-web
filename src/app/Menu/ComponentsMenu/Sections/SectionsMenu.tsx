interface TextProps {
  nome: string;
  descricao: string;
}

interface GlobalSectionProps {
  text: TextProps[];
  imagens: { imagem: string; texto: string }[]; // Alterado para refletir o novo formato
  invertido?: boolean;
}

export default function SectionsMenu({ text, imagens}: GlobalSectionProps) {
  const chunkSize = 3;
  const sections = Math.ceil(text.length / chunkSize);

  return (
    <>
      {[...Array(sections)].map((_, sectionIndex) => {
        const startIndex = sectionIndex * chunkSize;
        const endIndex = startIndex + chunkSize;
        const textSection = text.slice(startIndex, endIndex);
        const isInvertido = sectionIndex % 2 !== 0;

        return (
          <div key={sectionIndex} className={`flex flex-col w-full h-auto bg-[#FAF3EB] md:flex-row ${isInvertido ? 'md:flex-row-reverse' : ''} gap-20 py-20`}>
            <div className="md:w-1/2 flex flex-col gap-6 w-full">
              {textSection.map((text, index) => (
                <div
                  key={index}
                  className={`relative bg-opacity-10 p-4 w-full rounded-xl ${isInvertido ? 'text-right' : 'text-left'}`}
                >
                  <h3 className="text-lg font-semibold text-[#6B5645]">{text.nome}</h3>
                  <p className="text-[#6B5645] font-light">{text.descricao}</p>
                </div>
              ))}
            </div>

            <div className="md:w-1/2 relative">
              {/* Usamos a imagem correspondente a cada seção */}
              <img
                src={imagens[sectionIndex].imagem} // Acessando a imagem
                alt={imagens[sectionIndex].texto}  // Usando o texto como alt
                width={500}
                height={500}
                className="rounded-xl shadow-lg"
              />
              {/* Texto na parte inferior esquerda da imagem */}
              <p className="text-sm absolute bottom-4 left-4 text-[#6B5645] bg-[#FAF3EB] font-semibold bg-opacity-50 p-1 rounded-md">
                {imagens[sectionIndex].texto} {/* Exibindo o texto */}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
