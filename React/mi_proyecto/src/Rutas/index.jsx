import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import ProductsDetal from "../pages/ProductsDetal/ProductsDetal";


export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
            <Route path="/" element={<App />} />
            <Route path="/producto/:id" element={<ProductsDetal />} />
            <Route path="/product/:id" element={<ProductsDetal/>}/>
          {/* <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}