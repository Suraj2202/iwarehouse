import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ProductState from "./context/product/productState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <ProductState>
        <Router>
          <Navbar />
          <Alert message = "iWarehouse - This is a warehouse product management"/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </ProductState>
    </>
  );
}

export default App;
