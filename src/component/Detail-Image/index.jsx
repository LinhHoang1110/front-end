import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles'

const styles = () => {
    return {
        detailItem: {
            display: "flex"
        },
        addCartContainer: {
            display: "flex",
            paddingLeft: "10px"
        }
    }
}

class Detail_Vape extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }

    }

    plus() {
        this.setState({ score: this.state.score += 1 })
    }

    minus() {
        this.setState({ score: this.state.score -= 1 })
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.detailItem}>
                <Cell col={6}>

                    <div className='detail-img'>
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
                        <button className='btn-plus' onClick={this.plus.bind(this)}>+</button>
                        <p className='score'>{this.state.score}</p>
                        <button className='btn-minus' onClick={this.minus.bind(this)}>-</button>

                        <button className='add-item'>THÊM VÀO GIỎ</button>
                    </div>
                </Cell>

            </div>
        )
    }
}

export default withStyles(styles)(Detail_Vape)