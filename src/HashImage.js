import React, { Component } from 'react';
import './HashImage.css'

class HashImage extends Component {
    sumHash(start){
        var sum = 0;
        this.props.hash.substring(start, 6).toUpperCase().split('').forEach((alphabet)=>{
            sum += alphabet.charCodeAt(0);
        });
        return sum
    }
    render() {
        return (
            <div className="hash-image">
                <div
                    className="hash-image-accessories"
                    style={{ backgroundImage: `url(${require(`./image/accessories/${this.sumHash(6) %16}.png`)})` }}>
                </div>
                <div
                    className="hash-image-body"
                    style={{ backgroundImage: `url(${require(`./image/body/${this.sumHash(12)%15}.png`)})` }}>
                </div>
                <div
                    className="hash-image-top"
                    style={{ backgroundImage: `url(${require(`./image/eyes/${this.sumHash(18)%15}.png`)})` }}>
                </div>
                <div
                    className="hash-image-fur"
                    style={{ backgroundImage: `url(${require(`./image/fur/${this.sumHash(24)%10}.png`)})` }}>
                </div>
                <div
                    className="hash-image-top"
                    style={{ backgroundImage: `url(${require(`./image/mouth/${this.sumHash(32)%5}.png`)})` }}>
                </div>

            </div>
        )
    }
}

export default HashImage;