import React from "react";
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
import { Link } from "react-router-dom";

export default function Detail() {
    return (
        <Container className="mt-5">
            <div>
                <h2>Category Name</h2>
            </div>
            <hr />
            {/* Product Detail */}
            <Row>
                <Col xs={8} className="border book-detail p-0">
                    <Row>
                        <Col xs={3}>
                            <Card.Img
                                variant="top"
                                src={book1}
                                alt=""
                                height={"250px"}
                            />
                            <p className="font-weight-light text-aligh-right mt-3">
                                By (author) <b>Anna Banks</b>
                            </p>
                        </Col>
                        <Col xs={8} className="justify-content-right">
                            <div className="m-2 p-2">
                                <h4>Book Title</h4>
                                <p>Book description</p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
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
                              <del>$82.99</del>
                              &nbsp;&nbsp;
                            </h5>
                            <h1> $29.99</h1>
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
