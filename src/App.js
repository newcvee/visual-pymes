import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Home/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          {/*           <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/category/:id" element={<Products />} /> */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </HashRouter>
    </div>
    
  );
}

export default App;
