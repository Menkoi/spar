import React from "react";
import SparHeader from "../img/sparheaderMain.webp";
import HeaderText from "./HeaderText";
import Cards from './Cards';
import Testimonials from "./Testimonials";

function Home() {
    return (
      <div>
        <img src={SparHeader} alt="MainHeader" className="MainHeader" />
        <HeaderText></HeaderText>
        <Cards></Cards>
        <Testimonials></Testimonials>
      </div>
    );
}

export default Home;