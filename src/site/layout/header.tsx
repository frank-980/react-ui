import React from 'react';
import Icon from "../../components/Icon"
import logo from "../../logo.png"
const Header:React.FC = ()=>{
    return (
        <header id="header">
            <div className="header-row">
                <a id="logoBox">
                    <img className="logo_img" src={logo}/>
                    <span>Sxd Design</span>
                </a>
                <div id="searchBox">
                    <Icon icon="icon-search" style={{paddingRight:"16px"}}/>
                    <input type="text" placeholder="搜索"/>
                </div>
                <div id="otherBox">
                    <div className="version">Version : 0.0.1</div>
                    <div className="git"> </div>
                </div>
            </div>
        </header>
    ) 
}
export default Header