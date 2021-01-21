const responsive = (val:any,offsetWidth:number)=>{
    if(offsetWidth>=1600){
        return val.xxl||0
    }
    if(offsetWidth>=1200){
        return val.xl||0
    }
    if(offsetWidth>=992){
        return val.lg||0
    }
    if(offsetWidth>=768){
        return val.md||0
    }
    if(offsetWidth>=576){
        return val.sm||0
    }
    if(offsetWidth<576){
        return val.xs||0
    }
}
const getGutter = (val:any,offsetWidth:number) =>{
    if(typeof val ==="number"){
        return {horizontal:val,vertical:0}
    }
    if(Object.prototype.toString.call(val) === '[object Object]'){
        return {
            horizontal:responsive(val,offsetWidth),
            vertical:0
        }
    }
    if(Array.isArray(val)){
        return {
            horizontal:Object.prototype.toString.call(val[0]) === '[object Object]'?responsive(val[0],offsetWidth):val[0],
            vertical:Object.prototype.toString.call(val[1]) === '[object Object]'?responsive(val[1],offsetWidth):val[1],
        }
    }
    return null
}
const getFlex = (flex:string|number)=>{
    if(typeof flex === "number"){
        return `${flex} ${flex} auto`
    }
    if(typeof flex === "string"){
        if(flex.indexOf(" ")>-1) return flex
        if(flex==="auto") return "1 1 auto"
        if(flex==="none") return "0 0 auto"
        if(flex.indexOf("px")) return `0 0 ${flex}`
        return null
    }
}
const getResponsiveGrid = (offsetWidth:number,obj:any)=>{
    const {xs, sm, md, lg, xl,xxl }=obj
    if(offsetWidth>=1600 && xxl){
        if(typeof xxl === "number") return {span:xxl,offset:0,order:0}
        if(typeof xxl === "object") return {span:xxl.span || null,offset:xxl.offset || null,order:xxl.order||null}
    }
    if(offsetWidth>=1200 && obj.xl){
        if(typeof xl === "number") return {span:xl,offset:0,order:0}
        if(typeof xl === "object") return {span:xl.span || null,offset:xl.offset || null,order:xl.order||null}
    }
    if(offsetWidth>=992 && obj.lg){
        if(typeof lg === "number") return {span:lg,offset:0,order:0}
        if(typeof lg === "object") return {span:lg.span || null,offset:lg.offset || null,order:lg.order||null}
    }
    if(offsetWidth>=768 && obj.md){
        if(typeof md === "number") return {span:md,offset:0,order:0}
        if(typeof md === "object") return {span:md.span || null,offset:md.offset || null,order:md.order||null}
    }
    if(offsetWidth>=576 && obj.sm){
        if(typeof sm === "number") return {span:sm,offset:0,order:0}
        if(typeof sm === "object") return {span:sm.span || null,offset:sm.offset || null,order:sm.order||null}
    }
    if(offsetWidth<576 && obj.xs){
        if(typeof xs === "number") return {span:xs,offset:0,order:0}
        if(typeof xs === "object") return {span:xs.span || null,offset:xs.offset || null,order:xs.order||null}
    }
    return null
}
const init = (data:any,offsetWidth:number,gutter:any)=>{
    let arr = [];
    for(let i=0;i<data.length;i++){
        let { span=0, offset=0, flex, order=0, children="", style={},xs=null, sm=null, md=null, lg=null, xl=null ,xxl=null } = data[i].props
        let res = getResponsiveGrid(offsetWidth,{xs, sm, md, lg, xl ,xxl}) || { span,offset,order }
        arr.push({
            gutter:getGutter(gutter,offsetWidth),
            span:res.span,
            offset:res.offset,
            node:children,
            flex:flex ? getFlex(flex) : null,
            order: order,
            style:style,
            responsive:{xs, sm, md, lg, xl ,xxl}
        })
    }
    return arr
}
const initData = (children:any,offsetWidth:number,gutter:any)=>{
    if(children.length<1){
        return []
    }
    if(Array.isArray(children)){
        return init(children,offsetWidth,gutter)
    }else{
        return init([children],offsetWidth,gutter)
    }
}
export {initData,getGutter,getResponsiveGrid}