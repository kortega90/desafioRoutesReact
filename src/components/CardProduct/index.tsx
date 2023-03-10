import { NavLink, Outlet } from "react-router-dom";
import "./styles.css";
type Props = {
  P1: string;
  P2: string;
  P3: string;
};

export default function CardProduct({ P1, P2, P3 }: Props) {
  return (
    <>
      <div className="container card-product-flex">
        <NavLink
          to="/Product/computer"
          className={({ isActive }) =>
            isActive ? "menu-item-product menu-active" : "menu-item-product"
          }
        >
          {P1}
        </NavLink>
        <NavLink
          to="/Product/electronic"
          className={({ isActive }) =>
            isActive ? "menu-item-product menu-active" : "menu-item-product"
          }
        >
          {P2}
        </NavLink>
        <NavLink
          to="/Product/book"
          className={({ isActive }) =>
            isActive ? "menu-item-product menu-active" : "menu-item-product"
          }
        >
          {P3}
        </NavLink>
      </div>
      {/* <Outlet /> */}
    </>
  );
}
