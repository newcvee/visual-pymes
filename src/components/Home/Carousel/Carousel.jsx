import React from 'react'


const Carousel = (props) => {
  const { name, image, price } = props;
    return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt= {name}
        />
        <Carousel.Caption>
          <h3>{name}</h3>
          <p>{price}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default Carousel