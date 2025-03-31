import BackgroundMenu from "./BackgrounMenu";
import { menuSections } from "../MenuVariables/sectionsMenu";

import  SectionsMenu  from "./SectionsMenu";

export default function DishesMenu() {
    return (
      <>
        {menuSections.map((section, index) => (
          <div key={index} className="relative z-10">
            <BackgroundMenu image={section.background} etapas={section.etapa} />
            <div className="p-10 ">
              <SectionsMenu text={section.text} imagens={section.imagens} invertido={false} />
            </div>
          </div>
        ))}
      </>
    );
  }