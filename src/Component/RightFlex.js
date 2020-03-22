import React, {Component} from 'react';
import Story from './Story'
import Suggetn from './Suggetn'
import '../Component/Style/ImgBox.css'

class RightFlex extends Component{
    render(){
        return(
            <div className="flex">
               <stories><Story></Story></stories> 
               <suggetn><Suggetn></Suggetn></suggetn>
                
            </div>
        );
    
    }
}

export default RightFlex;