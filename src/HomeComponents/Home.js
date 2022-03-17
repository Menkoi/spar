import React from "react";
import Navbar from "./Navbar";
import SparHeader from "../img/sparheaderMain.png";
import HeaderText from "./HeaderText";
import Cards from './Cards';
import Footer from './Footer';
import Teams from './Teams';
import Testimonials from "./Testimonials";

function Home() {
    return (
      <div>
        <Navbar></Navbar>
        <img src={SparHeader} class="w-100" alt="MainHeader" className="MainHeader" />
        <HeaderText></HeaderText>
        <Cards></Cards>
        <Testimonials></Testimonials>
        <Teams></Teams>
        <Footer></Footer>
      </div>
    );
}

export default Home;