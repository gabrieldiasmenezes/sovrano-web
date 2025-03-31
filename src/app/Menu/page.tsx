import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader";
import DishesMenu from "./ComponentsMenu/Sections/DishesMenu";
import  DrinksMenu from "./ComponentsMenu/Sections/DrinksMenu";
import { HeadersVariables } from "./ComponentsMenu/MenuVariables/HeadersVariable";
import  WineMenu  from "./ComponentsMenu/Sections/WineMenu";

export default function Menu(){
    return(
        <>
            <PageHeader title={HeadersVariables.title} subtitle={HeadersVariables.subtitle} image={HeadersVariables.image}/>
            <DishesMenu/>
            <WineMenu/>
            <DrinksMenu/>
            <Footer/>
        </>
    )
}