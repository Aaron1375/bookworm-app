import { Button, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Filter() {
    return (
        <Accordion defaultActiveKey="0">
            <Card className="mb-5">
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Category
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ul>
                            <li><a href="#/category1">Category 1</a></li>
                            <li><a>Category 2</a></li>
                            <li><a>Category 2</a></li>
                        </ul>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="mb-5">
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Author
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="mb-5">
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Rating
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Filter;
