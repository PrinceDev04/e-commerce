import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +(item.price * item.quantity.toFixed(2));
    });

    return price;
  };

  return (
    <section id="cart__page">
      <div className="cart__container">
        {cart.map((item) => {
          return (
            <div className="cart__row" key={item.id}>
              <h1 className="cart__header">Item</h1>
              <div className="cart__img--div">
                <img className="cart__img" src={item.image} alt="" />
                <h3>{item.title.substring(0, 12)}</h3>
                <button className="remove" onClick={() => removeItem(item)}>
                  Remove From Cart
                </button>
              </div>

              <div className="div__total">
                <div className="div__init--price">
                  <h2>Initial Price</h2>
                  <p className="cart__price">${item.price}</p>
                </div>

                <div className="input__div">
                  <h2>Quantity</h2>
                  <input
                    type="number"
                    min={0}
                    max={99}
                    onChange={(event) =>
                      changeQuantity(item, event.target.value)
                    }
                  />
                </div>
                <div className="price__total">
                  <h2>Total Price</h2>
                  <div className="cart__price">
                    ${item.price * item.quantity.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="gross__price--total">
          <h1>Gross Total</h1>
          <p className="gross__price">{total()}</p>
          <button
            className="total"
            onClick={() => alert(`Haven't got around to doing this`)}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
