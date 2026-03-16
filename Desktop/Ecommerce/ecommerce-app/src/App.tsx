import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/productsDetail";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/cartContext";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./ErrorBoudary";

function App() {
  return (
    <CartProvider>
      <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </ErrorBoundary>
    </CartProvider>
  );
}

export default App;