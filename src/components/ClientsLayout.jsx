import "../css/ClientsLayout.css";
import searchLogo from "../assets/search.svg";
import Navbar from "../generalComponents/Navbar";
import ClientsTableInfo from "./ClientsTableInfo";
import Button from "../generalComponents/Button";
import { useState, useEffect } from "react";
import { getClients } from "../logic/requests";

function ClientsLayout() {
  const [clients, setClients] = useState([]);

  const paintClients = async () => {
    let request = await getClients();
    setClients(request);
  };
 console.log(clients)
  useEffect(() => {
    paintClients();
  }, []);

  return (
    <>
      <main>
        <div className="input__container">
          <img src={searchLogo} />
          <input placeholder="Buscar Cliente"></input>
        </div>
        <section className="table__container">
          <div>
            <p>Nombre del Cliente</p>
            <p>Id</p>
            <p>Créditos Activos</p>
          </div>

          {clients.map((client) => {
            return (
              <ClientsTableInfo key={client.id}
                client={client}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default ClientsLayout;
