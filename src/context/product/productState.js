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
        },
        {
          "_id": "667726a935f2ba6bf0cbaa89",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:53.965Z",
          "__v": 0
        },
        {
          "_id": "667726aa35f2ba6bf0cbaa8b",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:54.161Z",
          "__v": 0
        },
        {
          "_id": "667726aa35f2ba6bf0cbaa8d",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:54.332Z",
          "__v": 0
        },
        {
          "_id": "667726aa35f2ba6bf0cbaa8f",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:54.513Z",
          "__v": 0
        },
        {
          "_id": "667726aa35f2ba6bf0cbaa91",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:54.696Z",
          "__v": 0
        },
        {
          "_id": "667726aa35f2ba6bf0cbaa93",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:54.874Z",
          "__v": 0
        },
        {
          "_id": "667726ab35f2ba6bf0cbaa95",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:55.057Z",
          "__v": 0
        },
        {
          "_id": "667726ab35f2ba6bf0cbaa97",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:55.225Z",
          "__v": 0
        },
        {
          "_id": "667726ab35f2ba6bf0cbaa99",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:55.405Z",
          "__v": 0
        },
        {
          "_id": "667726ab35f2ba6bf0cbaa9b",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:55.589Z",
          "__v": 0
        },
        {
          "_id": "667726ab35f2ba6bf0cbaa9d",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T19:31:55.765Z",
          "__v": 0
        },
        {
          "_id": "66772d86953b3c6cc648a271",
          "user": "6676f7dc9936c9815dc3c216",
          "title": "Product2",
          "description": "ProductDesc2",
          "price": 200,
          "buycount": 10,
          "offercount": 2,
          "date": "2024-06-22T20:01:10.743Z",
          "__v": 0
        }
  ];

  const [products, setProducts] = useState(productsInitial);

  return (
    <productContext.Provider value={{ products, setProducts }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
