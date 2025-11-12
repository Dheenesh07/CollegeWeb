import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="header-container1">
        <div className="header-left">
          <p>
            <i className="fas fa-phone"></i>
            <span>&nbsp;&nbsp;</span>
            04329-2917278<span>&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;</span>
            <i className="fas fa-envelope"></i>
            <span>&nbsp;&nbsp;</span>
            ucea@auucea.edu.in
          </p>
        </div>
        <div className="header-right">
          <div>
            <ul>
              <li>
                <a href="">NIRF</a>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>|
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </li>
              <li>
                <Link to="/events">
                <a href="">Events</a></Link>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>|
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </li>
              <li>
                <Link to="/AICTE">
                <a href="">AICTE</a></Link>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>|
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </li>
              <li>
                <a href="">Alumni</a>
                <span>&nbsp;&nbsp;</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="logo">
        <img src="logo.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
