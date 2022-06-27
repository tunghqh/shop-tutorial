import React from "react";
import classNames from "classnames/bind";
import style from "./Hero.module.scss";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const cx = classNames.bind(style);

function Hero() {
  SwiperCore.use([Autoplay]);
  return (
    <div className={cx("hero")}>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <img
            src="https://thietkehaithanh.com/wp-content/uploads/2013/08/thietkehaithanh-banner1.jpg"
            alt=""
            className={cx('img')}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pkmacbook.com/wp-content/uploads/2021/07/banner-thoi-trang-hien-dai-dep-nhat_113857069.jpg"
            alt=""
            className={cx('img')}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://thietkehaithanh.com/wp-content/uploads/2013/08/thietkehaithanh-banner-thoi-trang-2.jpg"
            alt=""
            className={cx('img')}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
