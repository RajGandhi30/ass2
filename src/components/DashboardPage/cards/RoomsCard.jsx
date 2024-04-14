import React, { useState } from "react";
import pencil from "../../../assests/pencil.png";
import { Modal, notification } from "antd";
import RoomServices from "../../../services/room.services";

const RoomsCard = ({ room, user_role }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [updatedRoom, setUpdatedRoom] = useState(room);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    notification.open({
      message: `Room with title ${updateRoom.Title} updated!`,
    });
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);

    const data = await RoomServices.updateRoom(room.Id, updatedRoom);
    console.log(data);
    setUpdatedRoom(data);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const deleteRoom = () => {
    RoomServices.deleteRoom(room.Id);
    notification.open({
      message: "Room Deleted",
      description: `${room.Title} has been deleted.`,
    });
  };

  const updateRoom = () => {
    // open modal to update room info
    showModal();
  };

  return (
    <div>
      <div className="flex flex-col max-w-[400px] shadow-[0_0_10px_rgba(8,7,16,0.6)] rounded-xl p-5">
        {user_role === "admin" && (
          <div className="flex flex-row justify-end gap-1">
            <button
              onClick={deleteRoom}
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
            <Modal
              title="Update Room Info"
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <div>
                <div className="w-fit h-fit flex flex-row m-0">
                  <form className="max-w-[600px] bg-[rgba(255,255,255,0.13)] backdrop-blur-[10px] px-[35px] py-[20px] my-[20px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.1)] pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <label
                        className="block font-medium mt-[30px]"
                        htmlFor="RoomTitle"
                      >
                        Room Title
                        <input
                          className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem] after:border-blue-600"
                          type="text"
                          // placeholder="Room Title"
                          value={updateRoom.Title}
                          onChange={(e) =>
                            setUpdatedRoom({
                              ...updateRoom,
                              Title: e.target.value,
                            })
                          }
                          id="Room Title Updated"
                          name="RoomTitle"
                          required
                          contentEditable={true}
                        />
                      </label>
                      <label
                        className="block font-medium mt-[30px]"
                        htmlFor="RoomDesc"
                      >
                        Room Description
                        <input
                          className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                          type="text"
                          // placeholder="Description"
                          value={updateRoom.Description}
                          onChange={(e) =>
                            setUpdatedRoom({
                              ...updateRoom,
                              Description: e.target.value,
                            })
                          }
                          id="Room Description Updated"
                          name="RoomDesc"
                          required
                        />
                      </label>
                      <label
                        className="block font-medium mt-[30px]"
                        htmlFor="RoomPrice"
                      >
                        Room Price
                        <input
                          className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                          type="number"
                          // placeholder="Price"
                          value={updateRoom.Price}
                          onChange={(e) =>
                            setUpdatedRoom({
                              ...updateRoom,
                              Price: e.target.value,
                            })
                          }
                          id="Room Price Updated"
                          name="RoomPrice"
                          required
                        />
                      </label>
                      <label
                        className="block font-medium mt-[30px]"
                        htmlFor="RoomRating"
                      >
                        Room Rating
                        <input
                          className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                          type="number"
                          // placeholder="Rating"
                          value={updateRoom.Rating}
                          onChange={(e) =>
                            setUpdatedRoom({
                              ...updateRoom,
                              Rating: e.target.value,
                            })
                          }
                          id="Room Rating Updated"
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
                          // placeholder="Capacity"
                          value={updateRoom.Capacity}
                          onChange={(e) =>
                            setUpdatedRoom({
                              ...updateRoom,
                              Capacity: e.target.value,
                            })
                          }
                          id="Room Capacity Updated"
                          name="RoomCapacity"
                          required
                        />
                      </label>
                      <label
                        className="block font-medium mt-[30px]"
                        htmlFor="RoomImage"
                      >
                        Room Image
                        <input
                          className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                          type="url"
                          // placeholder="Image"
                          value={updateRoom.Image}
                          onChange={(e) =>
                            setUpdatedRoom({
                              ...updateRoom,
                              Image: e.target.value,
                            })
                          }
                          id="Room Image Updated"
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
                          // value={room.isAvailable}
                          // onChange={(e) => setUpdatedRoom({ ...room, isAvailable: true })}
                          id="RoomIsAvailbaleUpdated"
                          name="RoomIsAvailable"
                          checked={updateRoom.isAvailable}
                          onChange={() => {
                            if (updateRoom.isAvailable === true) {
                              setUpdatedRoom({
                                ...updateRoom,
                                isAvailable: false,
                              });
                            } else {
                              setUpdatedRoom({
                                ...updateRoom,
                                isAvailable: true,
                              });
                            }
                          }}
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
                  </form>
                </div>
              </div>
            </Modal>
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
              <div className="ml-0 pl-0 font-[590] text-neutral-800">
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

export default RoomsCard;
