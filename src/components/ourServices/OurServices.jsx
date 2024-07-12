import React from "react";
import "./OurServicesStyles.scss";
import Shipping from "../../assets/shipping.png";
import Refund from "../../assets/refund.png";
import Support from "../../assets/support.png";

const OurServices = () => {
  return (
    <>
      <div className="ourServices">
        <div className="container">
          <div className="ourServices__content">
            <div className="ourServices__box">
              <img src={Shipping} alt="Free Shipping" />
              <h3>Free Shipping</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="ourServices__box">
              <img src={Refund} alt="Free Shipping" />
              <h3>100% REFUND</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="ourServices__box">
              <img src={Support} alt="Free Shipping" />
              <h3>SUPPORT 24/7</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
