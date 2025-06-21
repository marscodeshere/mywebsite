import {Container, Card, CardGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo3.png";
import "./Art.css";

export default function Home() {
    return (
        <Container fluid className="pageContent">
            <CardGroup>
                <Card>
                    <Card.Img src={logo} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card.ImgOverlay>
                </Card>
                <Card>
                    <Card.Img src={logo} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card.ImgOverlay>
                </Card>
                <Card>
                    <Card.Img src={logo} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card.ImgOverlay>
                </Card>
            </CardGroup>
        </Container>
    );
}