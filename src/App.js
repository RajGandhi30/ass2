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
          element: <BookRooms />,
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
