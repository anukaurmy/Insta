import React, {Component} from 'react';
import images from './Style/img1.jpg'

class Img extends Component{
    render(){
        return(
        <div>
            <div>
                <a href="Style/img1.jpg" >
                <img src={images} className="img" alt='weekly'/>
                </a>
            </div>
        </div>
        );
    }
}
export default Img;