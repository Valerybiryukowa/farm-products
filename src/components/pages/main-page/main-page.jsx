import React from "react";
import About from "/src/components/blocks/about/about";
import AdvantagesFarmProduct from "/src/components/blocks/advantages-farmproduct/advantages-farmproduct";

function MainPage({ advantagesList }) {
  return (
    <>
      <About />
      <AdvantagesFarmProduct advantagesList={advantagesList} />
    </>
  );
}

export default MainPage;
