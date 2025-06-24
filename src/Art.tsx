import {Container, Card, CardGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo3.png";
import { StorageImage } from '@aws-amplify/ui-react-storage';
import "./Art.css";



export default function Home() {

    return (
        <Container fluid className="pageContent">
            <h1>Marley Omens</h1>
            <p>The Art Studio: Recent Projects</p>

            <Card className="artHeaders">
                <Card.Body><h3>Halloween 2023</h3></Card.Body>
            </Card>
            
            <CardGroup>
                <Card>
                    
                        <StorageImage alt="test" path="website-folder/me.png" />
                    
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

            <Card className="artHeaders">
                <Card.Body><h3>Halloween 2024</h3></Card.Body>
            </Card>
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