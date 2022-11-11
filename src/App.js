import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Routes/ComponentsRoutes.jsx";
import { Home } from "./Routes/PagesRoutes.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Chemin vers la page d'acceuil */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
