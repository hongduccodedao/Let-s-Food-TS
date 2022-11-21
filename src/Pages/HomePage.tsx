import React from "react";
import Activity from "../components/Activity/Activity";
import Banner from "../components/Banner/Banner";
import Comment from "../components/Comment/Comment";
import Footer from "../components/Footer/Footer";
import Header from "../components/Heder/Header";
import Menu from "../components/Menu/Menu";
import Nav from "../components/Nav/Nav";

const HomePage = () => {
   return (
      <div className="">
         <Nav />
         <Header />
         <Activity />
         <Menu />
         <Comment />
         <Banner />
         <Footer />
      </div>
   );
};

export default HomePage;
