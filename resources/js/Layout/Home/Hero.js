import axios from "axios";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Card, ListGroup } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import IMAGES from "../../../assets/bookcover/images";
import {Link} from 'react-router-dom';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function Hero() {
    const [discount, setDiscount] = React.useState([]);
    const baseURL = `http://127.0.0.1:8000/api/home/discount`;

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => {
                const topDiscount = response.data.data;
                // console.log(topDiscount);
                setDiscount(topDiscount);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }, []);

    // const checkNullDiscount = () => {
    //     if (discount != null) {
    return (
        <Carousel responsive={responsive}>
            {discount.map((book, index) => {
                return (
                    <div className="cards-wrapper" key={index}>
                            <Link className="text-content" to={`/detail/${book.id}`}>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img
                                    variant="top"
                                    src={IMAGES[book.book_cover_photo]}
                                    alt=""
                                    height={"300px"}
                                />
                                <Card.Body>
                                    <Card.Title>{book.book_title}</Card.Title>
                                    <Card.Text style={{ fontSize: "12px" }}>
                                        {book.author_name}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <del style={{ fontSize: "12px" }}>
                                            {book.book_price}
                                        </del>{" "}
                                        <b>{book.discount_price}</b>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                            </Link>
                            {/* <CardBooks book={book} key={index} /> */}
                    </div>
                );
            })}
        </Carousel>
    );
}

export default Hero;
