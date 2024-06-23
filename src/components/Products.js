import React, { useContext, useEffect, useRef, useState } from "react";
import productContext from "../context/product/productContext";
import ProductItem from "./ProductItem";
import AddProduct from "./AddProduct";

const Products = () => {
  const context = useContext(productContext);
  const { products, getAllProducts, editProduct } = context;
  useEffect(() => {
    getAllProducts();
  }, []);

  const [product, setProduct] = useState({
    id: "",
    etitle: "",
    edescription: "",
    eprice: "",
    ebuycount: "",
    eoffercount: "",
  });

  const refButton = useRef(null);
  const refClose = useRef(null);

  const updateProductModel = (currentProduct) => {
    refButton.current.click();
    setProduct({
      id: currentProduct._id,
      etitle: currentProduct.title,
      edescription: currentProduct.description,
      eprice: currentProduct.price,
      ebuycount: currentProduct.buycount,
      eoffercount: currentProduct.offercount,
    });
  };

  const handleEditProduct = (e) => {
    editProduct(
      product.id,
      product.etitle,
      product.edescription,
      product.eprice,
      product.ebuycount,
      product.eoffercount
    );
    refClose.current.click();
  };
  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddProduct />

      <button
        ref={refButton}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Product
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={product.etitle}
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
                    id="edescription"
                    name="edescription"
                    value={product.edescription}
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
                    id="eprice"
                    name="eprice"
                    value={product.eprice}
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
                    id="ebuycount"
                    name="ebuycount"
                    value={product.ebuycount}
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
                    id="eoffercount"
                    name="eoffercount"
                    value={product.eoffercount}
                    onChange={onChange}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  product.etitle.length < 3 ||
                  product.edescription.length < 5 ||
                  product.eprice.length < 1 ||
                  product.ebuycount.length < 1 ||
                  product.eoffercount.length < 1
                }
                type="button"
                className="btn btn-primary"
                onClick={handleEditProduct}
              >
                Update Product
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Product</h2>
        <h6 className="my-3 text-muted">
          {products.length === 0 && "No products to display !!!"}
        </h6>
        {products.map((product) => (
          <ProductItem
            key={product._id}
            updateProduct={updateProductModel}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
