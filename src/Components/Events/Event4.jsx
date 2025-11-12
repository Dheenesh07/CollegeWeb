import React from "react";

const Event4 = () => {
  return (
    <div className="events-details-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="events-details-left-content pr-20">
              <div className="meetings pb-0 mb-0">
                <h2>AICTE Mandatory Disclosure</h2>
                <div className="events-image">
                  <img src="events4.png" width="80%" alt="AICTE Mandatory Disclosure" />
                </div>
                <p><i className="ri-calendar-2-line"></i> 2025-01-17</p>
                <p className="black-text"></p>
              </div>
              <div className="brought pb-0 mb-0">
                <a target="_blank" href="events4.png" className="default-btn btn">
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
                {/* Add gallery images here when available */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event4;