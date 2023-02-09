import { useState } from "react";
import Navbar from "./generalComponents/Navbar";
import ClientsLayout from "./components/ClientsLayout";
import CreateClientLayout from "./components/CreateClientLayout";
import "./App.css";

function App() {
  const [option, setOption] = useState("clients")

  const changeMenuOption = (option) => {
    setOption(option)
  }

  return (
    <div className="App">
      <Navbar option={option} changeMenuOption={changeMenuOption} />
      {option === "clients" ? <ClientsLayout /> : <CreateClientLayout />}
    </div>
  );
}

export default App;
