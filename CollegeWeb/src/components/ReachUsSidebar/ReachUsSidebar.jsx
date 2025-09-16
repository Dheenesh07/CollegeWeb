import { Link } from "react-router-dom";
import "./ReachUsSidebar.css";

const ReachUsModal = () => {

  return (
    <>
      <div className="sidebar-overlay" >
        <div className="sidebar-container" onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}

          <Link to="/">
            <span className="close-btn" >
              <i className="fas fa-times"></i>
            </span>
          </Link>
          {/* Contact Info */}
          <div className="contact-info1">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:04329-2917278">04329-2917278</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:ucea@auucea.edu.in">ucea@auucea.edu.in</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                Vilangudi , Trichy - Chidambaram NH81 , Ariyalur - 621 731.
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <ul className="social-icons">
            <li>
              <a href="https://facebook.com" target="_blank">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>

          {/* Google Map */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7829.538198319834!2d79.199515!3d11.130567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baad81dd8eb603d%3A0x9d34563b95e3e873!2sUniversity%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1702710821841!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="University College of Engineering Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReachUsModal;
