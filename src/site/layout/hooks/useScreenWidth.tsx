import {useState,useEffect} from 'react'
const useScreenWidth = ():any=>{
    const [width,setWidth] = useState(window.innerWidth)
    const [moreThan750,isMoreThan750] = useState(true)
    /* screen size change */
    const resizeHandle = ()=>{
        removeEventListener()
        setWidth(window.innerWidth)
    }
    const addEventListener=()=>{
        window.addEventListener("resize",resizeHandle,false);
    }
    const removeEventListener=()=>{
        window.removeEventListener("resize",resizeHandle);
    }
    addEventListener()
    /* end */
    useEffect(()=>{
        if(width<=750){
            isMoreThan750(false)
        }else{
            isMoreThan750(true)
        }
    },[width])
    return moreThan750
}
export default useScreenWidth