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

const room_collection = collection(db, "rooms");
class RoomService {
  addRooms = (newRoom) => {
    return addDoc(room_collection, newRoom);
  };

  updateRoom = (id, updatedRoom) => {
    return updateDoc(doc(db, "rooms", id), updatedRoom);
  };

  deleteRoom = (id) => {
    return deleteDoc(doc(db, "rooms", id));
  };

  getAllRooms = async () => {
    const roomsData = await getDocs(room_collection);
    let allRooms = [];
    roomsData.forEach((doc) => {
      allRooms.push({ ...doc.data(), id: doc.id });
    });
    return allRooms;
  };

  getOneRoom = async (id) => {
    const roomDoc = await getDoc(doc(db, "rooms", id));
    return { ...roomDoc.data(), id: roomDoc.id };
  };
}
export default new RoomService();
