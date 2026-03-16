import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Cart = () => {

  const cartContext = useContext(CartContext);

  if (!cartContext || cartContext.cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Your Cart is Empty 🛒</h2>
        <p>Add some products to your cart.</p>
      </div>
    );
  }

  const total = cartContext.cart.reduce(
    (sum: number, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px"
      }}
    >
      <h2 style={{ marginBottom: "25px" }}>Shopping Cart</h2>

      {cartContext.cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "grid",
            gridTemplateColumns: "80px 1fr 120px 150px 120px 80px",
            alignItems: "center",
            gap: "15px",
            padding: "15px",
            border: "1px solid #eee",
            borderRadius: "8px",
            marginBottom: "15px",
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}
        >
          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.title}
            style={{
              height: "60px",
              objectFit: "contain"
            }}
          />

          {/* TITLE */}
          <h4 style={{ fontSize: "14px" }}>{item.title}</h4>

          {/* PRICE */}
          <p>${item.price}</p>

          {/* QUANTITY */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <button
              style={{ padding: "5px 10px", cursor: "pointer" }}
              onClick={() => cartContext.decreaseQty(item.id)}
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              style={{ padding: "5px 10px", cursor: "pointer" }}
              onClick={() => cartContext.increaseQty(item.id)}
            >
              +
            </button>
          </div>

          {/* SUBTOTAL */}
          <p style={{ fontWeight: "bold" }}>
            ${(item.price * item.quantity).toFixed(2)}
          </p>

          {/* REMOVE */}
          <button
            style={{
              background: "red",
              color: "#fff",
              border: "none",
              padding: "6px 10px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
            onClick={() => cartContext.removeFromCart(item.id)}
          >
            X
          </button>
        </div>
      ))}

      {/* TOTAL */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #eee",
          borderRadius: "8px",
          background: "#fafafa",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h3>Total</h3>

        <h3>${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;