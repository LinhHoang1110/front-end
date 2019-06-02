import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import VapeImage from "../VapeImage";


const styles = () => {
    return {
        containerVape: {
            display: "flex",
            flexWrap: "wrap",
            padding: "0 100px",
        }
    }
}

// const list = [
//     {
//         id: 1,
//         product_name: "abccxyz",
//         content: "vape aisdjoaijsdoij"
//     },
//     {
//         id: 2,
//         product_name: "bbbbbb",
//         content: "vape dqwdqaaa"
//     },
//     {
//         id: 3,
//         product_name: "ccccc",  
//         content: "vapedwqdqwoij"
//     },
//     {
//         id: 4,
//         product_name: "dddddd",
//         content: "ddddd"
//     },
//     {
//         id: 5,
//         product_name: "dddddd",
//         content: "ddddd"
//     },
//     {
//         id: 6,
//         product_name: "dddddd",
//         content: "ddddd"
//     },
//     {
//         id: 7,
//         product_name: "dddddd",
//         content: "ddddd"
//     },
//     {
//         id: 8,
//         product_name: "dddddd",
//         content: "ddddd"
//     }
// ]

class Body extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <h3 style={{textAlign : "center",fontFamily : "Montserrat, sans-serif",marginTop:"5%"}}>Sản phẩm của chúng tôi</h3>
                <div className={classes.containerVape}>

                    {this.props.children}
                </div>
            </div>
           
        )
    }

}




export default withStyles(styles)(Body);