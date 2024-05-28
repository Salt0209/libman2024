import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Divider,
  Row,
  Typography,
  Select,
  Col,
  Input,
  Space,
  Card,
  Image,
  Descriptions,
  Pagination,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { Search } = Input;

const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const resetTime = 1 * 60 * 60 * 1000;

  useEffect(() => {
    const now = new Date().getTime();
    const lastShownTime = localStorage.getItem("lastShownTime");
    // Hiển thị modal khi component được mount
    if (!lastShownTime || now - lastShownTime > resetTime) {
      // Nếu đã quá thời gian reset hoặc chưa từng hiển thị
      localStorage.setItem("lastShownTime", now);
      setIsModalVisible(true);
    }
  }, []);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const list = [
    {
      label: "label1",
      value: "value1",
    },
    {
      label: "label2",
      value: "value2",
    },
    {
      label: "label3label3label3label3label3label3label3",
      value: "value3",
    },
    {
      label: "label4label4label4label4label4label4",
      value: "value4",
    },
    {
      label: "label4label4label4label4label4label4",
      value: "value5",
    },
  ];
  const optionsDefault = [];
  for (let i = 0; i < 2; i++) {
    optionsDefault.push({
      label: list[i].label,
      value: list[i].value,
    });
  }
  const options = list.map((item) => ({
    label: item.label,
    value: item.value,
  }));
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  // =============================
  // list book here
  // =============================
  const books = [
    {
      key: "1",
      title: "Book Example 1",
      items: [
        { label: "UserName", children: "Zhou Maomao" },
        { label: "Telephone", children: "1810000000" },
        { label: "Live", children: "Hangzhou, Zhejiang" },
        { label: "Remark", children: "empty" },
        {
          label: "Address",
          children:
            "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
        },
      ],
    },
    {
      key: "2",
      title: "Book Guide 2",
      items: [
        { label: "UserName", children: "Li Lei" },
        { label: "Telephone", children: "1820000000" },
        { label: "Live", children: "Beijing" },
        { label: "Remark", children: "important" },
        {
          label: "Address",
          children: "No. 19, Chaoyang Road, Chaoyang District, Beijing, China",
        },
      ],
    },
    // Add more books as needed
  ];

  return (
    <>
      <Modal
        title="Thông Báo"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="ok" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <p>Đây là thông tin quảng cáo hoặc thông báo hoạt động.</p>
      </Modal>
      <div style={{ padding: "5px 50px" }}>
        <Row
          style={{
            height: "fit-content",
          }}
        >
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input.Search
              prefix={<SearchOutlined style={{ verticalAlign: "middle" }} />}
              enterButton="Search"
            />
          </Col>
        </Row>
        <Row align="middle">
          <Col span={2}>
            <h4>Thể loại:</h4>
          </Col>
          <Col>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "120%",
                minWidth: "200px",
                maxWidth: "720px",
              }}
              placeholder="Please select"
              defaultValue={optionsDefault}
              onChange={handleChange}
              options={options}
            />
          </Col>
        </Row>
        <Row align="middle">
          <Col span={2}>
            <h4>Tác giả:</h4>
          </Col>
          <Col>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "120%",
                minWidth: "200px",
                maxWidth: "720px",
              }}
              placeholder="Please select"
              defaultValue={optionsDefault}
              onChange={handleChange}
              options={options}
            />
          </Col>
        </Row>
        <hr />
        {/* ======================================= */}
        {/* List card */}
        {/* ======================================= */}
        {books.map((book) => (
          <Card
            title={book.title}
            extra={<Button danger>Đặt mượn</Button>}
            style={{}}
            key={book.key}
          >
            <Row>
              <Col span={4}>
                <Image
                  style={{
                    width: "100px",
                    maxHeight: "150px",
                  }}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Col>
              <Col span={20}>
                <Descriptions items={book.items} />
              </Col>
            </Row>
          </Card>
        ))}
        <br/>
        <center>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={100}
          />
        </center>
      </div>
    </>
  );
};

export default Index;
