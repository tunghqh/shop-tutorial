import React from "react";

import classNames from "classnames/bind";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("left")}>
        <img
          src="https://bizweb.dktcdn.net/100/091/133/themes/848035/assets/logo-footer.png?1650445423330"
          alt=""
        />
        <p>Tầng 6,tòa nhà Ladeco,266 Đội Cấn,Hà Nội,Việt Nam, Hà Nội, Vietnam</p>
        <p>Phone: 012454512</p>
        <p>Email: tung@gmail.com</p>
      </div>
      <div className={cx('right')}>
            <h4>VỀ CHÚNG TÔI</h4>
          <ul className={cx('footer-menu')}>
            <li><Link to='/'>Trang chủ</Link></li>
            <li><Link to='/'>Giới thiệu</Link></li>
            <li><Link to='/'>Sản phẩm</Link></li>
            <li><Link to='/'>Tin tức</Link></li>
            <li><Link to='/'>Liên hệ</Link></li>
          </ul>
      </div>
      <div className={cx('right')}>
            <h4>VỀ CHÚNG TÔI</h4>
          <ul className={cx('footer-menu')}>
            <li><Link to='/'>Trang chủ</Link></li>
            <li><Link to='/'>Giới thiệu</Link></li>
            <li><Link to='/'>Sản phẩm</Link></li>
            <li><Link to='/'>Tin tức</Link></li>
            <li><Link to='/'>Liên hệ</Link></li>
          </ul>
      </div>
      <div className={cx('right')}>
            <h4>VỀ CHÚNG TÔI</h4>
          <ul className={cx('footer-menu')}>
            <li><Link to='/'>Trang chủ</Link></li>
            <li><Link to='/'>Giới thiệu</Link></li>
            <li><Link to='/'>Sản phẩm</Link></li>
            <li><Link to='/'>Tin tức</Link></li>
            <li><Link to='/'>Liên hệ</Link></li>
          </ul>
      </div>
    </div>
  );
}

export default Footer;
