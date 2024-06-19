// Axios:
// Axios is a promise-based HTTP client for the browser and Node.js.
// It is used to make XMLHttpRequests from the browser
// that also supports the ES6 Promise API.

import { useEffect, useState } from "react";
import axios from "./util/axios";

// Benefits of Axios:
// 1. Make XMLHttpRequests from the browser
// 2. Supports the Promise API
// 3. Intercept request and response
// 4. Transform request and response data
// 5. Cancel requests
// 6. Automatic transforms for JSON data
// 7. Client-side support for protecting against XSRF

// Installation:
// npm install axios

// We will use https://dummyjson.com/ to get dummy data for our project.
// https://dummyjson.com/docs/products#products-all

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await axios.get("/products");
      setProducts(response.data.products);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h3>{error && error}</h3>
      {products.map((product, index) => {
        return <h3 key={index}>{`${product.title} - ${product.price}`}</h3>;
      })}
    </>
  );
}

export default App;
