import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import Footer from "./components/Footer";

const App = () => {
  const [product, setProduct] = useState([
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2023/8/338123544/SG/KC/UY/8852934/men-leather-formal-shoes.jpg",
      name: "product1",
      category: "car1",
      seller: "sel",
      price: 10,
    },
    {
      url: "https://5.imimg.com/data5/ANDROID/Default/2021/2/GP/WR/CY/123847091/product-jpeg-500x500.jpg",
      name: "product2",
      category: "car2",
      seller: "sel1",
      price: 1999,
    },
    {
      url: "https://5.imimg.com/data5/ANDROID/Default/2021/2/LP/UY/YF/123847091/product-jpeg-500x500.jpg",
      name: "product3",
      category: "sel2",
      seller: "car3",
      price: 2999,
    },
    {
      url: "https://baccabucci.com/cdn/shop/products/MG_1592_3d18cbd3-6a75-47f3-b8a4-e0de28d1fecd_1800x.jpg?v=1635454780",
      name: "product4",
      category: "sel3",
      seller: "car4",
      price: 2999,
    },
    {
      url: "https://baccabucci.com/cdn/shop/products/MG_1592_3d18cbd3-6a75-47f3-b8a4-e0de28d1fecd_1800x.jpg?v=1635454780",
      name: "product4",
      category: "sel3",
      seller: "car4",
      price: 2999,
    },
    {
      url: "https://baccabucci.com/cdn/shop/products/MG_1592_3d18cbd3-6a75-47f3-b8a4-e0de28d1fecd_1800x.jpg?v=1635454780",
      name: "product4",
      category: "sel3",
      seller: "car4",
      price: 2999,
    },
  ]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowtCart] = useState(false);
  console.log(cart);
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };
  const handleShow = (value) => {
    setShowtCart(value);
  };
  return (
    <div>
      <Header count={cart.length} handleShow={handleShow} />

      {showCart ? (
        <CartList cart={cart} />
      ) : (
        <ProductList product={product} addToCart={addToCart} />
      )}
      <Footer />
    </div>
  );
};

export default App;
