import { Accordion, Button, Container, Card, Col, OverlayTrigger, ListGroup, Row, Popover} from "react-bootstrap";
import { getUrl } from 'aws-amplify/storage';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './About.css';


export default function Home() {

    const skills = [
        {skill: "Languages", option1: "Java", option2: "Javascript", option3: "Python", option4: "React", option5: "SQL", option6: "HTML/CSS/JS"},
        {skill: "Softwares", option1: "Microsoft", option2: "Excel", option3: "Cash Management", option4: "AWS Services", option5: "3D Rendering Programs"},
        {skill: "Degrees", option1: "Associates in Arts", option2: "Bachelors in IT", option3: "Certification in Web Dev", option4: "Multiple AWs Certs"}
    ];

    const experience = [
        {title: "Barista Trainer", company: "Starbucks", timeframe: "Nov 2021-Present", explanation1: "Maintaining the customer experience while balancing the responsibilities of the business.", explanation2: "Encouraged the team to exceed expectations and increase customer engagement."},
        {title: "Full-Time Cashier", company: "Aldi", timeframe: "May 2021-Nov 2021", explanation1: "Optimized efficiency and speed while creating an experience for customers at the checkout lanes.", explanation2: "Achieved top efficiency scores in the district during the first months of employment."},
        {title: "Night Supervisor", company: "Wawa", timeframe: "Oct 2016-May 2021", explanation1: "Oversaw entire store and all divisions as Manager on Duty while sustaining company expectations.", explanation2: "Responsible for checking in vendors, handling the safe and counting registers, training and encouraging employees, and prioritizing customer satisfaction."},
    ]

    const [linkHref, setLinkHref] = useState("");

    async function getResume() {
        const linkToResume = await getUrl({
            path: "website-folder/Marley-Omens-AWS Developer - Web Developer - IT Professional- Online.pdf",
        });
    
        setLinkHref(linkToResume.url.toString())
    }

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
                            <Card.Subtitle className="mb-2 text-muted">Socials are on Contact Page</Card.Subtitle>
                            <Card.Link onClick={getResume} target="_blank" href={linkHref}>
                                <Button>Resume</Button>
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

                        {experience.map((e, index) =>
                            <Accordion.Item eventKey={index.toString()}>
                                <Accordion.Header>
                                    <Col>{e.title}</Col>
                                    <Col className="text-muted">{e.company}</Col>
                                    <Col className="text-muted">{e.timeframe}</Col>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <li>{e.explanation1}</li>
                                    <li>{e.explanation2}</li>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>
                </Col>
            </Row>

    
        </Container>
    );
}