import React, { useState, useEffect } from "react";
import RoomsList from "./RoomsList";
import RoomService from "../../../services/room.services";
import { db } from "../../../firebase-login";
import { collection, query, where, getDocs } from "firebase/firestore";
import { expAllRooms } from "./RoomsList";
import BookingService from "../../../services/bookings.services";
import { useNavigate } from "react-router-dom";

const CheckBookings = () => {
  const [userBookings, setUserBookings] = useState([]);
  const [userRooms, setUserRooms] = useState([]);
  const [rendered, setRendered] = useState([]);
  let allBookings = [];

  useEffect(() => {
    const timer = setTimeout(() => {
      getUserBookings();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getUserBookings = async () => {
    const q = query(collection(db, "bookings"), where("userId", "==", "user1"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      alert("You have no bookings");
    } else {
      const bookedRooms = [];
      for (let doc of querySnapshot.docs) {
        let bookingData = doc.data();
        allBookings.push(bookingData);
        setUserBookings(allBookings);
        const roomData = await fetchRoomData(bookingData.roomId);
        if (roomData && !bookedRooms.includes(roomData)) {
          bookedRooms.push(roomData);
        }
      }
      // console.log(userBookings);

      setUserRooms(bookedRooms);
    }
  };

  const fetchRoomData = async (roomId) => {
    const roomData = await RoomService.getOneRoom(roomId);
    return roomData;
  };

  return (
    <div key={"1"} id="cb">
      {userRooms.map((room) => {
        let currentBooking = null;

        for (let booking of userBookings) {
          if (booking.roomId === room.Id) {
            currentBooking = booking;
          }
        }

        return (
          <div key={room.id}>
            {currentBooking ? (
              <BookingsCard
                userRoom={room}
                keyId={room.id}
                currentBooking={currentBooking}
              />
            ) : (
              <div className="text-2xl font-semibold text-blue-600">
                {/* Sorry `${":("}` No bookings present */}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CheckBookings;

const BookingsCard = ({ userRoom, currentBooking, keyId }) => {
  const navigate = useNavigate();
  const deleteBooking = async (bookingId) => {
    await BookingService.deleteBooking(bookingId);
    navigate("/dashboard/rooms-list");

    navigate("/dashboard/check-bookings");
    console.log("deleting booking!");
  };

  return (
    <div>
      <div id="check-bookings" key={keyId}>
        <div className="flex flex-row shadow-[0_0_10px_rgba(8,7,16,0.6)] rounded-xl p-5 w-[65rem] mt-6">
          <div className="flex flex-col p-0 rounded-xl bg-zinc-400 h-[17rem] w-[30rem]">
            <img
              loading="lazy"
              src={userRoom.Image}
              className="h-full w-full object-cover aspect-square rounded-xl mt-0"
              alt="Room"
            />
          </div>
          <div className="flex gap-5 justify-between mt-1 w-full text-sm ml-6">
            <div className="flex flex-col">
              <div className="flex flex-col px-2 text-zinc-600">
                <div className="ml-0 pl-0 font-semibold text-xl text-neutral-800">
                  {userRoom.Title}
                </div>
                <div className="mt-1 text-wrap line-clamp-2 font-light text-base">
                  {userRoom.Description}
                </div>

                <div className="mt-1 text-lg">
                  Guests :{" "}
                  <span className="font-light">
                    {currentBooking.guests || 0} people
                  </span>
                </div>
                <div className="mt-1 text-lg">
                  Check-in :{" "}
                  <span className="font-light">
                    {currentBooking.checkInDate}
                  </span>
                </div>
                <div className="mt-1 text-lg">
                  Check-Out :{" "}
                  <span className="font-light">
                    {currentBooking.checkOutdate}
                  </span>
                </div>
              </div>
              <div className="justify-center px-2 mt-2 text-neutral-800 text-lg">
                <span className="font-[590] text-neutral-800">
                  ${userRoom.Price}/
                </span>
                night
              </div>
            </div>
            <div className="flex gap-1 self-start px-5 whitespace-nowrap text-neutral-800 flex-col ">
              <div className="flex flex-row-reverse self-end gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3519d40af15702780075f9b60fc8205a8e770dde6c66614b24f115b2669426e4?apiKey=74578851356e4301ad9acd8b3a4ecadc&"
                  className="shrink-0 self-start w-4 aspect-square fill-neutral-800 mt-[0.2rem]"
                  alt="Rating Star"
                />
                <div className="text-base">
                  <strong>Rating : {userRoom.Rating}</strong>
                </div>
              </div>
              <div className="mt-[12.1rem]">
                <button
                  onClick={() => deleteBooking(currentBooking.BookingId)}
                  className="bg-red-500 text-white text-lg font-semibold px-4 py-2"
                >
                  Delete Bookings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
