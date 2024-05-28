import React, { useState } from "react";
import { Flex, Menu, ConfigProvider, Row, Col, Button, Input,Divider  } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Accounts from "../account/account"

const items = [
  {
    label: "|",
    key: "home",
    icon: <i className="fa-solid fa-house"></i>,
  },
  {
    label: "Giới thiệu",
    key: "mail",
    icon: <i className="fa-regular fa-address-card"></i>,
  },
  {
    label: "Nội quy/ Hướng dẫn",
    key: "SubMenu",
    icon: <i className="fa-regular fa-file-pdf"></i>,
    children: [
      {
        type: "group",
        label: "Hướng dẫn",
        children: [
          {
            label: <a href="#op1">HƯỚNG DẪN ĐĂNG KÝ MƯỢN SÁCH ONLINE</a>,
            key: "hd:1",
          },
          {
            label: "HƯỚNG DẪN GIA HẠN SÁCH ONLINE",
            key: "hd:2",
          },
          {
            label: "Thủ tục làm thẻ",
            key: "hd:3",
          },
        ],
      },
      {
        type: "group",
        label: "Nội quy",
        children: [
          {
            label: "Lịch phục vụ",
            key: "nq:1",
            children: [
              {
                label: "Phòng Thẻ",
                key: "p:1",
              },
              {
                label: "Phòng Đọc giao lưu",
                key: "p:2",
              },
              {
                label: "Phòng Đọc mở",
                key: "p:3",
              },
              {
                label: "Phòng Mượn người lớn",
                key: "p:4",
              },
              {
                label: "Phòng Đọc mầm non",
                key: "p:5",
              },
              {
                label: "Phòng Đọc thiếu nhi",
                key: "p:6",
              },
            ],
          },
          {
            label: "Nội quy thư viện",
            key: "nq:2",
          },
          {
            label: "Bản đồ",
            key: "nq:3",
          },
        ],
      },
    ],
  },
  {
    label: "Theo dõi mượn sách",
    key: "borrow-info",
    icon: <i className="fa-solid fa-table-list"></i>,
    disabled: true,
  },

  {
    key: "contact",
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Liên hệ
      </a>
    ),
  },
];
const App = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
            },
          },
        }}
      >
        <Row>
          <Flex
            style={{ width: "100%" }}
            justify={"space-between"}
            align={"center"}
          >
            <Col style={{ display: "flex" }} span={12}>
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                style={{ minWidth: 0, flex: "auto" }}
              />
            </Col>
            <Flex gap="small">
              <Accounts />
            </Flex>
          </Flex>
        </Row>
      </ConfigProvider>
    </>
  );
};
export default App;
