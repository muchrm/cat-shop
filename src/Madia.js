import React, { Component } from 'react';
import './media.css'
import catPreload from './preload.png';
class Media extends Component {
    constructor(props) {
        super();
        this.CatImage = null;
    }

    componentDidMount() {

        const CatImage = new Image();
        CatImage.src = this.props.image;
        CatImage.onload = () => {
            this.CatImage.setAttribute(
                'style',
                `background-image: url('${this.props.image}')`
            );
            this.CatImage.classList.add('cat-image-fade-in');
        }

    };

    render() {
        return (
            <div className="cat-image">
                <div
                    className="cat-image-loaded"
                    ref={imageLoadedElem => this.CatImage = imageLoadedElem}>
                </div>
                <div
                    className="cat-image-preload"
                    style={{ backgroundImage: `url(${catPreload})` }}>
                </div>

            </div>
        )
    }
}

export default Media;