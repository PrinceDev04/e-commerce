import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ numberOfItem }) => {
  return (
    <section id="main__body">
      <div className="nav__container">
        <div className="row">
          <h1 className="title">AP COLLECTIONS</h1>
          <ul className="nav__links">
            <li className="nav__link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__link">
              <Link to="/cart">
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              </Link>
            </li>

            { numberOfItem > 0 && <span className="cart__length">{numberOfItem}</span>}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Nav;
