import React from "react";
import "../App.css"; // Ensure App.css is needed elsewhere

const ProductItem = (props) => {

  const product = props.product;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <div className="container d-flex justify-content-end">
            <i className="fa-solid fa-trash-can mx-4 my-2"></i>
            <i className="fa-solid fa-pen-to-square mx-2 my-2"></i>
          </div>

          <hr className="my-2" />
          <div className="card-info">
            <div className="row">
              <div className="col-4">
                <p className="card-text text-muted">Price:</p>
                <p className="card-text text-muted">Buy:</p>
                <p className="card-text text-muted">Offer:</p>
              </div>
              <div className="col-8">
                <p className="card-text">₹{product.price}</p>
                <p className="card-text">{product.buycount}</p>
                <p className="card-text">{product.offercount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
