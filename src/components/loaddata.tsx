
import * as React from 'react';
import useGetData from '../hooks/useGetData'

const LoadPicture : React.FC=()=>{

    const [emitGetData,handleEmit] = React.useState(false)
    const like = React.useRef<HTMLInputElement>(null)
    const [data,loading] = useGetData("https://dog.ceo/api/breeds/image/random",[emitGetData])
    return (
        <div>
            <button onClick={()=>{handleEmit(!emitGetData);console.log(like.current?.value)}}>get dog picture</button>
            <p>{loading?"loading...":"success!"}</p>
            {data.status?<img src={data.message}/>:<p></p>}
            <input ref={like}/>
        </div>
        
    )
}
export default LoadPicture