import { db } from "../firebase-login";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const booking_collection = collection(db, "bookings");
class BookingService {
  addBooking = (newBooking) => {
    return addDoc(booking_collection, newBooking);
  };

  updateBooking = (id, updatedBooking) => {
    return updateDoc(doc(db, "bookings", id), updatedBooking);
  };

  deleteBooking = (id) => {
    return deleteDoc(doc(db, "bookings", id));
  };

  getAllBookings = async () => {
    const bookingsData = await getDocs(booking_collection);
    let allBookings = [];
    bookingsData.forEach((doc) => {
      allBookings.push({ ...doc.data(), id: doc.id });
    });
    return allBookings;
  };

  getSingleBooking = async (id) => {
    const bookingDoc = await getDoc(doc(db, "bookings", id));
    return { ...bookingDoc.data(), id: bookingDoc.id };
  };
}
export default new BookingService();
