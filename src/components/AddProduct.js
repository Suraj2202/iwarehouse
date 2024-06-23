import React, { useContext, useState } from "react";
import productContext from "../context/product/productContext";

const AddProduct = () => {
  const context = useContext(productContext);
  const { addProduct } = context;

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    buycount: "",
    offercount: "",
  });
  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct(
      product.title,
      product.description,
      product.price,
      product.buycount,
      product.offercount
    );

    setProduct({
      title: "",
      description: "",
      price: "",
      buycount: "",
      offercount: "",
    });
  };
  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Product</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={product.title}
              onChange={onChange}
              minLength={3}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={product.description}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={product.price}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="buycount" className="form-label">
              Buy Count
            </label>
            <input
              type="number"
              className="form-control"
              id="buycount"
              name="buycount"
              value={product.buycount}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="offercount" className="form-label">
              Offer Count
            </label>
            <input
              type="number"
              className="form-control"
              id="offercount"
              name="offercount"
              value={product.offercount}
              onChange={onChange}
              required
            />
          </div>
          <button
            disabled={
              product.title.length < 3 ||
              product.description.length < 5 ||
              product.price.length < 1 ||
              product.buycount.length < 1 ||
              product.offercount.length < 1
            }
            type="submit"
            className="btn btn-primary"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
