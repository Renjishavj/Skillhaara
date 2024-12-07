import React from "react";
import TopTechnologies from "./TopTechnologies";
import Baner from "./Baner";
import Trending from "./Trending";
import Why from "./Why";
import SubBanner from "./SubBanner";
import "../assets/styles/style.css"
function Technologies() {
  return (
    <>
      <div className="tech-main">
        <Baner />
        <SubBanner />
        <TopTechnologies />
        <Trending />

        <Why />
      </div>
    </>
  );
}

export default Technologies;
