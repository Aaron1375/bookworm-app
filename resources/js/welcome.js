import React, { Component } from "react";
import { HashRouter, Route, Router, Routes } from "react-router-dom";
import "../css/app.css";
import Header from "./Layout/Header";
import Home from "./Nav/Home";
import Shop from "./Nav/Shop";
import About from "./Nav/About";
import Cart from "./Nav/Cart";
import { Container } from "react-bootstrap";
import Footer from "./Layout/Footer";
import Detail from './Layout/Detail/Detail';

class Welcome extends Component {
    render() {
        return (
            <HashRouter>
                <Header />
                <Container>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="shop" element={<Shop />} />
                    <Route path="about" element={<About />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route exact path="shop/category/:categoryId" element={<Shop />} />
                    <Route exact path="shop/author/:authorId" element={<Shop />} />
                    <Route exact path="shop/star/:star" element={<Shop />} />
                    
                </Routes>
                </Container>
                <Footer/>
            </HashRouter>
        );
    }
}

export default Welcome;
