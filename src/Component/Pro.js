import React, {Component} from 'react';

import image from './/Style/pro.jpg'

class Pro extends Component{
    render(){
        return(
            <div>
            <div className="name">anukaurmy</div>
            
                <div className="profile"><img src={image} className="pro"  alt='pro'/></div>
            </div>
        );
    
    }
}

export default Pro;