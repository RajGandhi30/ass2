import React, { useState, useEffect } from "react";
import BookingService from "../../../services/bookings.services";
import { db } from "../../../firebase-login";
import { collection, query, where, getDocs } from "firebase/firestore";
import RoomService from "../../../services/room.services";
import { expRoom } from "../cards/RoomsCard";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const BookingRoom = () => {
  const navigate = useNavigate();
  const [roomBooking, setRoomBooking] = useState({
    BookingId: "",
    bookingStatus: true,
    bookingTime: "",
    checkInDate: "",
    checkOutdate: "",
    dayId: "",
    guests: null,
    roomId: "",
    userId: "",
  });
  // const [name, setName] = useState("");
  let room = "";
  let name;

  const retrieveRoomData = async () => {
    name = document.getElementById("Booking Room Title").value;
    const q = query(collection(db, "rooms"), where("Title", "==", name));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      alert("No such room exists");
      console.log("query " + name);
    } else {
      console.log(querySnapshot.docs[0].data());
      room = querySnapshot.docs[0].data();
      console.log(room.Id);
      setRoomBooking((prev) => ({
        ...prev,
        roomId: room.Id,
        userId: room.roomOwner,
      }));
    }
  };

  const updateBookingInfo = async (id) => {
    const updatedBookingData = await BookingService.updateBooking(
      id,
      roomBooking
    );
    console.log("updated booking data " + JSON.stringify(updatedBookingData));
  };

  useEffect(() => {
    if (roomBooking.BookingId) {
      updateBookingInfo(roomBooking.BookingId);
    }
  }, [roomBooking]);

  const addBooking = async (roomBooking) => {
    const addBookingRef = await BookingService.addBooking(roomBooking);
    console.log("Added Booking: ", addBookingRef);
    setRoomBooking((prev) => ({
      ...prev,
      BookingId: addBookingRef.id,
      bookingTime: new Date().toLocaleDateString().replace("/", "-"),
    }));
    notification.open({
      message: `Booking added successfully for ${expRoom.Title}!`,
    });
    await RoomService.updateRoom(expRoom.Id, {
      ...expRoom,
      roomOwner: "user1",
    });
    navigate("/dashboard/check-bookings");
  };

  return (
    <div>
      <div className="">
        <div className="h-fit flex flex-row">
          <form className="w-[65rem] bg-[rgba(255,255,255,0.13)] backdrop-blur-[10px] shadow-[0_0_40px_rgba(8,7,16,0.6)] px-[35px] py-[50px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.1)] mx-[20%] pt-6">
            <h3 className="text-blue-600 text-[2rem] font-medium text-center">
              Book a Room
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <label
                className="block font-medium mt-[30px]"
                htmlFor="BookingRoomTitle"
              >
                Room Title
                <input
                  className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem] after:border-blue-600"
                  type="text"
                  placeholder="Enter Room Title"
                  onChange={(e) => {
                    name = e.target.value;
                  }}
                  id="Booking Room Title"
                  name="BookingRoomTitle"
                  value={expRoom.Title}
                  required
                />
              </label>
              <label
                className="block font-medium mt-[30px]"
                htmlFor="BookingRoomCheckin"
              >
                Check-in
                <input
                  className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                  type="date"
                  placeholder="Check-in Date"
                  onChange={(e) =>
                    setRoomBooking({
                      ...roomBooking,
                      checkInDate: e.target.value,
                    })
                  }
                  id="Booking Room Checkin"
                  name="BookingRoomCheckin"
                  required
                />
              </label>
              <label
                className="block font-medium mt-[30px]"
                htmlFor="BookingRoomCheckout"
              >
                Check-out
                <input
                  className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                  type="date"
                  placeholder="Check-out Date"
                  onChange={(e) =>
                    setRoomBooking({
                      ...roomBooking,
                      checkOutdate: e.target.value,
                    })
                  }
                  id="Booking Room Checkout"
                  name="BookingRoomCheckout"
                  required
                />
              </label>
              <label
                className="block font-medium mt-[30px]"
                htmlFor="BookingRoomGuests"
              >
                Guests
                <input
                  className="w-full bg-[rgba(255,255,255,0.07)] border border-blue-600 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                  type="number"
                  placeholder="Guests"
                  onChange={(e) =>
                    setRoomBooking({ ...roomBooking, guests: e.target.value })
                  }
                  id="Booking Room Guests"
                  name="BookingRoomGuests"
                  required
                />
              </label>
            </div>
            <div className="flex flex-row justify-center mt-4 p-0">
              <button
                className="w-fit text-white mt-4 px-8 py-[0.9em] bg-orange-400 rounded-[5px] text-base font-semibold cursor-pointer"
                type="button"
                value="Book a Room"
                onClick={() => {
                  retrieveRoomData();
                  addBooking(roomBooking);
                }}
              >
                Book a Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingRoom;
