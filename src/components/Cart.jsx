import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Cart() {
  const { cart, removeFromCart, setCart } = useContext(ProductContext);

  function increaseQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity < item.stock ? item.quantity + 1 : item.stock,
            }
          : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item,
      ),
    );
  }

  return (
    <div className="cartContainer">
      {cart.map((item) => (
        <div className="cartProductCard">
          <img src={item.image} alt={item.name} className="image" />
          <p>Item: {item.name}</p>
          <p>Price: {item.price} $</p>
          <div className="itemInCart">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="button"
            >
              -
            </button>
            <p>Item in cart:{item.quantity}</p>
            <button
              onClick={() => increaseQuantity(item.id)}
              className="button"
            >
              +
            </button>
          </div>
          <p>Total price: {(item.price * 100 * item.quantity) / 100}</p>
          <button onClick={() => removeFromCart(item.id)} className="button">
            Remove Item
          </button>
        </div>
      ))}
    </div>
  );
}
export default Cart;
