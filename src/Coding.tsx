import { Container, Card, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { StorageImage } from '@aws-amplify/ui-react-storage';
import "./Coding.css";

export default function Home() {

    const coding = [
        {header: "My GitHub Page", name: "My Username: marscodeshere", link: "https://github.com/marscodeshere", year: "2025", image: "githubhome.png"},
        {header: "My Website Repository", name: "My Website", link: "https://github.com/marscodeshere/mywebsite", year: "2025", image: "mywebsite.png"},
        {header: "Bachelor's Proof of Concept", name: "Titan Equity Group", link: "https://github.com/marscodeshere/titan-equity-group-app", year: "2025", image: "titanequitygroupapp.png"},
    ]
    return (
        <Container fluid className="pageContent">
            <h1>Marley Omens</h1>
            <p>Coding: Recent Projects</p>

            {coding.map((c) => 
            <div>
                <Card className="artHeaders">
                    <Card.Body><h3>{c.header}</h3></Card.Body>
                </Card>

                <CardGroup>
                    <Card>
                        <StorageImage alt="test" path={`website-folder/${c.image}`} />
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title>{c.name}</Card.Title>
                            <Card.Link href={c.link} target="_blank">Visit my page &rarr;</Card.Link>
                        </Card.Header>
                        <Card.Body></Card.Body>
                        <Card.Footer>
                            <Card.Title>Last Modified: {c.year}</Card.Title>
                            <Card.Text>&#x21D2; Editors: 1</Card.Text>
                        </Card.Footer>
 
                    </Card>
                </CardGroup>
            </div>
            
            )}
        </Container>
    );
}