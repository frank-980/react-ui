import {useState,useEffect} from 'react'
const useScreenWidth = (width:number,deps:any[]=[]):any=>{
    const [dynStyle,setdynStyle] = useState({width:"20%",padding:"50px 0 50px 20%"})
    useEffect(()=>{
        if(width<=750){
            setdynStyle({width:"0",padding:"50px 0 50px 0"})
        }else{
            setdynStyle({width:"20%",padding:"50px 0 50px 20%"})
        }
    },deps)
    return  dynStyle 
}
export default useScreenWidth