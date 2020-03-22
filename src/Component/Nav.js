import React, {Component} from 'react';
import image1 from './Style/search.jpg'
import image from './Style/inslogo.png'
import image2 from './Style/nav.PNG'

class Nav extends Component{
    render(){
        return(
            <div className="nav">
                
                <img src={image} className="logo" alt='logo'/>
                <img src={image1} className="search" alt='logo'/>
                <img src={image2} className="navlogo" alt='logo'/>
                
                
            </div>
        );
    
    }
}

export default Nav;