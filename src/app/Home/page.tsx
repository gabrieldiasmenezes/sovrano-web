import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader";
import { ContactMap } from "./ComponentsHome/ContactMap";
import { DescriptionSovrano } from "./ComponentsHome/DescriptionSovrano";
import ImagesCarousel from "./ComponentsHome/ImagesCarousel";
import { IntrodutionMenu } from "./ComponentsHome/IntrodutionMenu";


export default function HomePage() {
    const title = "Uma experiência gastronômica sofisticada para paladares exigentes.";
    const subtitle = "Sabores refinados, ambiente exclusivo e um serviço impecável. Descubra o Sovrano.";
    const image = "Backgrounds/backgroundHome.jpg";
    
    return (
        <>
            <PageHeader title={title} subtitle={subtitle} image={image}/>
            <DescriptionSovrano/>
            <ImagesCarousel/>
            <IntrodutionMenu/>
            <ContactMap/>
            <Footer/>
        </>
    );
}
