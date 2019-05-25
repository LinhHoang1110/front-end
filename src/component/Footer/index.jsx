import React from "react";
import { withStyles } from '@material-ui/core/styles'

const styles = () => {
    return {
        footer: {
            padding: "40px 70px",
            fontFamily: "Consolas",
            display: "flex",
            minHeight: "300px",
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "60px",
            backgroundColor: "gray",
            "& > div ": {
                maxWidth: "calc(100% / 4)",
                flexBasis: "calc(100% / 4)",
            }
        },
        store1: {
            width: "75%"
        },
        store2: {
            width: "75%"
        },
        footer4: {
            display: "flex",
            paddingLeft: "10px",
            " & > i ": {
                margin: "8px 16px",
                fontSize: "30px"
            }
        }
    }
}

const Footer = props => {
    const { classes } = props
    return (
        <div className={classes.footer}>
            <div className='footer1'>
                <p>SHOPVAPE</p>
                <div className={classes.store1}>
                    <p>Store1: Số 22 Thành Công, Ba Đình, Hà Nội</p>
                </div>
                <div className={classes.store2}>
                    <p>Store2: Tòa 29T1, Hoàng Đạo Thúy, Cầu Giấy, Hà Nội</p>
                </div>
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

            <div className={classes.footer4}>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>
    )
}

export default withStyles(styles)(Footer);