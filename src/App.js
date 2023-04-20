import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import DevApi from "./Components/DevApi";
import Customer from "./Components/Customer";

export default function App() {
  const [isMenuShown, setisMenuShown] = useState(false);
  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setisMenuShown={setisMenuShown} />
      <Hero />
      <Products/>
      <DevApi/>
      <Customer/>

    </div>)

}