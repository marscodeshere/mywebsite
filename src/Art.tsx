import {Container, Card, CardGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { StorageImage } from '@aws-amplify/ui-react-storage';
import "./Art.css";

const art = [
    {header: "Painting Projects", photo1: "3dprint1.JPG", photo2: "3dprint1.JPG", photo3: "3dprint1.JPG", title1: "photo1", title2: "photo2", title3: "photo3"},
    {header: "Cosplay 2024", photo1: "3dprint2.JPG", photo2: "3dprint2.JPG", photo3: "3dprint2.JPG", title1: "photo1", title2: "photo2", title3: "photo3"},
    {header: "Halloween 2024", photo1: "3dprint1.JPG", photo2: "3dprint1.JPG", photo3: "3dprint1.JPG", title1: "photo1", title2: "photo2", title3: "photo3"},
    {header: "Cosplay 2023", photo1: "3dprint1.JPG", photo2: "3dprint1.JPG", photo3: "3dprint1.JPG", title1: "photo1", title2: "photo2", title3: "photo3"},
    {header: "Halloween 2023", photo1: "3dprint1.JPG", photo2: "3dprint1.JPG", photo3: "3dprint1.JPG", title1: "photo1", title2: "photo2", title3: "photo3"},
]

export default function Home() {

    return (
        <Container fluid className="pageContent">
            <h1>Marley Omens</h1>
            <p>The Art Studio: Recent Projects</p>

            {art.map((a) => 
            <div>
                <Card className="artHeaders">
                    <Card.Body><h3>{a.header}</h3></Card.Body>
                </Card>

                <CardGroup>
                    <Card>
                        <StorageImage alt="test" path={`website-art/${a.photo1}`} />
                        <Card.ImgOverlay>
                            <Card.Title>{a.title1}</Card.Title>
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
                        <StorageImage alt="test" path={`website-art/${a.photo2}`} />
                        <Card.ImgOverlay>
                            <Card.Title>{a.title2}</Card.Title>
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
                        <StorageImage alt="test" path={`website-art/${a.photo3}`} />
                        <Card.ImgOverlay>
                            <Card.Title>{a.title3}</Card.Title>
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
            </div>
            
            )}

        </Container>
    );
}