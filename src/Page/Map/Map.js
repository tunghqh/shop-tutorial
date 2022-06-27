/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import classNames from "classnames/bind";
import style from "./Map.module.scss";

const cx= classNames.bind(style)
function Map() {
  return (
    <div className={cx('map')}>
        <div className={cx("title")}>
            <span>Trang Chủ</span>
            <span>/</span>
            <span>Bản đồ</span>
        </div>
      <iframe className={cx('wraper')}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.641108905997!2d108.21987141468368!3d16.032187488903826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ee598df9c5%3A0xaadb53409be7c909!2sDanang%20Architecture%20University!5e0!3m2!1sen!2s!4v1656308258561!5m2!1sen!2s"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
