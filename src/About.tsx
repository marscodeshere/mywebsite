import { Accordion, Button, Container, Card, Col, OverlayTrigger, ListGroup, Row, Popover} from "react-bootstrap";
import { getUrl } from 'aws-amplify/storage';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './About.css';


const skills = [
    {skill: "Languages", option1: "Java", option2: "Javascript"},
    {skill: "Softwares", option1: "Microsoft", option2: "Excel", option3: "Cash Management"},
    {skill: "Degrees", option1: "Associates in Arts", option2: "Bachelrors in IT"}
];

const [linkHref, setLinkHref] = useState("");

async function getResume() {
    const linkToResume = await getUrl({
        path: "website-folder/resume2024.pdf",
    });
 
    setLinkHref(linkToResume.url.toString())
}



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
                            
                            <Card.Link onClick={getResume} target="_blank" href={linkHref}>
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
                                {skills.map((s) => 
    
                                    <OverlayTrigger placement="bottom" overlay={
                                        <Popover id="codingPopover">
                                            <Popover.Header as="h3">{s.skill}</Popover.Header>
                                            <Popover.Body>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>{s?.option1}</ListGroup.Item>
                                                    <ListGroup.Item>{s?.option2}</ListGroup.Item>
                                                    <ListGroup.Item>{s?.option3}</ListGroup.Item>
                                                </ListGroup>
                                            </Popover.Body>
                                        </Popover>
                                        }>
                                        <Button variant="outline-primary">{s.skill}</Button>
                                    </OverlayTrigger>

                                )}
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