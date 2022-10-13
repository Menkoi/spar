import React from "react";
//import Navbar from "./Navbar";
import SparHeader from "../img/sparheaderMain.png";
import HeaderText from "./HeaderText";
import Cards from './Cards';
import Footer from './Footer';
//import Teams from './Teams';
import Testimonials from "./Testimonials";

function Home() {
    return (
      <div>
        <img src={SparHeader} class="w-100" alt="MainHeader" className="MainHeader" />
        <HeaderText></HeaderText>
        <Cards></Cards>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    );
}

export default Home;