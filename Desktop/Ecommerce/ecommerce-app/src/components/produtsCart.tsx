import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/cartContext"

const ProductCard = ({ product }: any) => {

  const cartContext = useContext(CartContext)

  const cartItem = cartContext?.cart.find(
    (item) => item.id === product.id
  )

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "10px",
        padding: "15px",
        background: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.2s"
      }}
    >
      {/* Image */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            height: "150px",
            objectFit: "contain",
            width: "100%"
          }}
        />
      </div>

      {/* Title */}
      <h4
        style={{
          fontSize: "14px",
          height: "40px",
          overflow: "hidden"
        }}
      >
        {product.title}
      </h4>

      {/* Price */}
      <p
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          margin: "10px 0"
        }}
      >
        ${product.price}
      </p>

      {/* Cart Buttons */}
      {cartItem ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px"
          }}
        >
          <button
            style={{
              padding: "5px 10px",
              cursor: "pointer"
            }}
            onClick={() => cartContext?.decreaseQty(product.id)}
          >
            -
          </button>

          <span>{cartItem.quantity}</span>

          <button
            style={{
              padding: "5px 10px",
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
            padding: "8px",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginBottom: "10px"
          }}
          onClick={() => cartContext?.addToCart(product)}
        >
          Add to Cart
        </button>
      )}

      {/* Details */}
      <Link
        to={`/product/${product.id}`}
        style={{
          textDecoration: "none",
          fontSize: "14px",
          color: "#007bff"
        }}
      >
        View Details
      </Link>
    </div>
  )
}

export default ProductCard