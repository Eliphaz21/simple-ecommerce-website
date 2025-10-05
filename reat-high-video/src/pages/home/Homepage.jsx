import axios from "axios";  
import { useEffect, useState } from "react";  
import { Header } from "../../components/Header";
import { ProductGrid } from "./productsGrid";
import "./Homepage.css";
export function Homepage({cart}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getHomeData = async () =>{
     const response= await axios.get('/api/products');
     setProducts(response.data);
    };

     getHomeData();
  }, []);

  return (
    <>
     <title>Eccommerce project</title>
      <Header cart={cart} />

      <div className="home-page">
         <ProductGrid products={products} />
      </div>
    </>
  );
}
