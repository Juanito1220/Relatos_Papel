import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No tienes productos en tu carrito.</p>
      ) : (
        <div>
          <div className="cart__items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                book={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>
          <div className="cart__summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <div className="cart__actions">
              <Link to="/checkout" className="button">
                Proceder con el Pago
              </Link>
              <Link to="/books" className="button secondary">
                Seguir Comprando
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;