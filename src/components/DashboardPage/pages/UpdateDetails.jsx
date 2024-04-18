import React, { useEffect, useState } from "react";
import { notification } from "antd";
import { roomTitle } from "../cards/RoomsCard";
import RoomService from "../../../services/room.services";
import { db } from "../../../firebase-login";
import { collection, query, where, getDocs } from "firebase/firestore";

const UpdateDetails = ({ user_role }) => {
  const [room, setRoom] = useState([]);

  const getRoomDetails = async () => {
    const q = query(collection(db, "rooms"), where("Title", "==", roomTitle));
    const querySnapShot = await getDocs(q);
    setRoom(querySnapShot.docs[0].data());
  };

  useEffect(() => {
    getRoomDetails();
  }, []);

  const updateDetail = async () => {
    await RoomService.updateRoom(room.Id, room);
    console.log("update details clicked");
    console.log(room.rating);
    notification.open({
      message: `Room with title ${room.Title} updated!`,
    });
  };

  return (
    <div>
      {user_role === "admin" ? (
        <div>
          <div>
            <div className="w-fit h-fit flex flex-row m-0">
              <form className="max-w-[600px] bg-[rgba(255,255,255,0.13)] backdrop-blur-[10px] px-[35px] py-[20px] my-[20px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.1)] pt-6 shadow-[0_0_10px_rgba(8,7,16,0.6)]">
                <div className="grid grid-cols-2 gap-4">
                  <label
                    className="block font-medium mt-[30px]"
                    htmlFor="RoomTitle"
                  >
                    Room Title
                    <input
                      className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem] after:border-blue-600"
                      type="text"
                      value={room.Title}
                      onChange={(e) =>
                        setRoom({
                          ...room,
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
                      value={room.Description}
                      onChange={(e) =>
                        setRoom({
                          ...room,
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
                      value={room.Price}
                      onChange={(e) =>
                        setRoom({
                          ...room,
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
                      value={room.Rating}
                      onChange={(e) =>
                        setRoom({
                          ...room,
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
                      value={room.Capacity}
                      onChange={(e) =>
                        setRoom({
                          ...room,
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
                      value={room.Image}
                      onChange={(e) =>
                        setRoom({
                          ...room,
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
                      id="RoomIsAvailbaleUpdated"
                      name="RoomIsAvailable"
                      checked={room.isAvailable}
                      onChange={() => {
                        if (room.isAvailable === true) {
                          setRoom({
                            ...room,
                            isAvailable: false,
                          });
                        } else {
                          room({
                            ...room,
                            isAvailable: true,
                          });
                        }
                      }}
                      // defaultValue={updateRoom.isAvailable}
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
                <div>
                  <button
                    className="border border-none px-5 py-3 my-3 flex mx-auto bg-blue-600 text-white text-base font-normal rounded-xl"
                    onClick={() => {
                      updateDetail();
                    }}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default UpdateDetails;
