import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import Navbar from "../components/navbar/navbar";
import Intro from "../components/intro/intro";
import Portfolio from "../components/portfolio/portfolio"
import Parallax from "../components/parallax/parallax"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <div className="m12">
      <Intro />
      <Portfolio />
      <Parallax />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
