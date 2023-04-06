import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Products from "./Components/Products";

export default function App() {
  const [isMenuShown, setisMenuShown] = useState(false);
  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setisMenuShown={setisMenuShown} />
      <Hero />
      <Products/>

    </div>)

}