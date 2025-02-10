import {  useEffect } from "react";
import { fetchProducts } from "../features/Shopcart/productSlice";


import ProductList from "../layouts/ProductList";
import Navbar from "../layouts/Navbar";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
 
const {items:products,status}= useSelector((state)=> state.products);
 const dispatch=useDispatch();
  useEffect(() => {
    if(status==='idle'){
      dispatch(fetchProducts())
    }
  }, [status]);
  if(status==='loading') return <p>Loading Products..</p>
  if(status==='failed') return <p>Failed to load Products..Please Try Again</p>
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
