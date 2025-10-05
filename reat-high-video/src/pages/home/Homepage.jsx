import axios from "axios";  
import { useEffect, useState } from "react";  
import { Header } from "../../components/Header";
import { ProductGrid } from "./productsGrid";
import "./Homepage.css";
export function Homepage({cart}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/api/products')
        .then((response) => {
          setProducts(response.data);
        });  
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
