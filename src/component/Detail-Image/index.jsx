import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles'
import CommentBox from '../../views/UserComment';

const styles = () => {
    return {
        detailItem: {
            display: "flex"
        },
        addCartContainer: {
            display: "flex",
            paddingRight: "10px",
        },
        detailInfor: {
            margin: "0"
        },
        btnPlus: {
            margin: "0 10px 0 0",
            width: "39.11px",
            height: "54px"
        },
        number: {
            margin: "15px 10px 0 12px",
            textAlign: "center",
            fontSize: "24px"
        },
        btnMinus: {
            margin: "0 10px",
            width: "39.11px",
        },
        addItem: {
            margin: "0 10px",
        },
        detailImg: {
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignContent: "center"
        }
    }
}

class Detail_Vape extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }

    }

    plus() {
        this.setState({ number: this.state.number += 1 })
    }

    minus() {
        this.setState({ number: this.state.number -= 1 })
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.detailItem}>
                    <Cell col={6}>

                        <div className={classes.detailImg}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUh2l5H-5gargJqvv9TvaUg77a0HlRIzQeyanDDu3toWw2fNZG_A" />
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <div className='detail-infor'>
                            <p>SMOK NOVO Vape Pod Starter Kit</p>
                            <p>100.000.000đ</p>
                            <ul>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis labore incidunt error veritatis. Nemo sapiente impedit tempore distinctio eius cumque assumenda, molestias non et fugiat inventore esse maiores consequuntur!</li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis labore incidunt error veritatis. Nemo sapiente impedit tempore distinctio eius cumque assumenda, molestias non et fugiat inventore esse maiores consequuntur!</li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis labore incidunt error veritatis. Nemo sapiente impedit tempore distinctio eius cumque assumenda, molestias non et fugiat inventore esse maiores consequuntur!</li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis labore incidunt error veritatis. Nemo sapiente impedit tempore distinctio eius cumque assumenda, molestias non et fugiat inventore esse maiores consequuntur!</li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis labore incidunt error veritatis. Nemo sapiente impedit tempore distinctio eius cumque assumenda, molestias non et fugiat inventore esse maiores consequuntur!</li>
                            </ul>
                        </div>
                        <div className={classes.addCartContainer}>
                            <button className={classes.btnPlus} onClick={this.plus.bind(this)}>+</button>
                            <p className={classes.number}>{this.state.number}</p>
                            <button className={classes.btnMinus} onClick={this.minus.bind(this)}>-</button>
                            <button className={classes.addItem}>THÊM VÀO GIỎ</button>
                        </div>
                    </Cell>
                </div>

                <hr style={{ size: "30px" }}></hr>

                <div>
                    <strong>ĐÁNH GIÁ CỦA KHÁNH HÀNG</strong>
                </div>

                {/* <CommentBox /> */}
            </div>
        )
    }
}

export default withStyles(styles)(Detail_Vape)