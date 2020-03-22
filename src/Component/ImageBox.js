import React, {Component} from 'react';
import Img from './Img'

import image from './Style/pro.jpg'
import image1 from './Style/optn.png'



class ImageBox extends Component{
    render(){
        return(
            <div className="imgbox">
                
                <div className="imgtopproname">anukaurmy</div>
            
            <div ><img src={image} className="imgtoppro"   alt='pro'/></div>
            <div ><img src={image1} className="optn"   alt='pro'/></div>
                    <Img></Img>
                
               
            </div>
        );
    
    }
}

export default ImageBox;