import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Navbar = () => {
  const cartContext = useContext(CartContext);

  const totalItems = cartContext?.cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#111",
        color: "#fff",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "#fff",
        }}
      >
        ShopEase
      </Link>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "25px" }}>
        <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
          Home
        </Link>

        <Link style={{ color: "#fff", textDecoration: "none" }} to="/products">
          Products
        </Link>

        <Link style={{ color: "#fff", textDecoration: "none" }} to="/cart">
          Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;