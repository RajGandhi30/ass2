import React, { useState, useEffect } from "react";
import RoomService from "../../../services/room.services";
import BookingService from "../../../services/bookings.services";
import { notification } from "antd";

const CheckBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [allRooms, setAllRooms] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchBookingData = async () => {
    try {
      setAllBookings(await BookingService.getAllBookings());
    } catch (err) {
      console.log("Error fetching bookings: ", err);
      notification.open({
        message: `Error fetching bookings`,
      });
    }
  };

  const fetchRoomData = async () => {
    try {
      setAllRooms(await RoomService.getAllRooms());
    } catch (err) {
      console.log("Error fetching bookings: ", err);
      notification.open({
        message: `Error fetching bookings`,
      });
    }
  };

  useEffect(() => {
    const fetching = async () => {
      fetchBookingData();
      fetchRoomData();
      setDataLoaded(true);
    };

    fetching();
  }, []);

  const userBookings = allBookings.filter(
    (booking) => booking.userId === "user1"
  );

  return (
    <div>
      <div key={"1"} id="cb">
        {dataLoaded ? (
          <div>
            {userBookings.length === 0 && (
              <div className="text-2xl font-semibold text-blue-600">
                No Bookings present!
              </div>
            )}
            {userBookings.map((userbooking) => {
              let userRooms = [];

              for (let r of allRooms) {
                if (r.Id === userbooking.roomId && !userRooms.includes(r)) {
                  userRooms.push(r);
                  break;
                }
              }

              let room = userRooms[0];
              return (
                <div>
                  {room && (
                    <div key={room.Id}>
                      {userbooking ? (
                        <BookingsCard
                          userRoom={room}
                          // keyId={room.Id}
                          currentBooking={userbooking}
                        />
                      ) : (
                        <div className="text-2xl font-semibold text-blue-600">
                          Sorry ${":("} No bookings present
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div>Sorry couldn't load data</div>
        )}
      </div>
    </div>
  );
};

export default CheckBookings;

const BookingsCard = ({ userRoom, currentBooking, keyId }) => {
  const deleteBooking = async (bookingId) => {
    await BookingService.deleteBooking(bookingId);
    window.location.reload();
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
