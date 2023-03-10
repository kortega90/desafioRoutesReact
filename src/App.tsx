import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes";
import Abount from "./routes/Abount";
import HomeBody from "./routes/HomeBody";
import NotFound from "./routes/NotFound";
import Product from "./routes/Product";
import Book from "./routes/Product/Book";
import Computer from "./routes/Product/Computer";
import Electronic from "./routes/Product/Electronic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="product" element={<Product />}>
            <Route path="computer" element={<Computer />} />
            <Route path="electronic" element={<Electronic />} />
            <Route path="book" element={<Book />} />
          </Route>
          <Route path="about" element={<Abount />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
