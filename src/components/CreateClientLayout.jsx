import Button from "../generalComponents/Button";
import { createNewClient } from "../logic/requests";
import "../css/createClientLayout.css";
import { useState } from "react";

function CreateClientLayout() {
  const [clientName, setClientName] = useState("");
  const [clientFirstLastName, setClientFirstLastName] = useState("");
  const [clientSecondLastName, setClientSecondLastName] = useState("");
  const [email, setEmail] = useState("");
  const [creditAmount, setCreditAmount] = useState(0);

  const createClient = (e) => {
    e.preventDefault();
    const creditInfo = {}
    const data = {
      name: clientName,
      lastname: `${clientFirstLastName} ${clientSecondLastName}`,
      email: email,
      credits: [
        {
          total: creditAmount,
          creationDate: new Date(),
          numberOfPayments: 0,
          amountPayed: 0,
          remainingPayments: 4,
          remainingAmount: creditAmount,
          status: "active",
        }
      ],
    };
    /*createNewClient(data)
    resetInputs()*/
    let request = createNewClient(data)
    request.then(response => {
        console.log(response)
    })
  };

  const handleClientName = (e) => {
    e.preventDefault();
    setClientName(e.target.value);
  };
  const handleClientFirstLastName = (e) => {
    e.preventDefault();
    setClientFirstLastName(e.target.value);
  };
  const handleClientSecondLastName = (e) => {
    e.preventDefault();
    setClientSecondLastName(e.target.value);
  };
  const handleClientEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    setCreditAmount(e.target.value);
  };
  const handleCreditAmount = (e) => {
    e.preventDefault();
    setCreditAmount(e.target.value);
  };
  const resetInputs = () => {
    setClientName("");
    setClientFirstLastName("");
    setClientSecondLastName("");
    setEmail("");
    setCreditAmount(0);
  }
  return (
    <>
      <main className="main-container-create-client-layout">
        <h3>Ingrese los datos del cliente:</h3>
        <form onSubmit={createClient}>
          <div className="input-container">
            <label>Nombres(s):</label>
            <input type="text" onChange={handleClientName}></input>
          </div>
          <div className="input-container">
            <label>Primer Apellido:</label>
            <input type="text" onChange={handleClientFirstLastName}></input>
          </div>
          <div className="input-container">
            <label>Segundo Apellido:</label>
            <input type="text" onChange={handleClientSecondLastName}></input>
          </div>
          <div className="input-container">
            <label>Correo electrónico:</label>
            <input type="email" onChange={handleClientEmail}></input>
          </div>
          <div className="input-container">
            <label>Monto de crédito:</label>
            <input type="number" required onChange={handleCreditAmount}></input>
          </div>
          <Button name="Registrar Nuevo Cliente" />
        </form>
      </main>
    </>
  );
}

export default CreateClientLayout;
