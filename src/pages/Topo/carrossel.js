import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/img1.png";


export default function Carrossel() {
  return (
<Carousel>
  <Carousel.Item>
    <img
      src={img1}
      alt="First"
    />    
  </Carousel.Item>
  <Carousel.Item>
    <img
      src = ""
      alt = "Second"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>

  );
}

