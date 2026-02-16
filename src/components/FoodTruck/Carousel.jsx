import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src='https://cdn.grabon.in/gograbon/images/category/1546252575451.png' style={{width:"100%", height:"400px",marginTop:"65px"}} text="First slide" />
        <Carousel.Caption>
          <h3>Lacto Balsto</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://cdn.grabon.in/gograbon/images/category/1546252575451.png' style={{width:"100%", height:"400px",marginTop:"65px"}} text="Second slide" />
        <Carousel.Caption>
          <h3>Sudo Codo</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://cdn.grabon.in/gograbon/images/category/1546252575451.png'  style={{width:"100%", height:"400px",marginTop:"65px"}} text="Third slide" />
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

export default UncontrolledExample;