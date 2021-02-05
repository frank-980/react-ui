import React,{useState} from 'react';
import { connect } from 'react-redux';
import useScreenWidth from './hooks/useScreenWidth'
import Header from './header'
import SiderBar from './SiderBar'
import Footer from './footer'
import {ILayoutProps} from '../interface/site'
const Layout:React.FC<ILayoutProps> = (props:ILayoutProps)=>{
    const { children } = props
    const showSiderBar = useScreenWidth()
    const hide = {
        display:"none",
        padding:"50px 0 50px 0"
    }
    const show = {
        display:"block",
        padding:"50px 0 50px 20%"
    }
    const dynStyle = showSiderBar?show:hide
    return (
        <div className="wrapper">
            <Header/>
            <div className="main container">
                <SiderBar style={{display:dynStyle.display}}/>
                <div className="contentbar" style={{padding:dynStyle.padding}}>
                    {children}
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default Layout