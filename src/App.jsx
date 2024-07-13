import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutContextProvider from "./context/CheckoutContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LoginContextProvider from "./context/LoginContext";

function App() {
  return (
    <LoginContextProvider>
      <CheckoutContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            ></Route>
            <Route
              path="/login"
              element={<LoginPage />}
            ></Route>
            <Route
              path="/register"
              element={<RegisterPage />}
            ></Route>
            <Route
              path="/product/:productId"
              element={<ProductPage />}
            ></Route>
            <Route
              path="/cart"
              element={<CheckoutPage />}
            ></Route>
          </Routes>
          <Footer />
        </Router>
      </CheckoutContextProvider>
    </LoginContextProvider>
  );
}

export default App;
