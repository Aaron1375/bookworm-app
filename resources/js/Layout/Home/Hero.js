import { Card, Carousel, ListGroup } from "react-bootstrap";
function Hero() {
    return (
        <div className="container bg-dark">
            <Carousel variant="dark">
            <Carousel.Item>
                    <div className="cards-wrapper">
                    <Card style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src={"../images/book1.jpg"}
                                alt="image1"
                                height={"300px"}
                            />
                            <Card.Body>
                                <Card.Title>Book Title</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }}>
                                    Author Name
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <del style={{ fontSize: "12px" }}>Or price</del>{" "}
                                    <b>$price</b>
                                </ListGroup.Item>
                            </ListGroup>
                    </Card>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src={"../images/book1.jpg"}
                                alt="image1"
                                height={"300px"}
                            />
                            <Card.Body>
                                <Card.Title>Book Title</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }}>
                                    Author Name
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <del style={{ fontSize: "12px" }}>Or price</del>{" "}
                                    <b>$price</b>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src={"../images/book1.jpg"}
                                alt="image1"
                                height={"300px"}
                            />
                            <Card.Body>
                                <Card.Title>Book Title</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }}>
                                    Author Name
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <del style={{ fontSize: "12px" }}>Or price</del>{" "}
                                    <b>$price</b>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src={"../images/book1.jpg"}
                                alt="image1"
                                height={"300px"}
                            />
                            <Card.Body>
                                <Card.Title>Book Title</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }}>
                                    Author Name
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <del style={{ fontSize: "12px" }}>Or price</del>{" "}
                                    <b>$price</b>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="cards-wrapper">
                    <Card style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src={"../images/book1.jpg"}
                                alt="image2"
                                height={"300px"}
                            />
                            <Card.Body>
                                <Card.Title>Book Title</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }}>
                                    Author Name
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <del style={{ fontSize: "12px" }}>Or price</del>{" "}
                                    <b>$price</b>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src={"../images/book2.jpg"}
                                alt="image2"
                                height={"300px"}
                            />
                            <Card.Body>
                                <Card.Title>Book Title</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }}>
                                    Author Name
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <del style={{ fontSize: "12px" }}>Or price</del>{" "}
                                    <b>$price</b>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src={"../images/book2.jpg"}
                                alt="image1"
                                height={"300px"}
                            />
                            <Card.Body>
                                <Card.Title>Book Title</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }}>
                                    Author Name
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <del style={{ fontSize: "12px" }}>Or price</del>{" "}
                                    <b>$price</b>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src={"../images/book1.jpg"}
                                alt="image1"
                                height={"300px"}
                            />
                            <Card.Body>
                                <Card.Title>Book Title</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }}>
                                    Author Name
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <del style={{ fontSize: "12px" }}>Or price</del>{" "}
                                    <b>$price</b>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Hero;
