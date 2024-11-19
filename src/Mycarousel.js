import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import rider from './assets/rider.jpg';
import ride from './assets/ride.jpg';
import moto from './assets/moto.jpg';



function Mycarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <Image src={rider} width='100%' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={ride} width='100%'/>
        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={moto} width='100%'/>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Mycarousel;