import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCartArrowDown,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
import Search from "../Search/Search";
import "./Header.scss";

const data = [
  {
    title: "Trang Chủ",
    path: "/",
  },
  {
    title: "Giới Thiệu",
    path: "/introduce",
  },
  {
    title: "Sản Phẩm",
    path: "/product",
  },
  {
    title: "Bản Đồ",
    path: "/map",
  },
  {
    title: "Liên Hệ",
    path: "/contact",
  },
];

function Header() {
  const { pathname } = useLocation();

  const active = data.findIndex((e) => e.path === pathname);

  const [navActive, setNavActive] = useState("menu");

  const navToggle = () => {
    navActive === "menu"
      ? setNavActive("menu nav_active")
      : setNavActive("menu");
  };

  return (
    <div className="header">
      <div className="header-top">
        <img
          src="https://bizweb.dktcdn.net/100/091/133/themes/848035/assets/logo.png?1650445423330"
          alt=""
          className="logo"
        />
        <div className="top-right">
          <div className="icon">
            <FontAwesomeIcon icon={faPhone} />
            <span>190021215</span>
          </div>
          <div className="icon">
            <Search />
          </div>
          <Button primary>
            <FontAwesomeIcon icon={faUser} />
            <span>Đăng Nhập</span>
          </Button>
          <Button outline>
            <FontAwesomeIcon icon={faCartArrowDown} />
            <span>Giỏ Hàng</span>
          </Button>
        </div>
      </div>
      <div className="navbar">
        <FontAwesomeIcon icon={faBars} className="icon-menu" onClick={navToggle} />
        <ul className={navActive}>
          {data.map((item, i) => (
            <li key={i} className={i === active ? "active" : ""}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
