// import React, { useState } from 'react';

// const Carousel = ({ image, imagePath, name, marque, imagePath1, imagePath2, imagePath3 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const pics = [
//     imagePath, imagePath1, imagePath2, imagePath3
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % pics.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + pics.length) % pics.length);
//   };

//   return (
//     <>
//       <div className="relative w-full ">
//         <button className='bg-black opacity-55 border border-white shadow-xl shadow-indigo-500 rounded-full w-[7rem] h-[15rem] top-[8rem] left-[2.5rem] absolute z-10 ' onClick={handlePrev} >
//           <h1 className='text-white'>PREVIOUS</h1>
//         </button>
//         <button className='bg-black opacity-55 border border-white shadow-xl shadow-indigo-500  rounded-full w-[7rem] h-[15rem] top-[8rem] right-[2.5rem] absolute z-10 ' onClick={handleNext}>
//           <h1 className='text-white'>NEXT</h1>
//         </button>
//         <div className='absolute  bottom-0 w-full h-[3rem] opacity-45 bg-black z-20 px-8'>
//           <span className=' absolutew-fit text-white   font-extrabold text-4xl z-20'>{marque} - {name}</span>

//         </div>

//         <div className="w-full h-[33rem] relative overflow-hidden rounded-md  border-2 border-black">
//           {pics.map((pic, index) => (
//             <img
//               key={index}
//               src={pic}
//               alt={`Image ${image}`}
//               className={`absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Carousel;