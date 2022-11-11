import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Routes/ComponentsRoutes.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;
