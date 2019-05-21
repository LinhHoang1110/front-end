import React, { Component } from 'react'
import "./image-body.css";

class ImageBody extends Component {
    render() {
        return (
            <div className='image-body'>
                <div className="image-body-text-box">
                  <h3>Title</h3>
                  <span>
                    This is sub title
                  </span>
                </div>
            </div>
        )
    }
}

export default ImageBody