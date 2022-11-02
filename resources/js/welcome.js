import React, { Component } from "react";
import { BrowserRouter, HashRouter, Route, Router, Routes } from "react-router-dom";
import "../css/app.css";
import Header from "./Layout/Header";
import Home from "./Nav/Home";
import Shop from "./Nav/Shop";
import About from "./Nav/About";
import Cart from "./Nav/Cart";
import Login from "./Nav/Login";
import { Container } from "react-bootstrap";
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
                </Routes>
                </Container>
            </HashRouter>
        );
    }
}

export default Welcome;
