import BackgroundMenu from "./BackgrounMenu";
import { CoqueteisMenu } from "../MenuVariables/sectionsMenu";

import  SectionsMenu  from "./SectionsMenu";

export default function DrinksMenu() {
    return (
      <>
        {CoqueteisMenu.map((section, index) => (
          <div key={index}>
            <BackgroundMenu image={section.background} etapas={section.etapa} />
            <div className="p-10 bg-[#FAF3EB]">
              <SectionsMenu text={section.text} imagens={section.imagens} invertido={false} />
            </div>
          </div>
        ))}
      </>
    );
  }