import { Accordion, Button, Container, Card, Col, OverlayTrigger, ListGroup, Row, Popover} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './About.css';


const languages = ["JavaScript", "Java", "Python"];

const CodingItem =  (
    <OverlayTrigger placement="bottom" overlay={
        <Popover id="codingPopover">
            <Popover.Header as="h3">Languages</Popover.Header>
            <Popover.Body>
                <ListGroup variant="flush">
                    {languages.map((l) => <ListGroup.Item>{l}</ListGroup.Item>)}
                </ListGroup>
            </Popover.Body>
        </Popover>
        }>
      <Button variant="outline-primary">Coding</Button>
    </OverlayTrigger>
  );

export default function Home() {
    return (
        <Container className="pageContent" fluid>
            <h1>Marley Omens</h1>
            <p>My Background</p>
            <Row>
                <Col>
                    <Card id="summary">
                        <Card.Body>
                            <Card.Title>A Little About Me</Card.Title>
                            <Card.Text>
                            This will be where I will put my resume summary section.
                            </Card.Text>
                            
                            <Card.Link href="#">
                                <Button>Resume</Button>
                            </Card.Link>
                            <Card.Link href="#">
                                <Button>Socials</Button>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Skills & Certifications</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Hover to See More</Card.Subtitle>
                                {CodingItem}

                                {CodingItem}

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <h2>Experience</h2>
                <Col>
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <Col>Barista Trainer</Col>
                                <Col className="text-muted">Starbucks</Col>
                                <Col className="text-muted">2021-Present</Col>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <Col>Student: IT Major</Col>
                                <Col className="text-muted">Arizona State University</Col>
                                <Col className="text-muted">2022-2025</Col>
                            </Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>

    
        </Container>
    );
}