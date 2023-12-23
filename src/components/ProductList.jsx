import React from "react";
import "../App.css";

const ProductList = ({ product, addToCart }) => {
  return (
    <div className="flex">
      {product.map((productItem, ProductIndex) => {
        return (
          <div key={ProductIndex} style={{ width: "33%" }}>
            <div className="product-item">
              <img
                src={productItem.url}
                alt="image"
                width="100%"
                height="400px"
              />
              <p>
                {productItem.name} {productItem.category}
              </p>
              <p>{productItem.seller}</p>
              <p>Rs. {productItem.price} /-</p>
              <button onClick={() => addToCart(productItem)}>
                {" "}
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
