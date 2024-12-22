import React from "react";

import BlueContainer from "./Pages/BlueContainer";
import IngredientsCard from "./Pages/IngredientsCard";
import LatestNewsCard from "./Pages/LatestNewsCard";
import Footer from "./Pages/Footer";
import AboutProduct from "./Pages/AboutProduct";
import LogoComponent from "./Pages/LogoComponent";
import ScrollReveal from "./Pages/ScrollReveal";

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <ScrollReveal>
        <LogoComponent />
        <BlueContainer />
        <AboutProduct />
        <IngredientsCard />
        <LatestNewsCard />
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;
