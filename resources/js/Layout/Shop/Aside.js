import { Button, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Filter(props) {
    // console.log(props);
    return (
        <>
        <Accordion defaultActiveKey="0">
            <Card className="mb-2 mt-3">
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
        </Accordion>
         <Accordion defaultActiveKey="0">
            <Card className="mb-2">
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Author
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
         </Accordion>
          <Accordion defaultActiveKey="0">
            <Card className="mb-2">
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Rating
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
          </Accordion>
        </>
    );
}

export default Filter;
