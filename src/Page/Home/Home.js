import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import classNames from "classnames/bind";
import style from "./Home.module.scss";

import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import Api from "../../config/Config";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Home() {
  const [news, setNews] = useState([]);
  const [sales, setSales] = useState([]);
  const [selling, setSelling] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const { data: res } = await axios.get(Api.Products);
      setNews(res.slice(1, 9));
    };
    getNews();
  }, []);

  useEffect(() => {
    const getSales = async () => {
      const { data: res } = await axios.get(Api.Products);
      setSales(res.slice(10, 18));
    };
    getSales();
  }, []);
  useEffect(() => {
    const getSelling = async () => {
      const { data: res } = await axios.get(Api.Products);
      setSelling(res.slice(100, 104));
    };
    getSelling();
  }, []);
  return (
    <div className="home">
      <Hero />
      <div className={cx("wrapper")}>
        <div className={cx("sidebar")}>
          <div className={cx("sidebar-top")}>
            <h3>DANH MỤC SẢN PHẨM</h3>
            <ul className={cx("sidebar-menu")}>
              <li className={cx("menu-list")}>Sandal</li>
              <li className={cx("menu-list")}>Quần Áo</li>
              <li className={cx("menu-list")}>Đồ nội thất</li>
              <li className={cx("menu-list")}>Thiết bị điện tử</li>
              <li className={cx("menu-list")}>Khác</li>
            </ul>
          </div>
          <div className={cx("sidebar-mid")}>
            <h3>SẢN PHẨM BÁN CHẠY</h3>
            {selling.map((item) => (
              <div className={cx("mid-pro")} key={item.id}>
                <img src={item.category.image} alt="" />
                <div className={cx("mid-info")}>
                  <p>{item.title}</p>
                  <div className={cx("price")}>
                    <p>{item.price}$</p>
                    <p>{item.price + Math.floor(Math.random() * 60)}$</p>
                  </div>
                  <Button outline>Mua Hàng</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={cx("content")}>
          <div className={cx("inner")}>
            <h3>SẢN PHẨM MỚI</h3>
            <div className={cx("new")}>
              {news.map((item, i) => (
                <div className={cx("new-item")} key={i}>
                  <Link to={"./product/" + item.id}>
                    <img src={item.category.image} alt="" />
                    <p className={cx("item-title")}>{item.title}</p>
                    <p className={cx("item-price")}>{item.price} $</p>
                    <Button outline>Mua</Button>
                    <Button defalt>
                      <FontAwesomeIcon icon={faEye} className={cx("check")} />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={cx("inner")}>
            <h3>SẢN PHẨM MUA NHIỀU</h3>
            <div className={cx("new")}>
              {sales.map((item, i) => (
                <div className={cx("new-item")} key={i}>
                  <Link to={"./product/" + item.id}>
                    <img src={item.category.image} alt="" />
                    <p className={cx("item-title")}>{item.title}</p>
                    <p className={cx("item-price")}>{item.price} $</p>
                    <Button outline>Mua</Button>
                    <Button defalt>
                      <FontAwesomeIcon icon={faEye} className={cx("check")} />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
