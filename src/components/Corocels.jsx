import Carousel from 'react-bootstrap/Carousel';


function Corocels() {
  return (
    <Carousel style={{margin:"20px"}}>
      <Carousel.Item>
        <img  style={{width:"100%",height:"400px"}} src='https://www.shutterstock.com/image-vector/food-sale-gift-voucher-discount-260nw-2627907973.jpg' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%",height:"400px"}} src='https://www.shutterstock.com/image-vector/food-sale-gift-voucher-discount-260nw-2627907973.jpg' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%",height:"400px"}} src='https://www.shutterstock.com/image-vector/food-sale-gift-voucher-discount-260nw-2627907973.jpg' text="Third slide" />
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

export default Corocels;