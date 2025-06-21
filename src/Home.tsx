import { Container, Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo3.png";
import "./App.css";



export default function Home() {



    return (
        <Container fluid className="pageContent">
            <h1>Marley Omens</h1>
            <p>IT Professional / Certified AWS & Web Developer / Artist</p>
            
            <Carousel pause="hover" prevIcon="" nextIcon="" touch={true}>
                <Carousel.Item interval={3000}>
                    <Image src={logo} className="carouselImage" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <Image src={logo} className="carouselImage"/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <Image src={logo} className="carouselImage"/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>


        </Container>
    );
}