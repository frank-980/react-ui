import React from 'react'
interface Ihello{
    message?:string
}
const Hello:React.FC<Ihello>=(props)=>{
    return (
        <h1>{props.message}</h1>
    )
}
Hello.defaultProps={
    message:"hello22"
}
export default Hello