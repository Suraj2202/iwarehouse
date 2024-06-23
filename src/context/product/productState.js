import React, { useState } from "react";
import productContext from "./productContext";

const ProductState = (props) => {
  const productsInitial = [
        {
          "_id": "667726a635f2ba6bf0cbaa81",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2 updated",
          "description": "ProductDesc2 updated",
          "price": 500,
          "buycount": 50,
          "offercount": 10,
          "date": "2024-06-22T19:31:50.963Z",
          "__v": 0
        },
        {
          "_id": "667726a835f2ba6bf0cbaa83",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:52.834Z",
          "__v": 0
        },
        {
          "_id": "667726a935f2ba6bf0cbaa85",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:53.515Z",
          "__v": 0
        },
        {
          "_id": "667726a935f2ba6bf0cbaa87",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:53.771Z",
          "__v": 0
        }
  ];

  const [products, setProducts] = useState(productsInitial);

  //Add Product
  const addProduct = (title, description, price, buycount, offercount) =>{
    const product = {
      "_id": "66772d83353b3c6cc648a271",
      "user": "6676f7dc9936c9815dc3c216",
      "title": title,
      "description": description,
      "price": price,
      "buycount": buycount,
      "offercount": offercount,
      "date": "2024-06-22T20:01:10.743Z",
      "__v": 0
    }

    setProducts(products.concat(product));
  }
  //Edit Product
  const editProduct = () =>{

  }

  //Delete Product
  const deleteProduct = () =>{

  }
  return (
    <productContext.Provider value={{ products, addProduct, editProduct, deleteProduct }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
