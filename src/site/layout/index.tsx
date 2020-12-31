import React from 'react';
import Header from './header'
import LeftNav from './leftNav'
import Footer from './footer'
interface ISite{
    children:any
}
const Site:React.FC<ISite> = (props)=>{
    return (
        <div className="wrapper">
            <Header/>
            <div className="main container">
                <LeftNav/>
                <div className="contentbar">
                    {props.children}
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default Site