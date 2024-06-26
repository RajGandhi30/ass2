import React, { useState, useEffect } from "react";
import RoomsCard from "../cards/RoomsCard";
import RoomServices from "../../../services/room.services";

let expAllRooms = [];

const RoomsList = ({ user_role }) => {
  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    getAllRooms();
    // expAllRooms = allRooms;
  }, []);

  const getAllRooms = async () => {
    const data = await RoomServices.getAllRooms();
    setAllRooms(data);
    expAllRooms = data;
  };

  return (
    <div className="text-4xl font-bold">
      {user_role === "admin"
        ? "Here's the Rooms List"
        : "Browse through all the rooms we have in store"}

      <div className="grid grid-cols-3 gap-10 grid-flow-row mt-10 hover:cursor-pointer">
        {allRooms.map((room) => (
          <RoomsCard key={room.Id} room={room} user_role={user_role} />
        ))}
      </div>
    </div>
  );
};
export { expAllRooms };
export default RoomsList;
