import { Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { StorageImage } from '@aws-amplify/ui-react-storage';
import "./App.css";



export default function Home() {

    const carouselItem = [
        {header: "Me", caption: "Welcome to my website!", image: "IMG_E2541.JPG" },
        {header: "Coder", caption: "Coding since 2019. My new Github page made in 2025.", image: "githubhome.png" },
        {header: "Artist", caption: "Artist since childhood. Now on a bigger scale.", image: "IMG_1058.JPG" },
        {header: "3D Modeler", caption: "Taught myself 3D software in 2021.", image: "3dmodel1.png" },
    ]

    return (
        <Container fluid className="pageContent">
            <h1>Marley Omens</h1>
            <p>IT Professional / Certified AWS & Web Developer / Artist</p>
            
            <Carousel pause="hover" prevIcon="" nextIcon="" touch={true}>
                {carouselItem.map((c) => 
                    <Carousel.Item interval={3000}>
                        <StorageImage alt="test" path={`website-folder/${c.image}`} />
                        <Carousel.Caption>
                            <h3>{c.header}</h3>
                            <p>{c.caption}</p>
                        </Carousel.Caption>
                </Carousel.Item>
                )}
                </Carousel>


        </Container>
    );
}