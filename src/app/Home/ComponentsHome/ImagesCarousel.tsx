"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Lista das imagens que serão exibidas no carrossel
const images = [
  "Gallery/image1.jpg",
  "Gallery/image2.jpg",
  "Gallery/image3.jpg",
  "Gallery/image4.jpg",
  "Gallery/image5.jpg",
  "Gallery/image6.png",
  "Gallery/image7.jpg",
  "Gallery/image8.jpg",
  "Gallery/image9.jpg",
];

export default function Carousel() {
  const [index, setIndex] = useState(0); // Índice da imagem atual no carrossel
  const totalSections = Math.ceil(images.length / 3); // Total de seções de 3 imagens

  // Função para ir para o próximo slide
  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex + 3 >= images.length ? 0 : prevIndex + 3
    );
  };

  // Função para voltar ao slide anterior
  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? (totalSections - 1) * 3 : prevIndex - 3
    );
  };

  return (
    <section className="w-full bg-[#f7f7f7] py-16 px-8 flex flex-col items-center">
      {/* Container do Carrossel */}
      <div className="relative w-full max-w-6xl flex items-center">
        {/* Botão Esquerdo */}
        <button
          onClick={prevSlide}
          className="absolute left-[-60px] z-10 text-[#6B5645] border-2 border-[#6B5645] p-3 rounded-full shadow-md hover:bg-[#6B5645] hover:text-white transition duration-300"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Container das Imagens */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(index / 3) * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="w-1/3 px-2 flex-shrink-0">
                <img
                  src={img}
                  alt={`Imagem ${i + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botão Direito */}
        <button
          onClick={nextSlide}
          className="absolute right-[-60px] text-[#6B5645] z-10 border-2 border-[#6B5645] p-3 rounded-full shadow-md hover:bg-[#6B5645] hover:text-white transition duration-300"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}
