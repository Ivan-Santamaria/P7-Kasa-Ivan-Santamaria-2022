import { Accordion, LodgingTitle, Tags } from "../Routes/ComponentsRoutes";

import { useParams } from "react-router-dom";

export default function Lodging() {
  let params = useParams();
  const annonces = require("../datas/logements.json");
  const annonce = annonces.find((x) => x.id === params.id);
  return (
    <div className="body">
      <LodgingTitle title={annonce.title} />

      {annonce.tags.map((tag) => (
        <Tags content={tag} key={tag} />
      ))}

      <div className="div-accordion">
        <Accordion title="Description" content={"test"} />
        <Accordion title="Equipements" content={"test2"} />
      </div>
    </div>
  );
}
