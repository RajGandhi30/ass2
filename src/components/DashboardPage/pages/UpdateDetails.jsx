import React from "react";
import { Modal, notification } from "antd";

const UpdateDetails = ({ user_role }) => {
  const updateRoomInfo = async (id) => {
    const updatedRoomData = await RoomService.updateRoom(id, room);
    console.log("updated room data " + JSON.stringify(updatedRoomData));
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleOk = async () => {
    notification.open({
      message: `Room with title ${updatedRoom.Title} updated!`,
    });
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);

    const data = await RoomService.updateRoom(room.Id, updatedRoom);
    console.log(data);
    setUpdatedRoom(data);
  };

  return (
    <div>
      {user_role == "admin" ? (
        <div>
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
                        value={updatedRoom.Title}
                        onChange={(e) =>
                          setUpdatedRoom({
                            ...updatedRoom,
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
                        value={updateRoom.Description}
                        onChange={(e) =>
                          setUpdatedRoom({
                            ...updatedRoom,
                            Description: e.target.value,
                          })
                        }
                        id="Room Description Updated"
                        name="RoomDesc"
                        // defaultValue={updatedRoom.Description}
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
                        value={updatedRoom.Price}
                        onChange={(e) =>
                          setUpdatedRoom({
                            ...updatedRoom,
                            Price: e.target.value,
                          })
                        }
                        id="Room Price Updated"
                        name="RoomPrice"
                        // defaultValue={updateRoom.Price}
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
                        value={updatedRoom.Rating}
                        onChange={(e) =>
                          setUpdatedRoom({
                            ...updatedRoom,
                            Rating: e.target.value,
                          })
                        }
                        id="Room Rating Updated"
                        name="RoomRating"
                        // defaultValue={updateRoom.Rating}
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
                        value={updatedRoom.Capacity}
                        onChange={(e) =>
                          setUpdatedRoom({
                            ...updatedRoom,
                            Capacity: e.target.value,
                          })
                        }
                        id="Room Capacity Updated"
                        name="RoomCapacity"
                        // defaultValue={updateRoom.Capacity}
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
                        value={updatedRoom.Image}
                        onChange={(e) =>
                          setUpdatedRoom({
                            ...updatedRoom,
                            Image: e.target.value,
                          })
                        }
                        id="Room Image Updated"
                        name="RoomImage"
                        // defaultValue={updateRoom.Image}
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
                        checked={updatedRoom.isAvailable}
                        onChange={() => {
                          if (updatedRoom.isAvailable === true) {
                            setUpdatedRoom({
                              ...updatedRoom,
                              isAvailable: false,
                            });
                          } else {
                            setUpdatedRoom({
                              ...updatedRoom,
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
                </form>
              </div>
            </div>
          </Modal>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default UpdateDetails;
