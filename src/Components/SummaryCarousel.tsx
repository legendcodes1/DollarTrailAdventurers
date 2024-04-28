import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Images/ExampleCarouselImage.jpg';

function SummaryCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={ExampleCarouselImage} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>This is your first event</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ExampleCarouselImage} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ExampleCarouselImage} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SummaryCarousel;
