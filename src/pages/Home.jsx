import { useState, useEffect } from "react";



import ProductList from "../layouts/ProductList";
import Navbar from "../layouts/Navbar";
import Container from "../components/Container";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // Fetch all products
      .then(res => res.json())
      .then(data => setProducts(data)); // Store all products in state
  }, []);

  return (
    <>


      <Navbar/>
      <Container>
        <h1 className="text-2xl font-bold text-center my-5">All Products</h1>
        <div className="grid grid-cols-4 gap-6"> {/* Responsive Grid */}
          {products.length > 0 ? (
            products.map((product) => (
              <ProductList key={product.id} product={product} />
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </Container>
      
    </>
  );
};

export default Home;
