import React from 'react';
// import OwlCarousel from 'react-owl-carousel';


const CarouselComponent = () => {
  const options = {
    items: 1,
    loop: true,
    nav: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
  };

  return (
    <div>
      <h2>Owl Carousel Example</h2>
      {/* <OwlCarousel className='owl-theme' loop margin={10} nav> */}
    <div class='item'>
        <h4>1</h4>
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
    <div class='item'>
        <h4>4</h4>
    </div>
    <div class='item'>
        <h4>5</h4>
    </div>
    <div class='item'>
        <h4>6</h4>
    </div>
    <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div>
{/* </OwlCarousel>; */}
    </div>
  );
};

export default CarouselComponent;
