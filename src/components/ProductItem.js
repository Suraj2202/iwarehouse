import React from "react";
import "../App.css";

const ProductItem = ({ product }) => {
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <img
          src="https://cdn.worldvectorlogo.com/logos/50x50.svg"
          className="card-img-top mx-auto mt-3"
          alt={product.title}
          style={{ width: "100px", height: "100px" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <p className="card-text me-3 text-muted">
                Price: ₹{product.price}
              </p>
              <p className="card-text me-3 text-muted">
                Buy Count: {product.buycount}
              </p>
              <p className="card-text mb-0 text-muted">
                Offer Count: {product.offercount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
