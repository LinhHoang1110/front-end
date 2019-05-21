import React from "react";

const Footer = props => {
    return (
        <div className="footer">
            <div className='footer1'>
                <p>SHOPVAPE</p>
                <p>Store1: Số 22 Thành Công, Ba Đình, Hà Nội</p>
                <p>Store2: Tòa 29T1, Hoàng Đạo Thúy, Cầu Giấy, Hà Nội</p>
            </div>

            <div className='footer2'>
                <p>MUA HÀNG</p>
                <p>Vape</p>
                <p>Tinh dầu Vape</p>
                <p>Vape pop system</p>
                <p>Tank Vape</p>
                <p>Phụ kiện</p>
            </div>

            <div className='footer3'>
                <p>DỊCH VỤ KHÁCH HÀNG</p>
                <p>Tài khoản</p>
                <p>Chính sách đổi trả</p>
                <p>Chính sách vận chuyển</p>
                <p>Phương thức thanh toán</p>
            </div>

            <div className='footer4'>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>
    )
}

export default Footer;