import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import homImg from "../../img/hom.svg";

export default function Header() {
  return (
    <header>
      <div className="header-content-container container">
        <nav className="navbar">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            Sobre nós
          </NavLink>
        </nav>

        <Link to="/">
          <img src={homImg} alt="Home Inicio" />
        </Link>
      </div>
    </header>
  );
}
