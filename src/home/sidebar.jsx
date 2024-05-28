import React from "react";
import { Carousel } from "antd";
import "../index.css";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Siderbars = () => (
  <>
    <Carousel arrows infinite={true} autoplay style={{ marginTop: "5px" }}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    <div style={{ maxHeight:'400px', overflowY: 'scroll',overflowAnchor: 'none' }}>
      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Activity Image" />
        <div className="card-content">
          This is the description of the activity. It provides details about
          what the activity entails and any other relevant information.
        </div>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Activity Image" />
        <div className="card-content">
          This is the description of the activity. It provides details about
          what the activity entails and any other relevant information.
        </div>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Activity Image" />
        <div className="card-content">
          This is the description of the activity. It provides details about
          what the activity entails and any other relevant information.
        </div>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Activity Image" />
        <div className="card-content">
          This is the description of the activity. It provides details about
          what the activity entails and any other relevant information.
        </div>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Activity Image" />
        <div className="card-content">
          This is the description of the activity. It provides details about
          what the activity entails and any other relevant information.
        </div>
      </div>
    </div>
  </>
);
export default Siderbars;
