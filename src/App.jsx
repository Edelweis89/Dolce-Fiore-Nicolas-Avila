import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="div-principal">
        <h1>Dolce Fiore </h1>
        <h2>Pasteleria y Chocolateria</h2>
        <ItemListContainer saludo="Bienvenidos a su momento mas Dulce" />
      </div>
    </>
  );
}

export default App;
