import BackgroundMenu from "./BackgrounMenu";
import { backgroundImages } from "../MenuVariables/backgroundSections";
import { wineCategories } from "../MenuVariables/wine";


export default function WineMenu() {
    return (
      <>
        <BackgroundMenu image={backgroundImages.wines} etapas={"CARTA DE VINHOS"} />
        <div className="relative z-10 p-16 text-primary bg-secondary gap-20">
          {wineCategories.map((category, index) => (
            <div key={index} className="mb-12 text-center">
              <h2 className="text-3xl font-semibold border-b-2 pb-4">{category.title}</h2>
              <ul className="flex flex-col mt-10 gap-4">
                {category.wines.map((wine, i) => (
                  <li key={i} className="text-xl mb-3">{wine}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    );
  }