

import { Accordion } from "../Routes/ComponentsRoutes";


export default function Lodging() {
  return (
    <div className="body">
      {/* Grâce au code précedent {annonces.pictures}, 
      {annonce.title}, etc on récupère les photos de l'annonce 
      son titre sa localisation, etc... */}
      <div className="div-accordion">
        {/* Avec title="..." je nomme mon collapse 
        car si je le fais directement sur le fichier collapse alors 
        tous les collapse utilisés se nomeront description 
        ou équipements par exemple Collapse 
        est un composant utilisé également dans le fichier A propos*/}
        <Accordion title="Description" content={"test"} />
        <Accordion title="Equipements" content={"test2"} />
      </div>
    </div>
  );
}
