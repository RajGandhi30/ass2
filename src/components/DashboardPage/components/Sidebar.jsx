import React from "react";
import { Menu, Layout, Image } from "antd";
import { useNavigate } from "react-router-dom";
import BookingBash from "../../../assests/BookingBash.png";

const Sidebar = ({ user_role }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Layout.Sider>
        <div className="w-[17rem] bg-[#212427] min-h-full fixed h-[140vh] top-0">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              marginBottom: "2rem",
            }}
          >
            <Image
              width={150}
              src={BookingBash}
              className="scale-150 ml-0 mt-8"
            ></Image>
          </div>
          {user_role === "admin" ? (
            <Menu
              className="text-base font-bold bg-[#212427] text-left p-0"
              theme="dark"
              mode="inline"
              onClick={(item) => {
                navigate(item.key);
              }}
              items={[
                {
                  label: "Rooms List",
                  key: "./rooms-list",
                  // icon: <AppstoreOutlined />,
                  // style: { margin: "1.5rem 0.5rem 1.5rem 0",
                  //         width: "max-content",
                  //       },
                  className: "w-max cursor-pointer",
                  style: {
                    fontFamily: "Poppins",
                    fontSize: "1.25rem",
                    fontWeight: "200",
                    margin: "1rem 0",
                  },
                },
                {
                  label: "Add Rooms",
                  key: "./add-rooms",
                  // icon: <UserOutlined />,
                  // style: {margin: "1.5rem 0.5rem 1.5rem 0",
                  //         width: "max-content",
                  //       },
                  className: "w-max cursor-pointer;",
                  style: {
                    fontFamily: "Poppins",
                    fontSize: "1.25rem",
                    fontWeight: "200",
                    margin: "1rem 0",
                  },
                },
                {
                  label: "Logout",
                  key: "./logout",
                  // icon: <ShopOutlined />
                  className: "w-max cursor-pointer;",
                  style: {
                    fontFamily: "Poppins",
                    fontSize: "1.25rem",
                    fontWeight: "200",
                    margin: "1rem 0",
                  },
                },
              ]}
            ></Menu>
          ) : (
            <Menu
              className="text-base font-bold bg-[#212427] text-left p-0"
              theme="dark"
              mode="inline"
              onClick={(item) => {
                navigate(item.key);
              }}
              // className="w-[17rem] bg-[#212427] min-h-full fixed h-[140vh] top-0"

              items={[
                {
                  label: "Book a Room",
                  key: "./book-rooms",
                  // icon: <AppstoreOutlined />,
                  // style: { margin: "1.5rem 0.5rem 1.5rem 0",
                  //         width: "max-content",
                  //       },
                  className: "w-max cursor-pointer;",
                  style: {
                    fontFamily: "Poppins",
                    fontSize: "1.25rem",
                    fontWeight: "200",
                    margin: "1rem 0",
                  },
                },
                {
                  // MUST INCLUDE ALL ROOM BOOKINGS AND SPECIFIC ROOM BOOKINGS
                  label: "My Bookings",
                  key: "./check-bookings",
                  // icon: <ShopOutlined />,
                  // style: {margin: "1.5rem 0.5rem 1.5rem 0",
                  //         cursor:"pointer"
                  //       },
                  className: "w-max cursor-pointer;",
                  style: {
                    fontFamily: "Poppins",
                    fontSize: "1.25rem",
                    fontWeight: "200",
                    margin: "1rem 0",
                  },
                },
              ]}
            ></Menu>
          )}
        </div>
      </Layout.Sider>
    </div>
  );
};

export default Sidebar;
