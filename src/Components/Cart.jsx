import { useEffect } from "react";
import { useState } from "react";
import "../Components/Cart.scss";
import toast from "react-hot-toast";

function Cart() {
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return storedCart;
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  console.log(cart);

  const handleAdd = (item) => {
    const updatedCart = [...cart];
    const currentItem = updatedCart.find(
      (cartItem) => cartItem.name === item.name
    );
    currentItem.quantity += 1;

    setCart(updatedCart);
  };

  const handleReduce = (item) => {
    const updatedCart = [...cart];
    const currentItem = updatedCart.find(
      (cartItem) => cartItem.name === item.name
    );

    if (currentItem.quantity > 1) {
      currentItem.quantity -= 1;
    }

    setCart(updatedCart);
  };

  //  remove

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.name !== item.name);

    setCart(updatedCart);
    toast.success("item removed successfully !", {
      style: {
        borderRadius: "50px",
        background: "#000428",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div className="cart-container" id="cart-container">
      {/* <h1>Total Products in Cart: {cart.length}</h1> */}
      <div className="cart-items">
        {cart.map((item, index) => (
          <div className="cart-item" key={item.name}>
            <img src={item.item[0].img1} alt="Product Image" />
            <p>{item.name}</p>
            <p>₹ {item.price}</p>
            <button onClick={() => handleReduce(item)}>-</button>
            <p>Qty: {item.quantity}</p>
            <button onClick={() => handleAdd(item)}>+</button>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Order Summary</h3>
        <div className="totalpay">
          <div className="total">
            <p> Total: </p>
            <p>₹{getTotalPrice().toFixed(2)}</p>
          </div>
          <div className="discount">
            <p>Discount</p>
            <p>₹99.00</p>
          </div>
          <div className="subtotal">
            <p>Sub Total</p>
            <p>₹{(getTotalPrice() - 99).toFixed(2)}</p>
          </div>
          <button className="paynow">Pay Now</button>
        </div>
      </div>
    </div>
  );
}
export default Cart;

// <h1>Order Summary</h1>
//
//
// {/* <h1>Delivery Charge:100</h1> */}
// <br />
// <br />
//
// <br />
// <button
//   style={{
//     width: "95%",
//     height: "30px",
//     backgroundColor: "black",
//     color: "white",
//   }}
// >
//   Buy This Product
// </button>
