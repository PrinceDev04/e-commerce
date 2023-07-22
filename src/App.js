import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import ProductInfo from "./pages/ProductInfo";
import { useState, useEffect } from "react";

function App() {

  const [cart, setCart] = useState([])

  function addToCart(item) {
    setCart([...cart, {...item, quantity: 1}])
  }


  function numberOfItem () {
    let counter = 0
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

 

  function changeQuantity(item, quantity) {
    setCart(cart.map(goods => {
      if(goods.id === item.id) {
        return{
          ...goods, quantity: +quantity
        }
      }

      else {
        return goods
      }
    
    }))
 
  }

  function removeItem (goods) {
    setCart(cart.filter(item => item.id !== goods.id))
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

 
  return (
    <div className="App">
      <Router>
      <Nav numberOfItem={numberOfItem()} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />}></Route>
          <Route path="/product/:id" element={<ProductInfo addToCart={addToCart} />}></Route>
        </Routes>
      </Router>
    </div>
  );
} 

export default App;
