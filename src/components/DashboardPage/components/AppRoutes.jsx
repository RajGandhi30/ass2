import React from "react";
import { AddRooms, CheckBookings, RoomsList, BookRooms } from "../pages";
import { Routes, Route } from "react-router-dom";
import BookingRoom from "../pages/BookingRoom";
import UpdateDetails from "../pages/UpdateDetails";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/rooms-list" element={<RoomsList />}></Route>
        <Route path="/add-rooms" element={<AddRooms />}></Route>
        <Route path="/check-bookings" element={<CheckBookings />}></Route>
        <Route path="/book-rooms" element={<BookingRoom />}></Route>
        <Route path="/update-details" element={<UpdateDetails />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
