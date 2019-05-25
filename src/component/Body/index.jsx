import React from "react";
import VapeImage from "../../views/Vape_images";
import { withStyles } from "@material-ui/core/styles";

const styles = () => {
    return {
        containerVape: {
            display: "flex",
            flexWrap: "wrap",
            padding: "0 100px",
        }
    }
}

const list = [
    {
        id: 1,
        product_name: "abccxyz",
        content: "vape aisdjoaijsdoij"
    },
    {
        id: 2,
        product_name: "bbbbbb",
        content: "vape dqwdqaaa"
    },
    {
        id: 3,
        product_name: "ccccc",
        content: "vapedwqdqwoij"
    },
    {
        id: 4,
        product_name: "dddddd",
        content: "ddddd"
    },
    {
        id: 5,
        product_name: "dddddd",
        content: "ddddd"
    },
    {
        id: 6,
        product_name: "dddddd",
        content: "ddddd"
    },
    {
        id: 7,
        product_name: "dddddd",
        content: "ddddd"
    },
    {
        id: 8,
        product_name: "dddddd",
        content: "ddddd"
    }
    
]

const Body = props => {
    const { classes } = props;
    return (
        <div className={classes.containerVape}>
            {
                list.map(el => (
                    <VapeImage id={el.id} product_name={el.product_name} content={el.content}/>
                ))
            }
        </div>
    )
}

export default withStyles(styles)(Body);