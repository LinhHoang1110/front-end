import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = () => {
  return {
    imageBody: {
      width: "100%",
      height: "100vh",
      background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("https://images.unsplash.com/photo-1512659606196-523f5b283566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    imageBodyTextBox: {
      color: "white",
      fontWeight: "bold",
      fontSize: "16px",
      textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      width: "374px",
      height: "84px",
      opacity: "0.6",
      fontFamily: "Consolas"
    }
  }
}

class ImageBody extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.imageBody}>
        <div className={classes.imageBodyTextBox}>
          <span>
            Vape hay vaping theo nghĩa chính xác là một từ dùng để diễn tả hành động hít hơi nước có hương vị và tác dụng kích thích
                  </span>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ImageBody)