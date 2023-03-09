import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/home"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route index element={<Navigate to= "/home" />} />
        <Route path="home" element={<HomeBody />} />
        <Route path="promotion" element={<Promotion />} />
        <Route path="sub" element={<Subscription />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
