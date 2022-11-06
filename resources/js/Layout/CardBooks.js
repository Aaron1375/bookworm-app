import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import IMAGES from "../../assets/bookcover/images";

export default function CardBooks(props) {
    
    return (
        <div className="col-3 justify-content-center mt-2 ml-2">
            <Link className="text-content" to="/detail">
            <Card>
                <Card.Img
                    variant="top"
                    src={IMAGES[props.book.book_cover_photo]}
                    alt="image1"
                    height={"300px"}
                />
                <Card.Body>
                    <Card.Title>{props.book.book_title}</Card.Title>
                    <Card.Text style={{ fontSize: "12px" }}>
                        {props.author_name}
                    </Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <del style={{ fontSize: "12px" }}>{props.book.discount_price ? "$"+props.book.book_price : ""}</del>{" "}
                        <b>{props.book.discount_price ? "$" + props.book.discount_price : "$" + props.book.book_price}</b>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            </Link>
        </div>
    );
}
