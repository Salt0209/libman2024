import React, { useState } from "react";
import {
  Col,
  Button,
  Modal,
  Form,
  Input,
  Checkbox,
  message,
  Steps,
  theme,
  Flex,
  Dropdown,
  Space,
  Row,
  Popover,
  Collapse,
  Upload,
  Radio,
  Tag,
  DatePicker,
  Tooltip,
  Typography
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { InfoCircleOutlined } from "@ant-design/icons";
const { Text } = Typography;
//Step 2
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: false,
  beforeUpload(file) {
    console.log("file before:", file);
    const isJpg = file.type === "image/jpeg";
    const isLt6M = file.size < 6 * 1024 * 1024;
    if (!isJpg) {
      message.error("You can only upload JPG file!");
    }
    if (!isLt6M) {
      message.error("Image must be smaller than 6MB!");
    }
    return (isJpg && isLt6M) || Upload.LIST_IGNORE;
  },
  onChange(info) {
    // const { status } = info.file;
    // if (status !== "uploading") {
    //   console.log(info.file, info.fileList);
    // }
    // if (status === "done") {
    //   message.success(`${info.file.name} file uploaded successfully.`);
    // } else if (status === "error") {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
    console.log("onchange", info);
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const Account = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [currentCardType, setCurrentCardType] = useState("Chọn loại thẻ");
  const [currentLib, setCurrentLib] = useState("Chọn cơ sở thư viện");

  const showModalLogin = () => {
    setOpenLogin(true);
  };
  const handleOkLogin = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenLogin(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancelLogin = () => {
    console.log("Clicked cancel button");
    setOpenLogin(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // item dropdown
  const cardTypeItems = [
    {
      label: "Thẻ đọc",
      key: "1",
    },
    {
      label: "Thẻ mượn",
      key: "2",
    },
    {
      label: "Thẻ mượn - đọc",
      key: "3",
    },
    {
      label: "Thẻ thiếu nhi",
      key: "4",
    },
  ];

  const handlecardType = (e) => {
    console.log("click", e);
    const clickedItem = cardTypeItems.find((item) => item.key === e.key);
    if (clickedItem && clickedItem.label) {
      setCurrentCardType(clickedItem.label);
    }
  };
  const menuCardType = {
    items: cardTypeItems,
    onClick: handlecardType,
  };

  const libItems = [
    {
      label: "Cơ sở Bà Triệu",
      key: "1",
    },
    {
      label: "Cơ sở Hà Đông",
      key: "2",
    },
  ];
  const handleLib = (e) => {
    console.log("click lib", e);
    const clickedItem = libItems.find((item) => item.key === e.key);
    if (clickedItem && clickedItem.label) {
      setCurrentLib(clickedItem.label);
    }
  };
  const menuLib = {
    items: libItems,
    onClick: handleLib,
  };

  //popover
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hide = () => {
    setClicked(false);
    setHovered(false);
  };
  const handleHoverChange = (open) => {
    setHovered(open);
    setClicked(false);
  };
  const handleClickChange = (open) => {
    setHovered(false);
    setClicked(open);
  };
  const handleCopy = () => {
    navigator.clipboard
      .writeText("0123456789")
      .then(() => {
        message.success("Text copied to clipboard!");
      })
      .catch((err) => {
        message.error("Failed to copy text");
        console.error("Could not copy text: ", err);
      });
  };
  const popoverTitle = (
    <>
      Thông tin các loại thẻ ở danh sách bên phải
      <br />
      Mọi thắc mắc xin liên hệ: 0123 456 789&nbsp;
      <Popover content="Sao chép">
        <i className="fa-regular fa-copy" onClick={handleCopy}></i>
      </Popover>
    </>
  );
  const libTitle = (
    <>
      Cơ sở 1: 47 Bà Triệu, Quận Hoàn Kiếm, Hà Nội
      <br />
      Cơ sở 2: 2B Quang Trung, Quận Hà Đông, Hà Nội
    </>
  );

  //collapse
  const { Panel } = Collapse;
  const panelData = [
    {
      key: "1",
      header: "Thẻ đọc",
      text: "Nội dung của thẻ đọc",
    },
    {
      key: "2",
      header: "Thẻ mượn",
      text: "Nội dung của thẻ mượn",
    },
    {
      key: "3",
      header: "Thẻ mượn - đọc",
      text: "Nội dung của thẻ mượn - đọc",
    },
    {
      key: "4",
      header: "Thẻ thiếu nhi",
      text: "Nội dung của thẻ thiếu nhi",
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };

  //Form step 3
  const styleFormItem3 = {
    display: "flex",
    justifyContent: "flex-start",
  };

  //Step 4:
  const successContent = (
    <>
      <Space.Compact
        direction="vertical"
        size="small"
        style={{ padding: "20px" }}
      >
        <i className="fa-regular fa-circle-check fa-2xl" style={{color:'green'}}></i>
        <div style={{fontSize:'20px', color:'black'}}>
          <br />
          <b>Đăng ký bạn đọc trực tuyến thành công</b>
          <br />
          <Text mark style={{fontSize:'20px'}}>
          Trong thời gian 7 ngày, bạn đọc vui lòng đến Thư viện để được cấp thẻ.
          Sau thời gian này đăng ký sẽ không còn hiệu lực.</Text>
          <br />
          Xin chân thành cảm ơn!
        </div>
      </Space.Compact>
    </>
  );

  // step
  const steps = [
    {
      title: "Chọn loại thẻ",
      content: (
        <Flex vertical={false} justify="center">
          <div style={{ width: "50%", padding: "10px" }}>
            <Form>
              <Form.Item>
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <label>Chọn loại thẻ:</label>
                  <Popover
                    style={{
                      width: 500,
                    }}
                    title={popoverTitle}
                    trigger="hover"
                    open={hovered}
                    onOpenChange={handleHoverChange}
                  >
                    <Popover
                      title={popoverTitle}
                      trigger="click"
                      open={clicked}
                      onOpenChange={handleClickChange}
                    >
                      <i className="fa-solid fa-circle-question"></i>
                    </Popover>
                  </Popover>

                  <Dropdown menu={menuCardType}>
                    <Button>
                      <Space
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {currentCardType}
                        <i className="fa-solid fa-chevron-down"></i>
                      </Space>
                    </Button>
                  </Dropdown>
                </Row>
              </Form.Item>
              <Form.Item>
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <label>Chọn thư viện:</label>
                  <Popover title={libTitle}>
                    <i className="fa-solid fa-circle-question"></i>
                  </Popover>
                  <Dropdown menu={menuLib}>
                    <Button>
                      <Space
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {currentLib}
                        <i className="fa-solid fa-chevron-down"></i>
                      </Space>
                    </Button>
                  </Dropdown>
                </Row>
              </Form.Item>
            </Form>
          </div>
          <div style={{ width: "50%" }}>
            <Collapse onChange={onChange}>
              {panelData.map((panel) => (
                <Panel header={panel.header} key={panel.key}>
                  <p>{panel.text}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
        </Flex>
      ),
      icon: <i className="fa-regular fa-address-card"></i>,
    },
    {
      title: "Ảnh thẻ",
      content: (
        <>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </p>
            <p className="ant-upload-text">Bấm hoặc kéo ảnh vào khu vực này</p>
            <p className="ant-upload-hint">
              Yêu cầu chọn Ảnh chân dung có kích thước: 3x2; định dạng:
              .png;.jpg;.jpeg; dung lượng nhỏ hơn 6 MB
            </p>
          </Dragger>
        </>
      ),
      icon: <i className="fa-solid fa-images"></i>,
    },
    {
      title: "Thông tin cá nhân",
      content: (
        <>
          <Form
            layout={"horizontal"}
            style={{
              maxWidth: 600,
              padding: "10px",
            }}
            autoComplete="off"
          >
            <Form.Item label="Họ tên" name="username" required>
              <Input
                placeholder="Nhập họ và tên..."
                prefix={
                  <Tooltip title="Vui lòng nhập đúng họ tên trên thẻ CMND/CCCD/HC">
                    <i className="fa-solid fa-circle-info"></i>
                  </Tooltip>
                }
              />
            </Form.Item>
            <Form.Item label="Giới tính" name="gioitinh" required>
              <Radio.Group style={styleFormItem3} defaultValue={0}>
                <Radio value={0}> Nam </Radio>
                <Radio value={1}> Nữ </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Ngày sinh"
              name="ngaysinh"
              required
              style={styleFormItem3}
            >
              <DatePicker onChange={onChange} />
            </Form.Item>
            <Form.Item label="CMND/CCCD/HC" name="cmnd" required>
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email" required>
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Số điện thoại" name="sdt" required>
              <Input type="number" />
            </Form.Item>
            <Form.Item label="Địa chỉ hiện tại" name="diachi">
              <Input 
                prefix={
        <Tooltip title="Thông tin thêm, không bắt buộc">
          <i className="fa-solid fa-circle-info" style={{color: '#CCCCCC'}}></i>
        </Tooltip>
      }
              />
            </Form.Item>
          </Form>
        </>
      ),
      icon: <i className="fa-solid fa-circle-info"></i>,
    },
    {
      title: "Hoàn tất",
      content: <>{successContent}</>,
      icon: <i className="fa-solid fa-circle-check"></i>,
    },
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const itemsStep = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));
  const contentStyle = {
    lineHeight: "auto",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Col>
        <Button onClick={showModalLogin}>Đăng nhập</Button>
      </Col>
      <Col>
        <Button type="primary" onClick={() => setOpenRegister(true)}>
          Đăng ký mới bạn đọc
        </Button>
      </Col>
      <Modal
        title="Đăng nhập"
        open={openLogin}
        onCancel={handleCancelLogin}
        confirmLoading={confirmLoading}
        footer={[]}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Số thẻ:"
            name="card-num"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="link" htmlType="button">
              Quên mật khẩu
            </Button>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* REGISTER MODAL */}

      <Modal
        title="Đăng ký"
        style={{
          top: 20,
        }}
        open={openRegister}
        maskClosable={false}
        destroyOnClose={true}
        onCancel={() => setOpenRegister(false)}
        width={1000}
        footer={null}
      >
        <>
          <Steps current={current} items={itemsStep} />
          <div style={contentStyle}>{steps[current].content}</div>
          <div
            style={{
              marginTop: 24,
              textAlign: "right",
            }}
          >
            {current > 0 && (
              <Button
                style={{
                  margin: "0 8px",
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => {
                  message.success("Processing complete!");
                }}
              >
                Done
              </Button>
            )}
          </div>
        </>
      </Modal>
    </>
  );
};

export default Account;
