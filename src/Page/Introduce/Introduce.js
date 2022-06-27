import React from "react";

import classNames from "classnames/bind";
import style from "./Introduce.module.scss";

const cx = classNames.bind(style);

function Introduce() {
  return (
    <div className={cx("introduce")}>
      <div className={cx("intro")}>
        <span>Trang Chủ</span>
        <span>/</span>
        <span>Giới Thiệu</span>
      </div>
      <h2 className={cx("header")}>GIỚI THIỆU</h2>
      <div className={cx("bot")}>
        <h3>
          BRESHKA -SHOES WEBSITE MUA SẮM THỜI TRANG HÀNG HIỆU TRỰC TUYẾN HÀNG
          ĐẦU VIỆT NAM
        </h3>
        <h5>
          BẠN ĐANG TÌM KIẾM NHỮNG MẪU THỜI TRANG, QUẦN ÁO, GIÀY DÉP VÀ PHỤ KIỆN
          MỚI NHẤT TRÊN MẠNG? HÃY MUA SẮM NGAY HÔM NAY TẠI BRESHKA -SHOES!
        </h5>
        <span>
          Breshka-Shoes sẽ mang lại cho khách hàng những trải nghiệm mua sắm
          thời trang hàng hiệu trực tuyến thú vị từ các thương hiệu thời trang
          quốc tế và trong nước, cam kết chất lượng phục vụ hàng đầu cùng với
          những bộ sưu tập quần áo nam nữ khổng lồ từ giày dép, trang phục, phụ
          kiện đến mỹ phẩm cho cả phụ nữ và nam giới với những xu hướng thời
          trang mới nhất. Bạn có thể tìm thấy những bộ trang phục mình muốn từ
          những bộ đồ ở nhà thật thoải mái hay tự tin trong những bộ trang phục
          công sở phù hợp. Những trải nghiệm mới chỉ có ở trang mua sắm hàng
          hiệu trực tuyến Breshka-Shoes.
        </span>
        <h3>BRESHKA -SHOES MÓN QUÀ TẶNG NGƯỜI THÂN THẬT Ý NGHĨA!</h3>
        <span>
          Breshka-Shoes sẽ gợi ý cho bạn những món quà thật ý nghĩa để tặng
          người thân, bạn bè. Chúng tôi sẽ làm bạn hài lòng với sự lựa chọn của
          mình bằng giá tốt nhất và chất lượng dịch vụ hoàn hảo của
          Breshka-Shoes.
        </span>
        <h3>
          MUA SẮM Ở BRESHKA -SHOES PHÙ HỢP VỚI TÚI TIỀN TỪ DOANH NHÂN, NHÂN VIÊN
          VĂN PHÒNG ĐẾN CÁC BẠN TRẺ
        </h3>
        <span>
          Breshka-Shoes luôn cập nhật những xu hướng thời trang phong cách nhất
          từ những hãng thời trang cao cấp như Lime Orange hoặc Alachic, những
          đôi giày nổi tiếng mà giá cả phải chăng như Me Girl hoặc Bandolini,
          Juno, JShoes cho tới các thương hiệu thời trang tầm trung như Lotus
          Shoes và Mollet, Lithe S, Om Shoes tất cả đều có ở Breshka-Shoes. Đặc
          biệt, Breshka-Shoes còn có nhiều đợt khuyến mãi, giảm giá đặc biệt với
          giá tốt nhất. Thời trang hàng hiệu chất lượng cao, phù hợp túi tiền -
          chỉ có ở Breshka-Shoes!
        </span>
        <h3>
          PHONG CÁCH MUA SẮM HIỆN ĐẠI - THUẬN TIỆN, THANH TOÁN AN TOÀN - DỄ DÀNG
        </h3>
        <span>
          Bạn có thể mua sắm thoải mái trên Breshka-Shoes mà không có bất kỳ lo
          lắng nào: trả hàng trong vòng 30 ngày kể từ ngày nhận hàng. Nếu bạn có
          bất kì câu hỏi nào về các sản phẩm của chúng tôi từ quần áo nam, trang
          phục nữ, mỹ phẩm nam hay trang sức hãy gọi ngay tới bộ phận chăm sóc
          khách hàng.
        </span>
      </div>
    </div>
  );
}

export default Introduce;
