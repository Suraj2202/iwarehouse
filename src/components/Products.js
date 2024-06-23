import React, { useContext } from "react";
import productContext from "../context/product/productContext";
import ProductItem from "./ProductItem";
import AddProduct from "./AddProduct";

const Products = () => {
  const context = useContext(productContext);
  const { products } = context;
  return (
    <>
    <AddProduct/>
    <div className="row my-3">
        <h2>Your Product</h2>
      {products.map((product) => {
        return <ProductItem key={product._id} product={product} />;
      })}
    </div>
    </>
  );
};

export default Products;
