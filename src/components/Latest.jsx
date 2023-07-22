import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Latest = () => {

  const [filter, setFilter] = useState([])
  const [product, setProduct] = useState(filter);

  useEffect(() => {
    async function main() {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
      setProduct(data);
      setFilter(data)
    }

    main();
  },  []);

  function filterProduct (cat) {
    const updatedList = product.filter((x) => x.category === cat)
    setProduct(updatedList)
  }

  return (
    <section id="latest">
    <div className="container2">
      <h1 className="latest__header">Latest Products</h1>
      <div className="btn__div">
        <button className="product__btn" onClick={() => setProduct(filter)}>All</button>
        <button className="product__btn" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="product__btn" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        <button className="product__btn" onClick={() => filterProduct("jewelery")}>Jewelery</button>
        <button className="product__btn" onClick={() => filterProduct("electronics")}>Electronic</button>
      </div>
      <div className="product__container">
        {product.map((products) => (
          <div className="row2" key={products.id}>
            <div className="img__div">
              <Link to={`/product/${products.id}`} >
              <img className="img" src={products.image} alt="" />
              </Link>
              <div className="product__info">
                <h3 className="product__name">{products.title.substring(0,12)}</h3>
                <p className="price">${products.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Latest;
