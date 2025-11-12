import React from "react";

const Event1 = () => {
  return (
    <div className="events-details-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="events-details-left-content pr-20">
              <div className="meetings pb-0 mb-0">
                <h2>DISTRICT LEVEL RED RUN MARATHON</h2>
                <div className="events-image">
                  <img src="events1.jpg" width="80%" alt="Red Run Marathon" />
                </div>
                <p><i className="ri-calendar-2-line"></i> 2024-01-14</p>
                <p className="black-text">DISTRICT LEVEL RED RUN MARATHON</p>
              </div>
              <div className="brought pb-0 mb-0">
                <a target="_blank" href="events1.jpg" className="default-btn btn">
                  View Details<i className="flaticon-next"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="program-area pt-10 pb-30">
            <div className="container">
              <div className="section-title">
                <br />
                <h2>Photo Gallery</h2>
              </div>
              <div className="GRID-41" id="GRID-41">
                <div className="single-program-card">
                  <div className="program-image">
                    <a href="/">
                      <img src="events1.jpg" alt="Gallery 1" height="250px" className="res_img_tm" />
                    </a>
                  </div>
                </div>
                <div className="single-program-card">
                  <div className="program-image">
                    <a href="/">
                      <img src="events13.jpeg" alt="Gallery 2" height="250px" className="res_img_tm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event1;