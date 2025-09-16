import React from "react";

const Event3 = () => {
  return (
    <div className="events-details-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="events-details-left-content pr-20">
              <div className="meetings pb-0 mb-0">
                <h2>BONAFIDE REQUEST FORM</h2>
                <div className="events-image">
                  <img src="events3.jpeg" width="80%" alt="Bonafide Request Form" />
                </div>
                <p><i className="ri-calendar-2-line"></i> 2024-11-05</p>
                <p className="black-text">APPLICATION FORM FOR BONAFIDE CERTIFICATE</p>
              </div>
              <div className="brought pb-0 mb-0">
                <a target="_blank" href="events3.jpeg" className="default-btn btn">
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

export default Event3;