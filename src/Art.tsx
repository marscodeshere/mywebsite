import {Container, Card, CardGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { StorageImage } from '@aws-amplify/ui-react-storage';
import "./Art.css";


export default function Home() {

    
    const art = [
        {header: "Painting Projects", photo1: "IMG_1955.JPG", photo2: "IMG_2507.JPG", photo3: "shirtsBleach5.JPG", title1: "Arcane Painted Cup", title2: "Neva Painted Controller", title3: "Chainsawman Bleached Shirt", year: "2025"},
        {header: "Cosplay 2024", photo1: "IMG_2194.JPG", photo2: "IMG_1965.JPG", photo3: "IMG_1971.JPG", title1: "Holiday Matsuri 2024", title2: "Zagreus Bow", title3: "Zagreus Cosplay Redo", year: "2024"},
        {header: "Halloween 2024", photo1: "MPZX3956.JPG", photo2: "IMG_1805[1].JPG", photo3: "IMG_1781[1].JPG", title1: "Disney Portraits", title2: "Nightmare Before Christmas", title3: "Storm from X-Men", year: "2024"},
        {header: "Cosplay 2023", photo1: "IMG_1177.JPG", photo2: "IMG_1141.JPG", photo3: "IMG_1148.JPG", title1: "Holiday Matsuri 2023", title2: "Old vs New", title3: "Printed Cerberus Skull", year: "2023"},
        {header: "Halloween 2023", photo1: "IMG_1060.JPG", photo2: "IMG_1058.JPG", photo3: "IMG_1002.JPG", title1: "Giant Gengar", title2: "The Crew", title3: "Guess that Pokemon", year: "2023"},
        {header: "Cosplay 2022", photo1: "IMG_0669.JPG", photo2: "IMG_1152.JPG", photo3: "3dmodel4.png", title1: "Holiday Matsuri 2022", title2: "Emblem for 2023", title3: "Crown for 2023", year: "2022"},
        {header: "Halloween 2022", photo1: "IMG_1103.JPG", photo2: "IMG_0493.JPG", photo3: "MWGL8486.JPG", title1: "Demogorgon", title2: "Vecna", title3: "Demogorgon Final", year: "2022"},
        {header: "3D Models", photo1: "3dmodel1.png", photo2: "3dmodel2.png", photo3: "3dmodel3.png", title1: "Cerberus Skull Model", title2: "Shield Model", title3: "Skull Belt Model", year: "2024"},
    ];

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
                        <StorageImage alt="test" path={`website-folder/${a.photo1}`} />
                        <Card.ImgOverlay>
                            <Card.Title>{a.title1}</Card.Title>
                            <Card.Footer>
                            <small className="text-muted">{a.year}</small>
                            </Card.Footer>
                        </Card.ImgOverlay>
                    </Card>
                    <Card>
                        <StorageImage alt="test" path={`website-folder/${a.photo2}`} />
                        <Card.ImgOverlay>
                            <Card.Title>{a.title2}</Card.Title>
                            <Card.Footer>
                            <small className="text-muted">{a.year}</small>
                            </Card.Footer>
                        </Card.ImgOverlay>
                    </Card>
                    <Card>
                        <StorageImage alt="test" path={`website-folder/${a.photo3}`} />
                        <Card.ImgOverlay>
                            <Card.Title>{a.title3}</Card.Title>
                            <Card.Footer>
                            <small className="text-muted">{a.year}</small>
                            </Card.Footer>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </div>
            
            )}

        </Container>
    );
}