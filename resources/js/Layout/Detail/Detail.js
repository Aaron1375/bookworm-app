import React, { useState, useEffect} from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Row,
} from "react-bootstrap";
import book1 from "../../../assets/bookcover/book1.jpg";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import IMAGES from "../../../assets/bookcover/images";



export default function Detail() {
    const {id} = useParams();
    // console.log(id)
    const [showDetail, setShowDetail] = useState({});
    const baseURL = `http://127.0.0.1:8000/api/bookdetail/${id}`;
    // console.log(id);
    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => {
                const book = response.data;
                console.log(book);
                setShowDetail(book);
            })
            .catch((error) => console.error(`Error: ${error}`));

    }, []);
    // console.log(id);

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
                                <p>
                                    {showDetail.book_summary}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={4} className="right-col ms-auto">
                    <Card>
                        <Card.Header className="wrapper ">
                            <h5 className="fw-lighter align-self-center">
                                &nbsp;&nbsp;
                                <del>{showDetail.discount_price ? "$"+showDetail.book_price : ""}</del>{" "}
                                &nbsp;&nbsp;
                            </h5>
                            <h1>{showDetail.discount_price ? "$" + showDetail.discount_price : "$" + showDetail.book_price}</h1>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Card.Title>Quantity</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
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
                            <h1>4.6 Star</h1>
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

                            <div>
                                <div className="wrapper bottom-0 mt-4">
                                    <h4>Review Title</h4>
                                    <p>&nbsp;|&nbsp; 5 star</p>
                                </div>
                                <p>
                                    Review Content: centuries, but also the leap
                                    into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing
                                    software like Aldus PageMaker including{" "}
                                </p>
                                <p>month date year</p>
                                <hr />
                            </div>

                            <div>
                                <div className="wrapper bottom-0 mt-4">
                                    <h4>Review Title</h4>
                                    <p>&nbsp;|&nbsp; 5 star</p>
                                </div>
                                <p>
                                    Review Content: centuries, but also the leap
                                    into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing
                                    software like Aldus PageMaker including{" "}
                                </p>
                                <p>month date year</p>
                                <hr />
                            </div>
                            <div>
                                <div className="wrapper bottom-0 mt-4">
                                    <h4>Review Title</h4>
                                    <p>&nbsp;|&nbsp; 5 star</p>
                                </div>
                                <p>
                                    Review Content: centuries, but also the leap
                                    into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing
                                    software like Aldus PageMaker including{" "}
                                </p>
                                <p>month date year</p>
                                <hr />
                            </div>
                            <div>
                                <div className="wrapper bottom-0 mt-4">
                                    <h4>Review Title</h4>
                                    <p>&nbsp;|&nbsp; 5 star</p>
                                </div>
                                <p>
                                    Review Content: centuries, but also the leap
                                    into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing
                                    software like Aldus PageMaker including{" "}
                                </p>
                                <p>month date year</p>
                                <hr />
                            </div>
                            <div>
                                <div className="wrapper bottom-0 mt-4">
                                    <h4>Review Title</h4>
                                    <p>&nbsp;|&nbsp; 5 star</p>
                                </div>
                                <p>
                                    Review Content: centuries, but also the leap
                                    into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing
                                    software like Aldus PageMaker including{" "}
                                </p>
                                <p>month date year</p>
                                <hr />
                            </div>
                        </Col>
                    </Row>

                    {/* REVIEW */}
                </Col>
            </Row>
        </Container>
    );
}
