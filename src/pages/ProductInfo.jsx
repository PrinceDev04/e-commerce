import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductInfo = ({ addToCart }) => {
  const { id } = useParams();

  const [item, setItem] = useState([]);

  async function main() {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setItem(data);
  }

  useEffect(() => {
    main();
  }, []);

  return (
    <section id="info">
      <div className="product__sec">
        <Link to="/">
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        </Link>

        <div className="product__container2">
          <img className="img2" src={item.image} alt={item.title} />
          <div className="product__info2">
            <h3 className="item__title">{item.title}</h3>
            <p className="item__para">{item.description}</p>
            <p className="item__price">${item.price}</p>
            <Link to="/cart" >
            <button onClick={() => addToCart(item)} className="item__btn">Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
