// import React, { useState, useEffect } from "react";

// interface PageData {
//   title: string;
//   content: string;
//   imageUrl: string;
// }

// interface FlipCarouselProps {
//   pages: PageData[];
// }

// const NavigationDots = ({ totalPages, currentIndex, onNavigate }: { totalPages: number; currentIndex: number; onNavigate: (index: number) => void }) => (
//   <div className="absolute bottom-4 flex justify-center w-full space-x-2">
//     {Array.from({ length: totalPages }).map((_, index) => (
//       <button
//         key={index}
//         className={`w-3 h-3 rounded-full ${
//           index === currentIndex ? "bg-blue-500" : "bg-gray-300"
//         }`}
//         onClick={() => onNavigate(index)}
//       />
//     ))}
//   </div>
// );

// const FlipCarousel: React.FC<FlipCarouselProps> = ({ pages }) => {
//   const [index, setIndex] = useState(0); // Current page index
//   const [isAnimating, setIsAnimating] = useState(false); // To handle animation state

//   // Next page function
//   const nextPage = () => {
//     if (index < pages.length - 1 && !isAnimating) {
//       setIsAnimating(true);
//       setIndex(index + 1);
//     }
//   };

//   // Previous page function
//   const prevPage = () => {
//     if (index > 0 && !isAnimating) {
//       setIsAnimating(true);
//       setIndex(index - 1);
//     }
//   };

//   // Direct navigation via dots
//   const navigateTo = (targetIndex: number) => {
//     if (!isAnimating && targetIndex !== index) {
//       setIsAnimating(true);
//       setIndex(targetIndex);
//     }
//   };

//   // Reset animation state after animation is complete
//   useEffect(() => {
//     if (isAnimating) {
//       setTimeout(() => setIsAnimating(false), 800); // Animation duration
//     }
//   }, [index, isAnimating]);

//   return (
//     <div className="carousel-container relative">
//       <div
//         className="flip-container"
//         style={{
//           transform: `rotateY(${isAnimating ? 180 : 0}deg)`,
//           transition: "transform 0.8s ease-in-out", // Smooth book-like transition
//           position: "relative",
//           perspective: "1000px", // Add perspective for 3D effect
//         }}
//       >
//         <div
//           className="carousel-page"
//           style={{
//             transform: `rotateY(${isAnimating ? 180 : 0}deg)`,
//             transition: "transform 0.8s ease-in-out", // Smooth page flip
//             backfaceVisibility: "hidden", // Hide backface during the flip
//           }}
//         >
//           <div className="carousel-image-container w-1/2 p-4">
//             <img
//               src={pages[index].imageUrl}
//               alt={pages[index].title}
//               className="carousel-image w-full h-auto object-cover rounded-lg"
//             />
//           </div>
//           <div className="carousel-text-container w-1/2 p-4">
//             <h2 className="carousel-title text-3xl font-semibold mb-4">{pages[index].title}</h2>
//             <p className="carousel-content text-lg text-gray-700">{pages[index].content}</p>
//           </div>
//         </div>
//       </div>

//       {/* Left Button */}
//       <button
//         className="carousel-button left absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
//         onClick={prevPage}
//         disabled={index === 0 || isAnimating}
//       >
//         &lt;
//       </button>

//       {/* Right Button */}
//       <button
//         className="carousel-button right absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
//         onClick={nextPage}
//         disabled={index === pages.length - 1 || isAnimating}
//       >
//         &gt;
//       </button>

//       {/* Navigation Dots */}
//       <NavigationDots
//         totalPages={pages.length}
//         currentIndex={index}
//         onNavigate={navigateTo}
//       />
//     </div>
//   );
// };

// export default FlipCarousel;
