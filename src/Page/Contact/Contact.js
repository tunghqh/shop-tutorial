import React from "react";

import classNames from "classnames/bind";
import style from "./Contact.module.scss";

import Button from "../../components/Button";

const cx = classNames.bind(style);
function Contact() {
  return (
    <div className={cx("contact")}>
      <div className={cx('left')}>
          <div className={cx("title")}>
            <span>Trang Chủ</span>
            <span>/</span>
            <span>Liên Hệ</span>
          </div>
          <form className={cx("form")}>
            <div className={cx("info")}>
              <div className={cx("item")}>
                <label>Họ và tên</label>
                <input />
              </div>
              <div className={cx("item")}>
                <label>Email</label>
                <input type="Email" />
              </div>
            </div>
            <div className={cx("item")}>
              <label>Nội dung</label>
              <input />
            </div>
          </form>
          <Button primary>Gửi Tin Nhắn</Button>
      </div>
      <div className={cx('right')}>
        <img src='https://bizweb.dktcdn.net/100/091/133/themes/848035/assets/logo.png?1650445423330' alt="" />
      </div>
    </div>
  );
}

export default Contact;
