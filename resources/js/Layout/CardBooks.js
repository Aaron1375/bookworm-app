import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import IMAGES from "../../assets/bookcover/images";

export default function CardBooks(props) {

    const {book} = props
// CARD BOOK
    return (
        <div className="col-3 justify-content-center mt-2 ml-2">
            <Link className="text-content" to={`/detail/${book.id}`}>
            <Card>
                <Card.Img
                    variant="top"
                    src={IMAGES[book.book_cover_photo]}
                    alt="image1"
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
                        <del style={{ fontSize: "12px" }}>{book.discount_price ? "$"+props.book.book_price : ""}</del>{" "}
                        <b>{book.discount_price ? "$" + book.discount_price : "$" + props.book.book_price}</b>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            </Link>
        </div>
    );
}
