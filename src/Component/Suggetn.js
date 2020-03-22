import React, {Component} from 'react';
import image1 from './Style/pro6.jpg'
import image2 from './Style/pro5.jpg'
import image3 from './Style/pro7.jpg'

class Suggetn extends Component{
    render(){
        return(
            <div>
                <div>Stories</div>
                <div>
                <img src={image1} className="pro"  alt='pro1'/>
                <img src={image2} className="pro" alt='pro2'/>
                <img src={image3} className="pro" alt='pro3'/>
                </div>  
            </div>
        );
    
    }
}

export default Suggetn;