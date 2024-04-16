import { PiUserLight } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import logo from "../assets/Images/logo.png";
import { CiSearch } from "react-icons/ci";
import Catalog from "./Catalog";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IState, changeNavSearchValue } from "../Store/category";
import NavBar from "./NavBar";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";




function Nav() {

  const navSearch = useSelector((state:{category:IState}) => state.category.navSearchValue);
  const dispatch = useDispatch();
  const basket = useSelector((state:{category:IState})=>state.category.basket)
  const [active, setActive] = useState(false);

  return (
    <nav className="nav">
      <div className={`nav__open ${active ? 'active' : ''} `}>
        <div className="nav__open-box">
        <h2 className="nav__open-title">Catalogs</h2>
<IoMdClose className="nav__open-close" onClick={()=>setActive(false)}/>
        </div>
        
        <NavBar getProductCategory ={()=>{}}/>
      </div>
      <div className="container">
        <div className="nav__info">
          <button className="nav__bar" onClick={()=>setActive(true)}>
            <FiMenu />
          </button>
          

          <Link to='/'  className="nav__logo">
            <img className="nav__img" src={logo} alt="" />
          </Link>
          <div className="nav__catalog">
            <Catalog />
          </div>
          <form action="" className="nav__form">
            <input
              type="text"
              className="nav__input"
              placeholder="Search"
              value={navSearch}
              onChange={(e) => dispatch(changeNavSearchValue(e.target.value))}
            />
            <button className="nav__btn">
              <CiSearch color="#fff" className="nav__search" />
            </button>
          </form>

          <div className="nav__controls">
            <PiUserLight className="nav__user" />
            <div className="nav__heart">
              <IoIosHeartEmpty />
              <div className="nav__add">0</div>
            </div>
            <Link to="/basket" className="nav__cart">
              <PiShoppingCartLight color="black" />
              <div className="nav__cart-add">{basket.length}</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
