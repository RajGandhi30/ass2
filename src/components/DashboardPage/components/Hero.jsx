import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddRooms, CheckBookings, RoomsList, BookRooms } from "../pages";

const Hero = ({ user_role }) => {
  return (
    <div className="text-[#212427] block absolute top-[13%] left-[20%]">
      {user_role === "admin" ? (
        <Routes>
          <Route
            path="/rooms-list"
            element={<RoomsList user_role={user_role} />}
          ></Route>
          <Route
            path="/add-rooms"
            element={<AddRooms user_role={user_role} />}
          ></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/check-bookings" element={<CheckBookings />}></Route>
          <Route path="/book-rooms" element={<BookRooms />}></Route>
        </Routes>
      )}
    </div>
  );
};

export default Hero;
