import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../config/Config";
import Button from "../../components/Button"

import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import './Detail.scss';


function Detail() {
  SwiperCore.use([Autoplay]);

  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const getDetail = async () => {
      const { data: res } = await axios.get(Api.Products + "/" + id);
      setDetail(res);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [id]);
  const [currentColor, setCurrentColor] = useState([0]);
  const imgRef = useRef();
  useCallback(() => {}, []);
  const handleTab = (index) => {
    setCurrentColor([index]);
    const images = imgRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active","img");
    }
    images[index].className = "active";
  };

  return (
    <div className="detail">
      {detail && (
        <div className="content">
          <div className="title">
            <span>Chi tiết sản phẩm</span>
            <span>/</span>
            <span>{detail.title}</span>
          </div>
          <div className="inner">
            <div className="left">
              {/* <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
              >
                {detail.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img src={image} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper> */}
              <img src={detail.images[currentColor]} alt="" />
            </div>
            <div className="right">
              <div className="inner">
                <p className="name">{detail.title}</p>
                <div className="name-wrap">
                  <span className="trademark">
                    Thương hiệu: {detail.category.name}
                  </span>
                  <span className="tinhtrang">Tình Trạng: Còn Hàng</span>
                </div>
              </div>
              <div className="price">
                <span>{detail.price}$</span>
                <span>{detail.price + 24}$</span>
              </div>
              <div className="info">
                <span>{detail.description}</span>
              </div>
              <div className="color" ref={imgRef}>
                {detail.images.map((image, index) => (
                  <img
                    src={image}
                    alt=""
                    key={index}
                    onClick={() => handleTab(index)}
                    className="img"
                    style={{ width: 100,marginRight:20 }}
                  />
                ))}
              </div>
              <div className="right-bot">
                <div className="soluong">
                  <span>Số lượng:</span>
                  <input type="number" placeholder="0"/>
                </div>
                <div className="adds">
                  <Button primary onClick={()=> alert(`Thành Công Thêm "${detail.title}" vào giỏ hàng`)}>Thêm vào giỏ hàng</Button>
                </div>
                <div className="call">Gọi <span>1900 6750</span> để được trợ giúp</div>
              </div>
              <div className="tags">Tags: {detail.category.name}</div>    
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
