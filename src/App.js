import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Routes/ComponentsRoutes.jsx";
import { Home, About, NotFound, Lodging } from "./Routes/PagesRoutes.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* => Page d'acceuil */}
        <Route path="/" element={<Home />} />
        {/* => Fiche Logement  route/:id */}
        <Route path="fichelogement/:id" element={<Lodging />} />
        {/* => Page A propros */}
        <Route path="apropos" element={<About />} />
        {/* => Page d'erreur 
        (React-router-v6 n'utilise plus "switch" il faut donc déclarer une route vers l'enssemble des chemins non assignés avec "*")*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
