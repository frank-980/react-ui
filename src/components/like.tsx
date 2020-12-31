import React,{useState,useEffect} from 'react'
const Like:React.FC=()=>{
    const [inputVal,setInput] = useState("")
    const [obj,setObj] = useState({search:true})
    useEffect(()=>{
        console.log(inputVal)
    },[obj.search])
    function test(){
        console.log(123)
    }
    return (
        <div>
            <input type="text" onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>setObj({search:!obj.search})}>search
        </button>
        </div>
    )
}
export default Like