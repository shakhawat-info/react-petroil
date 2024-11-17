import React from "react";

const Service = () => {
  return (
    <section id="service">
      <div class="main_service">
        <div class="service_title">
            <div className="txt">
          <h2>Our Services</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

            </div>
        </div>
        <div class="service_item2">
          <img src="photos/Services1.png" alt="Services1" />
          <h3>Modern natural oil and gas refineries.</h3>
          <div class="service_btn">
            <a href="#">learn more</a>
          </div>
        </div>
        <div class="service_item2">
          <img src="photos/Services2.png" alt="Services2" />
          <h3>Supply of national industries.</h3>
          <div class="service_btn">
            <a href="#">learn more</a>
          </div>
        </div>
        <div class="service_item2">
          <img src="photos/Services3.png" alt="Services3" />
          <h3>National fuel distribution and supply.</h3>
          <div class="service_btn">
            <a href="#">learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
