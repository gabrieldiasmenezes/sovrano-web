import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader";
import { AboutSection } from "./AboutComponents/sectionAbout";

import { HeadersVariables } from "./AboutComponents/variables";


export default function About(){
    return(
        <>
            <PageHeader title={HeadersVariables.title} subtitle={HeadersVariables.subtitle} image={HeadersVariables.image}/>
            <AboutSection/>

            <Footer/>
        </>
    )
}