import "./App.css";
import Navegacion from "./Components/navegacion";
import Tarjeta_Presentacion from "./Components/T_Presentacion";
import Lenguajes from "./Components/Lenguajes";
import Tecnologias from "./Components/Tecnologias";

function App() {
  return (
    //jsx -> React.createElement() Similar
    <>
      <Navegacion />
      <Tarjeta_Presentacion />
      <Lenguajes />
      <Tecnologias />
    </>
  );
}

export default App;
