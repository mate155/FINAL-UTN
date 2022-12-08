import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselProductos.css';
 function CarouselProductos() {
  return (
    <>
      <div>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 fernet"
          src="https://beermarket.com.ar/wp-content/uploads/2020/11/Branca-1L.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fernet Branca 750ML</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 gin"
          src="https://cheersapp.com.ar/images/hero-images/BombaySapphireConSampling-02.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Gin Bombay Sapphire</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vodka"
          src="https://cheersapp.com.ar/images/hero-images/GreyGooseSampling-02.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Greey Goose Vodka</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}
export default CarouselProductos;
