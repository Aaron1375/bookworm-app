import React, { useState, useEffect } from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import IMAGES from "../../../assets/bookcover/images";

export default function Detail() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
        if (count == 0) {
            setCount(0);
        }
    };
    const { id } = useParams();
    // console.log(id)
    const [showDetail, setShowDetail] = useState({});
    const [showReview, setShowReview] = useState([]);
    const baseURL = `http://127.0.0.1:8000/api/bookdetail/${id}`;
    const reviewUrl = `http://127.0.0.1:8000/api/bookdetail/review/${id}?`;
    // console.log(id);
    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => {
                const book = response.data;
                setShowDetail(book);
            })
            .catch((error) => console.error(`Error: ${error}`));

        axios  
            .get(reviewUrl)
            .then((res) => {
                const review = res.data;
                console.log(review)
                setShowReview(review)
            })
            .catch((error) => console.error(`Error: ${error}`));
    
    }, []);

    const round = (x) => {
        return Number.parseFloat(x).toFixed(2);
    };

    return (
        <Container className="mt-5">
            <div>
                <h2>{showDetail.category_name}</h2>
            </div>
            <hr />
            {/* Product Detail */}
            <Row>
                <Col xs={8} className="border book-detail p-0">
                    <Row>
                        <Col xs={3}>
                            <Card.Img
                                variant="top"
                                src={IMAGES[showDetail.book_cover_photo]}
                                alt=""
                                height={"250px"}
                            />
                            <p className="font-weight-light text-aligh-right mt-3">
                                By (author) <b>{showDetail.author_name}</b>
                            </p>
                        </Col>
                        <Col xs={8} className="justify-content-right">
                            <div className="m-2 p-2">
                                <h4>{showDetail.book_title}</h4>
                                <p>Book description</p>
                                <p>{showDetail.book_summary}</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={4} className="right-col ms-auto">
                    <Card>
                        <Card.Header className="wrapper ">
                            <h5 className="fw-lighter align-self-center">
                                &nbsp;&nbsp;
                                <del>
                                    {showDetail.discount_price
                                        ? "$" + showDetail.book_price
                                        : ""}
                                </del>{" "}
                                &nbsp;&nbsp;
                            </h5>
                            <h1>
                                {showDetail.discount_price
                                    ? "$" + showDetail.discount_price
                                    : "$" + showDetail.book_price}
                            </h1>
                        </Card.Header>
                        <Card.Body className="col">
                            <Card.Title>Quantity</Card.Title>
                            <Row className="p-0 m-auto bg-secondary">
                                <Button
                                    onClick={decrement}
                                    className="col-5 justify-content-end"
                                    variant="secondary"
                                >
                                    -
                                </Button>
                                <p className="col text-white mt-2 fs-5">
                                    {count}
                                </p>
                                <Button
                                    onClick={increment}
                                    className="col-5 pl-1"
                                    variant="secondary"
                                >
                                    +
                                </Button>

                                <div className="mt-3 m-auto">
                                    <Row>
                                        <Button variant="secondary">
                                            Add to cart
                                        </Button>
                                    </Row>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* REVIEW */}
            <Row>
                <Col xs={8} className="border mt-5 p-0">
                    {/* Product Detail */}
                    <Row>
                        <Col xs={11} className="m-4">
                            <div className="wrapper bottom-0">
                                <h4 className="detail-body">
                                    Customer Reviews
                                </h4>{" "}
                                &nbsp;&nbsp;
                                <p className="fw-lighter">(Filter by 5 star)</p>
                            </div>
                            {/* AVG */}
                            <h1>{round(showDetail.rating_start)} Star</h1>
                            <div className="review-star">
                                <Link>(3.132)</Link> &nbsp;&nbsp;
                                <Link>5 star (200)</Link> |&nbsp;
                                <Link>4 star (100)</Link> |&nbsp;
                                <Link>3 star (20)</Link> |&nbsp;
                                <Link>2 star (5)</Link> |&nbsp;
                                <Link>1 star (0)</Link>
                            </div>
                            {/* DROP DOWN */}
                            <div className="wrapper mt-3 ">
                                <p>Showing 1-12 of 3134 reviews</p>
                                <div className="wrapper row ml-5 ms-auto">
                                    <DropdownButton
                                        className="col"
                                        id="dropdown-basic-button"
                                        title="Dropdown button"
                                    >
                                        <Dropdown.Item href="#/action-1">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            Something else
                                        </Dropdown.Item>
                                    </DropdownButton>
                                    <DropdownButton
                                        className="col"
                                        id="dropdown-basic-button"
                                        title="Dropdown button"
                                    >
                                        <Dropdown.Item href="#/action-1">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            Something else
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </div>
                            {/* REVIEW */}

                            {showReview.map((review, index) => {
                                return(
                                    <div key={index}>
                                        <div className="wrapper bottom-0 mt-4">
                                            <h4>{review.review_title}</h4>
                                            <p>&nbsp;|&nbsp; {review.rating_start} star</p>
                                        </div>
                                        <p>
                                            {review.review_details}
                                        </p>
                                        <p>{review.review_date}</p>
                                        <hr />
                                    </div>
                                )
                            })}

                           
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
}
