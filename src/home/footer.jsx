import React from "react";
import { Divider, Row, Col } from "antd";
const Footer = () => {
  return (
    <>
      <Row align="middle" justify="start" className="footer-container">
      <Col span={8}>
        <div>
          THƯ VIỆN HÀ NỘI <br /> Địa chỉ: Số 47 Bà Triệu, Hoàn Kiếm, Hà Nội, Việt Nam
        </div>
      </Col>
      <Divider type="vertical" />
      <Col span={15}>
        <div>
          Theo dõi chúng tôi để cập nhật những tin tức mới nhất
          &nbsp;
          <i className="fa-brands fa-facebook"></i>
          &nbsp;&nbsp;
          <i className="fa-brands fa-youtube"></i>
          &nbsp;&nbsp;
          <i className="fa-brands fa-tiktok"></i>
        </div>
      </Col>
    </Row>
    </>
  );
};

export default Footer;
