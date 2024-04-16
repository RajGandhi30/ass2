import React, { useState, useEffect } from "react";
import BookingService from "../../../services/bookings.services";
import { db } from "../../../firebase-login";
import { collection, query, where, getDocs, setDoc } from "firebase/firestore";
import RoomService from "../../../services/room.services";
import { expRoom } from "../cards/RoomsCard";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const BookingRoom = () => {
  const navigate = useNavigate();
  const allBookings = BookingService.getAllBookings();
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
  const [name, setName] = useState("");
  // const [room, setRoom] = useState("");
  let room = "";

  const retrieveRoomData = async () => {
    // const q = query(collection(db, "rooms"), where("Title", "==", name));
    // const querySnapshot = await getDocs(q);
    // if (querySnapshot.empty) {
    //   alert("No such room exists");
    //   console.log("query " + name);
    // } else {
    //   console.log(querySnapshot.docs[0].data());
    //   room = querySnapshot.docs[0].data();
    //   console.log(room.Id);
    setRoomBooking((prev) => ({
      ...prev,
      roomId: expRoom.Id,
      userId: expRoom.roomOwner || "user1",
    }));
    // }
  };

  const updateBookingInfo = async (id) => {
    const updatedBookingData = await BookingService.updateBooking(
      id,
      roomBooking
    );
    console.log("updated booking data " + JSON.stringify(updatedBookingData));
  };

  useEffect(() => {
    // console.log("useeffect " + roomBooking.BookingId);
    if (roomBooking.BookingId) {
      updateBookingInfo(roomBooking.BookingId);
      // retrieveRoomData();
    }
    // updateBookingInfo(roomBooking.BookingId);
    // console.log(expRoom.Title);
  }, [roomBooking]);

  const checkIfRoomBooked = async () => {
    let isBooked = true;
    if (expRoom.isAvailable == true) {
      isBooked = false;
    } else {
      isBooked = true;
    }
    console.log(room);
    return isBooked;
  };

  const addBooking = async (roomBooking) => {
    // if (!checkIfRoomBooked) {
    if (!(await allBookings).includes(roomBooking)) {
      const addBookingRef = await BookingService.addBooking(roomBooking);
      console.log("Added Booking: ", addBookingRef);
      setRoomBooking((prev) => ({
        ...prev,
        BookingId: addBookingRef.id,
        bookingTime: new Date().toLocaleDateString(),
      }));
      notification.open({
        message: `Successfully added booking for ${expRoom.Title}!`,
      });
      // await setDoc(
      //   collection(db, "rooms", expRoom.Id),
      //   { roomOwner: "user1" },
      //   { merge: true }
      // );
      RoomService.updateRoom(
        expRoom.Id,
        { roomOwner: "user1", isAvailable: false },
        { merge: true }
      );
      navigate("/dashboard/check-bookings");
      // console.log(expRoom.Id);
    } else {
      notification.open({
        message: `Room is already booked!`,
      });
    }
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
                    setName(e.target.value);
                  }}
                  id="Booking Room Title"
                  name="BookingRoomTitle"
                  defaultValue={expRoom.Title}
                  // value={expRoom.Title}
                  required
                  // readOnly
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

                  // const isRoomBooked = checkIfRoomBooked();
                  // if (!isRoomBooked) {
                  addBooking(roomBooking);
                  // } else {
                  //   alert("Room is already booked for the selected dates");
                  // }
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
