import React, {Component} from 'react';
import ImageBox from './ImageBox';
import Nav from './Nav'
import '../Component/Style/ImgBox.css'
import RightFlex from './RightFlex';
import Pro from './Pro'

class Main extends Component{
    render(){
        return(
            <div>
                <Nav></Nav>
                <ImageBox></ImageBox>
                <Pro></Pro>
                <RightFlex className="flex"></RightFlex>
            </div>
        );
    
    }
}

export default Main;