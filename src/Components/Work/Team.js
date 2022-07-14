import React, { Fragment } from 'react';
import { useToggle } from '../../Resources/util/useToggle'
import './Team.css';
import '../../Containers/Terminal/Terminal.css'

import {ReactComponent as ExternalLink} from "../../Resources/icons/external-link.svg";
import {ReactComponent as Folder} from "../../Resources/icons/134.svg";
import AppData2 from './Img';

const content = (props)=>{
    let result = <ul>
    {props.repos.map((obj,index) =>{
        if(props.getLoad || index < 6)
            return(<li key={`work-element-${index}`}>
                <div className="insideContainer">
                    <div className="logo">

                    </div>
                    
                    <div className="title">{obj.name}</div>

                    <div className="description">{obj.description}</div>

                    < img  src={AppData2[index]} alt="fireSpot" className="folder"/>

                    <footer>{obj.languages}</footer>
                </div>
            </li>)
        else
            return <Fragment key={`work-element-${index}`}></Fragment>
    })}
    </ul>
    if (props.test)
        return <></>
    return result

    const array2 = [1, 2, 3];

    var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = "../../Resources/icons/134.png";
    
    imgArray[1] = new Image();
    imgArray[1].src = "../../Resources/icons/11.png";  
    
    imgArray[2] = new Image();
    imgArray[2].src = "../../Resources/icons/tihapp_rev.png";  

    const map1 = imgArray.map(array2);
}

const Work = (props) =>{
    let currentContent = content(props)
    return(
    <div className = "main">
        <div className="projects">
            <div className="workHeader">
                <h3>Meet the team</h3>
            </div>
            {currentContent}
          
        </div>
    </div>
    );
}

export default Work;
