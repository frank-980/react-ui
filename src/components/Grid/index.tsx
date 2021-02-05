import React,{useEffect, useState} from 'react';
import {initData,getGutter,getResponsiveGrid} from './hook'
import classNames from 'classnames';
interface IRow{
    gutter?:any;
    align?:'top' | 'middle' | 'bottom';
    justify?:'start' | 'end' | 'center' | 'space-around' | 'space-between';
    wrap?:boolean;
    children:any;
    style?:object;
}
interface ICol{
    span?:number;
    order?:number;
    flex?:string | number;
    offset?:number;
    style?:object;
    xs?:number|object;
    sm?:number|object;
    md?:number|object;
    lg?:number|object;
    xl?:number|object;
    xxl?:number|object;
}

const Row:React.FC<IRow> = (props)=>{
    const { gutter, justify="start", align="top", style={} } = props
    const [offsetWidth,setOffetWidth] = useState(document.body.offsetWidth)
    const [gridData,setGridData] = useState(initData(props.children,offsetWidth,gutter))
    const fn = ()=>{
        setOffetWidth(document.body.offsetWidth)
        removeListener()
    }
    const addListener = ()=>{
        window.addEventListener("resize",fn)
    }
    const removeListener = ()=>{
        window.removeEventListener("resize",fn);
    }
    useEffect(()=>{
        addListener()
        setGridData(gridData.map((item:any)=>{
            const {xs, sm, md, lg, xl,xxl}=item.responsive
            const res = getResponsiveGrid(offsetWidth,item.responsive) || { span:item.span,offset:item.offset,order:item.order }
            if(xs || sm || md || lg || xl || xxl){
                return {
                    ...item,
                    span:res.span,
                    offset:res.offset,
                }
            }
            if(Object.prototype.toString.call(gutter) === '[object Object]'){
                return {...item,gutter:getGutter(gutter,offsetWidth)}
            }  
            return item
        }))
    },[offsetWidth])
    
    //console.log(gutter,gridData)
    let row_classes = classNames("sxd-row",{
        [`sxd-row-${justify}`]:justify,
        [`sxd-row-${align}`]:align
    })
    return (
        <div className={row_classes} style={style}>
            { gridData.map((item:any,index:number)=>{
                let col_classes = classNames("sxd-col",{
                    "gutter-row":item.gutter,
                    [`sxd-col-${item.span}`]:item.span,
                    [`sxd-col-offset-${item.offset}`]:item.offset,
                    [item.justify]:item.justify,
                    [item.align]:item.align
                })
                const gutter = item.gutter ? {padding:`${item.gutter.vertical!==0?item.gutter.vertical/2:0}px ${item.gutter.horizontal!==0?item.gutter.horizontal/2:0}px`} : {}
                const flex = item.flex ? {flex:item.flex} : {}
                const order = item.order ? {order:item.order} : {}
                let style = Object.assign({},gutter,flex,order,item.style)
                return (<div key={index} className={col_classes} style={style}>{item.node}</div>)
            }) }
        </div>
    )
}
const Col:React.FC<ICol> = ()=>{
    return (<></>)
}
export { Row,Col }