import React, { Component } from 'react';
import './BandImage.css';

class BandImage extends React.Component {
    
    render() { 
        if(this.props.img_src !== undefined) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-sm-auto p-3 text-left align-self-center">
                            <h1>{this.props.band_name}</h1>
                        </div>
                        <div className="col p-3">
                            <img src={this.props.img_src} alt="Band Image" className="img-responsive center-block band_img"/>
                        </div>
                    </div>
                </div>              
            );
        } else return null;
    }
}
 
export default BandImage;