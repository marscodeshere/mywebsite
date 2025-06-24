import { Col, Container, Button, Image, Row } from "react-bootstrap";
import insta from "./assets/instagram.png";
import fb from "./assets/facebook.png";
import linked from "./assets/linkedin.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

export default function Home() {
    return (
        <Container className="pageContent" fluid>
            <h1>Marley Omens</h1>
            <p>Contact Me</p>
            
            <h3>If you've found me here:</h3>
            
                <p>Feel free reach out to me on any of my social media for business inquiries.</p>
                <p>For job opportunities, you will find my contact information on the resume I provided to you.</p>

            <Row id="socialLinks">
                <Col>
                    <a href="https://www.instagram.com/mars_liveshere/" target="_blank">
                        <Button variant="secondary">
                            <Image src={insta} className="socials" />
                        </Button>
                    </a>
                </Col>
                <Col>
                    <a href="https://www.facebook.com/marleynixomens" target="_blank">
                        <Button variant="secondary">
                            <Image src={fb} className="socials" />
                        </Button>
                    </a>
                </Col>
                <Col>
                    <a href="https://www.linkedin.com/in/marley-omens-0b4736129/" target="_blank">
                        <Button variant="secondary">
                            <Image src={linked} className="socials" />
                        </Button>
                    </a>
                </Col>
            </Row>


            <i>However you arrived here, thank you for visiting my website!</i>

        </Container>
    );
}