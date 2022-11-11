import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Routes/ComponentsRoutes.jsx";
import { Home, About, NotFound } from "./Routes/PagesRoutes.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Chemin vers la page d'acceuil */}
        <Route path="/" element={<Home />} />
        {/* Chemin vers la page A propros */}
        <Route path="apropos" element={<About />} />
        {/* Routes vers la page d'erreur 
        (React-router-v6 n'utilise plus "switch" il faut donc déclarer une route vers l'enssemble des chemins non assignés avec "*")*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
