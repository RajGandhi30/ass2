import React from "react";
import pencil from "../../../assests/pencil.png";
import RoomService from "../../../services/room.services";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

let expRoom = [];
let roomTitle = "";

const RoomsCard = ({ room, user_role }) => {
  const navigate = useNavigate();

  const deleteRoom = async (id) => {
    console.log("Deleting room with id: " + id);
    await RoomService.deleteRoom(id);
    notification.open({
      message: `Room with title ${room.Title} deleted!`,
    });
    window.location.reload();
  };

  const updateRoom = () => {
    // roomTitle;
    navigate(`/dashboard/update-details`);
  };

  return (
    <div
      onClick={() => {
        if (user_role !== "admin") {
          expRoom = room;

          navigate(`/dashboard/book-rooms`);
        }
      }}
    >
      <div className="flex flex-col max-w-[400px] shadow-[0_0_10px_rgba(8,7,16,0.6)] rounded-xl p-5">
        {user_role === "admin" && (
          <div className="flex flex-row justify-end gap-1">
            <button
              onClick={() => deleteRoom(room.Id)}
              className="w-[30px] h-[30px] rounded-full bg-gray-200 text-red-700 font-semibold text-sm hover:bg-gray-400"
            >
              X
            </button>
            <button
              onClick={updateRoom}
              className="w-[30px] h-[30px] rounded-full bg-gray-200 text-green-700 font-semibold text-sm hover:bg-gray-400 flex "
            >
              <img src={pencil} alt="Edit Icon" className="w-[15px] m-auto" />
            </button>
          </div>
        )}
        <div className="flex flex-col p-0 rounded-xl bg-zinc-400 h-[17rem]">
          <img
            loading="lazy"
            src={room.Image}
            className="h-full w-full object-cover aspect-square rounded-xl mt-0"
            alt="Room"
          />
        </div>
        <div className="flex gap-5 justify-between mt-4 w-full text-sm">
          <div className="flex flex-col">
            <div className="flex flex-col px-2 text-zinc-600">
              <div
                className="ml-0 pl-0 font-[590] text-neutral-800"
                onMouseEnter={() => {
                  roomTitle = room.Title;
                }}
              >
                {room.Title}
              </div>
              <div className="mt-1 text-wrap line-clamp-2 font-light">
                {room.Description}
              </div>

              <div className="mt-1">
                Capacity :{" "}
                <span className="font-light">{room.Capacity} people</span>
              </div>
            </div>
            <div className="justify-center px-2 mt-2 text-neutral-800">
              <span className="font-[590] text-neutral-800">
                ${room.Price}/
              </span>
              night
            </div>
          </div>
          <div className="flex gap-1 self-start px-5 whitespace-nowrap text-neutral-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3519d40af15702780075f9b60fc8205a8e770dde6c66614b24f115b2669426e4?apiKey=74578851356e4301ad9acd8b3a4ecadc&"
              className="shrink-0 self-start w-4 aspect-square fill-neutral-800"
              alt="Rating Star"
            />
            <div>{room.Rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { expRoom, roomTitle };
export default RoomsCard;
