import { useEffect } from "react";
import { BrowswerRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./scenes/home/Home";
import ItemDetails from './scenes/itemDetails/ItemDetails';
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import Navbar from "./scenes/global/Navbar";


const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}


function App() {
  return (
    <div className="app">
      <BrowswerRouter>
      <Navbar/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />}/>
          <Route path="checkout/success" element={<Confirmation />}/>
        </Routes>
      </BrowswerRouter>
    </div>
  );
}

export default App;

