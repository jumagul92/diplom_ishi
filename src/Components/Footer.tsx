import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from "../assets/Images/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__box">
          <a href="" className="footer__logo">
            <img className="nav__img" src={logo} alt="" />
          </a>
          <div className="footer__info">
            <div className="footer__left">
              <div className="footer__company">
                <h2 className="footer__title">Company</h2>
                <ul className="footer__list">
                  <li>
                    <NavLink to="/about" className="footer__link">
                      About us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/news" className="footer__link">
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contacts" className="footer__link">
                      Bank account{" "}
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer__company">
                <h2 className="footer__title">Services</h2>
                <ul className="footer__list">
                  <li>
                    <NavLink to="/payment" className="footer__link">
                      Payment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/delivery" className="footer__link">
                      Delivery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/exchangerefund" className="footer__link">
                      Exchange and refund
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__right">
              <h2 className="footer__title">Contact</h2>
              <p className="footer__number">(+99899) 843-08-98</p>
              <p className="footer__address">Tashkent region, Urtachirchik district, Uygur MFY, 24</p>
              <div className="footer__media">
                <FaTelegram color="#0088cc" />
                <FaInstagram color="#cd486b" />
                <FaFacebook color="#316FF6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
