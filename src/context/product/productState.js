import React, { useState } from "react";
import productContext from "./productContext";

const ProductState = (props) => {
  const host = "http://localhost:5000";
  const productsInitial = [];
  const [products, setProducts] = useState(productsInitial);

  //Get all Product
  const getAllProducts = async () => {
    const response = await fetch(`${host}/api/product/fetchallproducts`, {
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NmY3ZGM5OTM2Yzk4MTVkYzNjMjE2In0sImlhdCI6MTcxOTA4Njc0OH0.KwRb8dsn8Rjc3lehc48ykyI8epW_7kYoKGFnxC5BcTs",
      },
    });

    const json = await response.json();
    setProducts(json);
  };

  //Add Product
  const addProduct = async (
    title,
    description,
    price,
    buycount,
    offercount
  ) => {
    const response = await fetch(`${host}/api/product/addproduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NmY3ZGM5OTM2Yzk4MTVkYzNjMjE2In0sImlhdCI6MTcxOTA4Njc0OH0.KwRb8dsn8Rjc3lehc48ykyI8epW_7kYoKGFnxC5BcTs",
      },
      body: JSON.stringify({ title, description, price, buycount, offercount }),
    });

    const product = await response.json();
    console.log(product)
    setProducts(products.concat(product));
  };

  //Edit Product
  const editProduct = async (
    id,
    title,
    description,
    price,
    buycount,
    offercount
  ) => {
    //ToDO: API call

    const response = await fetch(`${host}/api/product/updateproduct/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NmY3ZGM5OTM2Yzk4MTVkYzNjMjE2In0sImlhdCI6MTcxOTA4Njc0OH0.KwRb8dsn8Rjc3lehc48ykyI8epW_7kYoKGFnxC5BcTs",
      },
      body: JSON.stringify({ title, description, price, buycount, offercount }),
    });
    const json = await response.json();

    let newProduct = JSON.parse(JSON.stringify(products));

    //Logic to edit
    for (let index = 0; index < newProduct.length; index++) {
      if (newProduct[index]._id === id) {
        newProduct[index].title = title;
        newProduct[index].description = description;
        newProduct[index].price = price;
        newProduct[index].buycount = buycount;
        newProduct[index].offercount = offercount;

        break;
      }
    }

    setProducts(newProduct);

  };

  //Delete Product
  const deleteProduct = async (id) => {
    // ToDo: API Call
    const response = await fetch(`${host}/api/product/deleteproduct/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NmY3ZGM5OTM2Yzk4MTVkYzNjMjE2In0sImlhdCI6MTcxOTA4Njc0OH0.KwRb8dsn8Rjc3lehc48ykyI8epW_7kYoKGFnxC5BcTs",
      }
    });

    const json = await response.json()
    
    const remainingProduct = products.filter((product) => {
      return product._id !== id;
    });
    setProducts(remainingProduct);
  };
  return (
    <productContext.Provider
      value={{
        products,
        addProduct,
        editProduct,
        deleteProduct,
        getAllProducts,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
