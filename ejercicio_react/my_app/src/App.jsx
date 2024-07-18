import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import { useFetch } from "./hooks/useGetProducts";

export default function App() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  return (
    <>
      <h1>Get products</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {products.length <= 0 && !loading && <p>No hay productos</p>}
      {products.map((product, index) => {
        return <Product key={index} {...product} />;
      })}
    </>
  );
}
