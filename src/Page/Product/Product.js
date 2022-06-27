import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import classNames from "classnames/bind";
import style from "./Product.module.scss";

import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Api from "../../config/Config";

const cx = classNames.bind(style);

function Product() {
  const pageSize = 32;

  const [news, setNews] = useState([]);
  const [selling, setSelling] = useState([]);
  const [paginated, setPaginated] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getNews = async () => {
      const { data: res } = await axios.get(Api.Products);
      setNews(res);
      setPaginated(_(res).slice(0).take(pageSize).value());
    };
    getNews();
  }, []);
  useEffect(() => {
    const getSelling = async () => {
      const { data: res } = await axios.get(Api.Products);
      setSelling(res.slice(100, 104));
    };
    getSelling();
  }, []);

  // Phan trang
  const pageCount = news ? Math.ceil(news.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedProduct = _(news).slice(startIndex).take(pageSize).value();
    setPaginated(paginatedProduct);
  };

  return (
    <div className="products" style={{ marginTop: 110 }}>
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
              {paginated.map((item, i) => (
                <Link to={'./'+item.id} key={i}>
                  <div className={cx("new-item")} >
                    <img src={item.category.image} alt="" />
                    <p className={cx("item-title")}>{item.title}</p>
                    <p className={cx("item-price")}>{item.price} $</p>
                    <Button outline>Mua</Button>
                    <Button defalt>
                      <FontAwesomeIcon icon={faEye} className={cx("check")} />
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul className={cx("pagination")}>
          {pages.map((page, i) => (
            <li
              className={cx(`${page === currentPage ? "active" : ""}`)}
              key={i}
              onClick={() => pagination(page)}
            >
              <p className={cx("page-link")}>{page}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Product;
