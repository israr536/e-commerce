import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/cartContext";

const ProductDetail = () => {

  const { id } = useParams();
  const [product, setProduct] = useState<any>();

  const cartContext = useContext(CartContext);

  const cartItem = cartContext?.cart.find(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "40px",
        maxWidth: "1000px",
        margin: "auto"
      }}
    >
      {/* IMAGE */}
      <div
        style={{
          flex: 1,
          background: "#fff",
          border: "1px solid #eee",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center"
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            height: "300px",
            objectFit: "contain",
            width: "100%"
          }}
        />
      </div>

      {/* PRODUCT INFO */}
      <div style={{ flex: 1 }}>

        <h2 style={{ marginBottom: "15px" }}>
          {product.title}
        </h2>

        <p style={{ color: "#555", marginBottom: "20px" }}>
          {product.description}
        </p>

        <h3
          style={{
            fontSize: "26px",
            marginBottom: "20px"
          }}
        >
          ${product.price}
        </h3>

        {/* CART CONTROLS */}
        {cartItem ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}
          >
            <button
              style={{
                padding: "8px 15px",
                fontSize: "16px",
                cursor: "pointer"
              }}
              onClick={() => cartContext?.decreaseQty(product.id)}
            >
              -
            </button>

            <span style={{ fontSize: "18px" }}>
              {cartItem.quantity}
            </span>

            <button
              style={{
                padding: "8px 15px",
                fontSize: "16px",
                cursor: "pointer"
              }}
              onClick={() => cartContext?.increaseQty(product.id)}
            >
              +
            </button>
          </div>
        ) : (
          <button
            style={{
              padding: "12px 20px",
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px"
            }}
            onClick={() => cartContext?.addToCart(product)}
          >
            Add to Cart
          </button>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;