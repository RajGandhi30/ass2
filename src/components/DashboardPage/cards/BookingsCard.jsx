// import React from "react";
// import { expUserRooms, expUserBookings } from "../pages/CheckBookings";

// const BookingsCard = ({ userRooms, userBookings }) => {
//   return (
//     <div>
//       <div className="flex flex-col max-w-[400px] shadow-[0_0_10px_rgba(8,7,16,0.6)] rounded-xl p-5">
//         <div className="flex flex-col p-0 rounded-xl bg-zinc-400 h-[17rem]">
//           <img
//             loading="lazy"
//             src={userRooms[0].Image}
//             className="h-full w-full object-cover aspect-square rounded-xl mt-0"
//             alt="Room"
//           />
//         </div>
//         <div className="flex gap-5 justify-between mt-4 w-full text-sm">
//           <div className="flex flex-col">
//             <div className="flex flex-col px-2 text-zinc-600">
//               <div className="ml-0 pl-0 font-[590] text-neutral-800">
//                 {userRooms[0].Title}
//               </div>
//               <div className="mt-1 text-wrap line-clamp-2 font-light">
//                 {userRooms[0].Description}
//               </div>

//               <div className="mt-1">
//                 Capacity :{" "}
//                 <span className="font-light">
//                   {userRooms[0].Capacity} people
//                 </span>
//               </div>
//             </div>
//             <div className="justify-center px-2 mt-2 text-neutral-800">
//               <span className="font-[590] text-neutral-800">
//                 ${userRooms[0].Price}/
//               </span>
//               night
//             </div>
//           </div>
//           <div className="flex gap-1 self-start px-5 whitespace-nowrap text-neutral-800">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/3519d40af15702780075f9b60fc8205a8e770dde6c66614b24f115b2669426e4?apiKey=74578851356e4301ad9acd8b3a4ecadc&"
//               className="shrink-0 self-start w-4 aspect-square fill-neutral-800"
//               alt="Rating Star"
//             />
//             <div>{userRooms[0].Rating}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingsCard;
