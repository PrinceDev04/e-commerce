import React from "react";

const Header = () => {
  return (
    <section id="page">
      <div className="container">
        <div className="header__row">
          <h1 className="section__head">NEW SEASONS ARRIVALS</h1>
          <p className="section__para">CHECK OUT ALL YOUR TRENDS</p>
          <a href="#latest">
            <button className="btn">Try It Out</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
