import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/produtsCart";

const Home = () => {

  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(1000);
  const [sort, setSort] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      });
  }, []);

  useEffect(() => {

    let filtered = [...products];

    if (search) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    filtered = filtered.filter((p) => p.price <= price);

    if (sort === "low") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);

  }, [search, category, price, sort, products]);

  return (
    <div style={{ padding: "20px" }}>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          background: "#f8f8f8",
          padding: "15px 20px",
          borderRadius: "8px",
          marginBottom: "30px",
          flexWrap: "wrap"
        }}
      >

        {/* Search */}
        <input
          style={{
            padding: "8px 12px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            minWidth: "200px"
          }}
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category */}
        <select
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #ddd"
          }}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
        </select>

        {/* Price */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Price:</span>

          <input
            type="range"
            min="0"
            max="1000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />

          <span>${price}</span>
        </div>

       
        <select
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #ddd"
          }}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>

      </div>

   
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px"
        }}
      >
        {filteredProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default Home;