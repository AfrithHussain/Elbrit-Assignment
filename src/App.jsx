import React from "react";

import BlueContainer from "./Pages/BlueContainer";
import IngredientsCard from "./Pages/IngredientsCard";
import LatestNewsCard from "./Pages/LatestNewsCard";
import Footer from "./Pages/Footer";
import AboutProduct from "./Pages/AboutProduct";
import LogoComponent from "./Pages/LogoComponent";


function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      
        <LogoComponent />
        <BlueContainer />
        <AboutProduct />
        <IngredientsCard />
        <LatestNewsCard />
        <Footer />
    
    </div>
  );
}

export default App;
