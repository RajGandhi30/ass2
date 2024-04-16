import React, { useState, useEffect } from "react";
import { notification } from "antd";
import RoomService from "../../../services/room.services";
import { nanoid } from "nanoid";

const AddRooms = () => {
  const [room, setRoom] = useState({
    Capacity: "",
    Description: "",
    Id: "",
    Image: "",
    Price: "",
    Rating: "",
    Title: "",
    isAvailable: true,
  });
  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    getAllRooms();
  }, []);

  const getAllRooms = async () => {
    const data = await RoomService.getAllRooms();
    setAllRooms(data);
  };

  const updateRoomInfo = async (id) => {
    const updatedRoomData = await RoomService.updateRoom(id, room);
    console.log("updated room data " + JSON.stringify(updatedRoomData));
  };

  const openNotification = async () => {
    // call addRooms method from room services
    const enteredTitle = document.getElementById("Room Title").value;
    if (allRooms.some((room) => room.Title === enteredTitle)) {
      notification.open({
        message: `Room with title ${enteredTitle} already exists!`,
        description: "Please try again.",
      });
    } else {
      // setRoom({ ...room, Id: nanoid(12) });
      const docRef = await RoomService.addRooms(room);
      alert("Room added successfully!");
      console.log(docRef.id);
      let id;
      id = docRef.id;
      setRoom((room.Id = id));

      if (document.getElementById("RoomIsAvailbale").checked == true) {
        setRoom({ ...room, isAvailable: true });
      } else {
        setRoom({ ...room, isAvailable: false });
      }
      updateRoomInfo(id);
      // RoomServices.addRooms(room);

      notification.open({
        message: `Successfully added room ${room.Title}!`,
      });
    }
  };

  return (
    <div>
      <div className="w-[100vw] h-fit flex flex-row">
        <form className="max-w-[600px] bg-[rgba(255,255,255,0.13)] backdrop-blur-[10px] shadow-[0_0_40px_rgba(8,7,16,0.6)] px-[35px] py-[50px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.1)] mx-[20%] pt-6">
          <h3 className="text-blue-600 text-[2rem] font-medium text-center">
            Add Room
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <label className="block font-medium mt-[30px]" htmlFor="RoomTitle">
              Room Title
              <input
                className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem] after:border-blue-600"
                type="text"
                placeholder="Room Title"
                value={room.Title}
                onChange={(e) => setRoom({ ...room, Title: e.target.value })}
                id="Room Title"
                name="RoomTitle"
                required
              />
            </label>
            <label className="block font-medium mt-[30px]" htmlFor="RoomDesc">
              Room Description
              <input
                className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                type="text"
                placeholder="Description"
                value={room.Description}
                onChange={(e) =>
                  setRoom({ ...room, Description: e.target.value })
                }
                id="Room Description"
                name="RoomDesc"
                required
              />
            </label>
            <label className="block font-medium mt-[30px]" htmlFor="RoomPrice">
              Room Price
              <input
                className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                type="number"
                placeholder="Price"
                value={room.Price}
                onChange={(e) => setRoom({ ...room, Price: e.target.value })}
                id="Room Price"
                name="RoomPrice"
                required
              />
            </label>
            <label className="block font-medium mt-[30px]" htmlFor="RoomRating">
              Room Rating
              <input
                className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                type="number"
                placeholder="Rating"
                value={room.Rating}
                onChange={(e) => setRoom({ ...room, Rating: e.target.value })}
                id="Room Rating"
                name="RoomRating"
                required
              />
            </label>
            <label
              className="block font-medium mt-[30px]"
              htmlFor="RoomCapacity"
            >
              Room Capacity
              <input
                className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                type="number"
                placeholder="Capacity"
                value={room.Capacity}
                onChange={(e) => setRoom({ ...room, Capacity: e.target.value })}
                id="Room Capacity"
                name="RoomCapacity"
                required
              />
            </label>
            <label className="block font-medium mt-[30px]" htmlFor="RoomImage">
              Room Image
              <input
                className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                type="url"
                placeholder="Image"
                value={room.Image}
                onChange={(e) => setRoom({ ...room, Image: e.target.value })}
                id="Room Image"
                name="RoomImage"
                required
              />
            </label>
          </div>
          <div className="flex flex-row justify-start mt-4 p-0">
            <div>
              <input
                className="bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 mr-4 mb-0 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                type="checkbox"
                value={room.isAvailable}
                // onChange={(e) => setRoom({ ...room, isAvailable: true })}
                id="RoomIsAvailbale"
                name="RoomIsAvailable"
                required
              />
            </div>
            <div>
              <label
                className="font-medium mt-[30px]"
                htmlFor="RoomIsAvailable"
              >
                Is Available
              </label>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-4 p-0">
            <button
              className="w-fit text-white mt-4 px-8 py-[0.9em] bg-orange-400 rounded-[5px] text-base font-semibold cursor-pointer"
              type="button"
              value="Add Room"
              onClick={openNotification}
            >
              Add Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRooms;
