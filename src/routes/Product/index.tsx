import { Outlet } from "react-router-dom";
import CardProduct from "../../components/CardProduct";

export default function Product() {
  return (
    <>
      <main>
        <section>
          <div className="container">
            <div className="nav-container">
              <div className="mt20 mb20">
                <CardProduct P1="Computadores" P2="Eletrônicos" P3="Livros" />
              </div>
              <Outlet />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
