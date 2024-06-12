import React from "react";
import { products } from "../min";
import "./Style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Card() {
  return (
    <div>
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000} className="testing" >
        {products.map((product) => (
          <div key={product.id} className="sm">
            <h3 className="text-xl ">{product.first_name}</h3>
            <p className="">{product.last_name}</p>
            <p className="">{product.email}</p>
            <p className="">{product.gender}</p>
            <p className="">{product.ip_address}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Card;
