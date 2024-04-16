import { NavLink } from "react-router-dom";

function Top() {
  return (
    <div className="top">
      <div className="container">
        <div className="top__info">
          <div className="top__left">
            <ul className="top__list">
              <li>
                <NavLink to="/payment" className="top__link">
                  Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/delivery" className="top__link">
                  Delivery
                </NavLink>
              </li>
              <li>
                <NavLink to="/exchangerefund" className="top__link">
                  Exchange and refund
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="top__right">
            <p className="top__delivery">Delivery from 8:00 to 23:00</p>
            <p className="top__number">(+99899) 843-08-98</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
