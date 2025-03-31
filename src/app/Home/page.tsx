import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader";
import ImagesCarousel from "./ComponentsHome/ImagesCarousel";
import * as Section from "./ComponentsHome/SectionsHome";

export default function HomePage() {
    const title = "Uma experiência gastronômica sofisticada para paladares exigentes.";
    const subtitle = "Sabores refinados, ambiente exclusivo e um serviço impecável. Descubra o Sovrano.";
    const image = "Backgrounds/backgroundHome.jpg";
    
    return (
        <>
            <PageHeader title={title} subtitle={subtitle} image={image}/>
            <Section.DescriptionSovrano/>
            <ImagesCarousel/>
            <Section.IntrodutionMenu/>
            <Section.ContactMap/>
            <Footer/>
        </>
    );
}
