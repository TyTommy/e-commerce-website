import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        ></Route>
        <Route
          path="/product/:productId"
          element={<ProductPage />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
