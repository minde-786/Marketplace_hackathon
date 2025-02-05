
// import React from 'react';
// import { Car } from "../../type/product"

// import Image from 'next/image';
// import Link from 'next/link';
// interface CarCardProps {
//   car: Car;
// }

// const CarCard : React.FC<CarCardProps> = ({ car }) => {
//   return (
//     <div className="  border rounded-lg shadow-md hover:shadow-lg transition p-4 bg-white">

//        {/* Car Info */}
//        <h2 className="text-lg font-semibold text-gray-800 mb-1 flex justify-between">{car.name} <p> <Image src='/heart.png' alt='Like' width={24} height={24} /></p></h2>
//       <p className="text-sm text-gray-500 mb-2">{car.type}</p>

//       {/* Image */}
//       <div className="flex justify-center mb-4">
//         <img
//           src={car.image}
//           alt={car.name}
//           className="object-contain h-32"
//         />
//       </div>

     
//       <div className="flex items-center space-x-4 text-gray-600 mb-4 text-sm">
//         <div className="flex items-center space-x-1">
//           <span>⛽</span>
//           <span>{car.fuel}L</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <span>⚙️</span>
//           <span>{car.transmission}</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <span>👥</span>
//           <span>{car.capacity} People</span>
//         </div>
//       </div>

//       {/* Price and Button */}
//       <div className="flex justify-between items-center">
//         <div className="text-lg font-bold text-blue-600">
//           ${car.price} <span className="text-gray-400 text-sm">/ day</span>
//         </div>
//        <Link href='/Rentalinfo'> <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//           Rent Now
//         </button></Link>
//       </div>
//     </div>
//   );
// };

// export default CarCard;