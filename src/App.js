import Login from "./Pages/Login";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import {
  AddRooms,
  BookRooms,
  CheckBookings,
  RoomsList,
} from "./components/DashboardPage/pages";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import BookingRoom from "./components/DashboardPage/pages/BookingRoom";
import UpdateDetails from "./components/DashboardPage/pages/UpdateDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
      children: [
        {
          path: "/dashboard/rooms-list",
          element: <RoomsList />,
        },
        {
          path: "/dashboard/add-rooms",
          element: <AddRooms />,
        },
        {
          path: "/dashboard/check-bookings",
          element: <CheckBookings />,
        },
        {
          path: "/dashboard/book-rooms",
          element: <BookingRoom />,
        },
        {
          path: "/dashboard/update-details",
          element: <UpdateDetails />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <div>
      <LandingPage />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
