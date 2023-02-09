import "../css/navbar.css";
import logo from "../assets/logo.svg";

function Navbar({ option, changeMenuOption }) {
  const modifyMenuLayout = (e) => {
    if (e.target.value === 1) {
      changeMenuOption("clients");
    } else if (e.target.value === 2) {
      changeMenuOption("createNewClient");
    } 
  };

  return (
    <header>
      <nav>
        <ul>
          <li
            className={
              option === "clients"
                ? "navbar__option-active"
                : "navbar__option-inactive"
            }
            onClick={modifyMenuLayout}
            value="1"
          >
            Clientes
          </li>
          <li
            className={
              option === "createNewClient"
                ? "navbar__option-active"
                : "navbar__option-inactive"
            }
            onClick={modifyMenuLayout}
            value="2"
          >
            Nuevo cliente
          </li>
        </ul>
        <div className="navbar__container">
          <img src={logo} className="navbar__container-logo" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
