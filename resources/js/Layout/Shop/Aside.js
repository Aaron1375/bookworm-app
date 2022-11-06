import { Button, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import axios from "axios";

function Filter() {
    const [authors, setAuthor] = useState([]);
    const [categories, setCategory] = useState([]);
    const stars = ["1", "2", "3", "4", "5"];
    const authorURL = "http://127.0.0.1:8000/api/author";
    const categoryURL = "http://127.0.0.1:8000/api/category";

    useEffect(() => {
        axios
            .get(authorURL)
            .then((response) => {
                const getAuthor = response.data;
                // console.log(getAuthor);
                setAuthor(getAuthor);
            })
            .catch((error) => console.error(`Error: ${error}`));

        axios
            .get(categoryURL)
            .then((response) => {
                const getCategory = response.data;
                // console.log(getCategory);
                setCategory(getCategory);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Card className="mb-2 mt-3">
                    <Card.Header>
                        <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                        >
                            Category
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ul className="text-left">
                                {categories.map((category, index) => {
                                    return (
                                        <li key={index} className="mt-2">
                                            <a href="#/shop" className="text-content">
                                                {category.category_name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <Card className="mb-2">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link"eventKey="0">
                            Author
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ul className="text-left">
                                {authors.map((author, index) => {
                                    return (
                                        <li key={index} className="mt-2">
                                            <a href="#/shop" className="text-content">
                                                {author.author_name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <Card className="mb-2">
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link"eventKey="0">
                            Author
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ul className="text-left">
                                {stars.map((star, index) => {
                                    return (
                                        <li key={index} className="mt-2">
                                            <a href="#/shop" className="text-content">
                                                {star}&nbsp;&nbsp;Star
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    );
}

export default Filter;
