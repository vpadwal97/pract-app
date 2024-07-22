// import React, { useState } from 'react';
// import OwlCarousel from 'react-owl-carousel';

// const images = [
//   {
//     src: 'https://via.placeholder.com/600x400?text=Image1',
//     thumbnail: 'https://via.placeholder.com/100x100?text=Thumb1'
//   },
//   {
//     src: 'https://via.placeholder.com/600x400?text=Image2',
//     thumbnail: 'https://via.placeholder.com/100x100?text=Thumb2'
//   },
//   {
//     src: 'https://via.placeholder.com/600x400?text=Image3',
//     thumbnail: 'https://via.placeholder.com/100x100?text=Thumb3'
//   }
// ];

// const CustomOwlCarousel = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <div>
//       <h2>Owl Carousel with Hover Thumbnails</h2>
//       <OwlCarousel items={1} className="owl-theme" loop margin={10} nav >
//         {images.map((image, index) => (
//           <div className="item" key={index}>
//             <img src={hoveredIndex === index ? image.thumbnail : image.src} alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </OwlCarousel>
//       <div className="thumbnails">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image.thumbnail}
//             alt={`Thumbnail ${index + 1}`}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//             className={hoveredIndex === index ? 'hovered' : ''}
//             style={{ margin: '5px', cursor: 'pointer' }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomOwlCarousel;
