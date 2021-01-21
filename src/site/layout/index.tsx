import React,{useState,useRef,useEffect} from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import routeInfo from './hooks/routeInfo'
import useScreenWidth from './hooks/useScreenWidth'
import Header from './header'
import LeftNav from './leftNav'
import Footer from './footer'
import {ISiteProps,ISiteState} from '../interface/site'

enum route {"/404","/button", "/icon", "/divider"=34,"/grid", "/select","/list","/input", Thu, Fri, Sat};

const Site:React.FC<ISiteProps> = (props:ISiteProps)=>{
    const {isShow,changeToAny,children,location,width,setWidth} = props
    /* current router change */
        const Active:number = parseInt(route[location.pathname])
        const currentLocation = location.pathname
    /* screen size change */
        window.onresize=function(){  
            setWidth(window.innerWidth)
        }
        const dynStyle = useScreenWidth(width,[width])

    /* css transition change */
        const isFirst = useRef(true)
        useEffect(()=>{
            if(isFirst.current){
                isFirst.current=false
                return
            }
            changeToAny("changeToTrue")
        },[children])
    /* end */
    return (
        <div className="wrapper">
            <Header/>
            <div className="main container">
                <LeftNav routeActive={currentLocation} changeToAny={changeToAny} width={dynStyle.width}/>
                <div className="contentbar" style={{padding:dynStyle.padding}}>
                    <CSSTransition in={isShow} timeout={1000} classNames="star">

                            {children}

                    </CSSTransition>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state:ISiteState) {
    return {
      isShow: state.routeInfo.isShow,
      width:state.screenWidth.width
    }
  }
function mapDispatchToProps(dispatch:any) {
    return {
        changeToAny: (status:boolean) => {
            dispatch({type:status})
        },
        setWidth:(width:number)=>{
            dispatch({type:"setWidth",payload:{width}})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Site)