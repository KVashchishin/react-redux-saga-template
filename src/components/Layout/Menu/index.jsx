import { HomeOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Menu as AntdMenu } from "antd";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  return (
    <AntdMenu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[pathname]}
      items={[
        {
          key: "/",
          icon: <HomeOutlined />,
          label: "Main",
          onClick: () => navigate("/"),
        },
        {
          key: "/other",
          icon: <OrderedListOutlined />,
          label: "Other",
          children: [
            {
              key: "/other/1",
              label: "Other 1",
              onClick: () => navigate("/other/1"),
            },
            {
              key: "/other/2",
              label: "Other 2",
              onClick: () => navigate("/other/2"),
            },
          ],
        },
      ]}
    />
  );
};

export default Menu;
