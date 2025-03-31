import * as variable from "./variables"
interface SectionProps{
    title: string;
    description: string;
    image:string
}
function Section({ title, description, image }:SectionProps) {
    return (
        <section className="w-full bg-[#FAF3EB] py-24 px-12 flex flex-col items-center justify-center  gap-12 min-h-[600px] mb-24">
            <h1 className=" relative top-10 text-5xl font-semibold text-[#6B5645] text-center mb-12">
                {title}
            </h1>
            <div className="w-full flex flex-col md:flex-row items-center md:justify-between md:gap-24 lg:gap-32">
                <div className="flex flex-col md:w-1/2 items-center md:items-start text-center md:text-left space-y-8">
                    <p className="text-lg text-[#6B5645] leading-relaxed font-light mb-8">
                        {description}
                    </p>
                </div>
                <img 
                    src={image} 
                    alt="Prato sofisticado" 
                    className="w-90 h-90 object-cover rounded-lg shadow-lg md:self-center md:mr-16 lg:mr-24"
                />
            </div>
        </section>
    );
}

export function AboutSection() {
    return (
        <>
            <Section 
                title={variable.restaurantPhilosophy.nome} 
                description={variable.restaurantPhilosophy.descricao} 
                image={variable.restaurantPhotos.imagePhilosophy} 
            />
            
            {/* Imagem de Fundo entre as Sections */}
            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
                <img className="absolute top-0 left-0 w-full h-full object-cover" src="Gallery/ImageAbout.jpg" alt="Background da página inicial" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            </div>
            
            <Section 
                title={variable.restaurantExperience.nome} 
                description={variable.restaurantExperience.descricao} 
                image={variable.restaurantPhotos.imageExperience} 
            />
        </>
    );
}
