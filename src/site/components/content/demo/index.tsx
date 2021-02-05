import React,{useState} from 'react';
import { IDemo } from '../interface'
import Code from './Code';
import Preview from './Preview';
import Introduce from './Introduce';
const Demo:React.FC<IDemo> = (props:IDemo)=>{
    const { demo, title="", description="", code="" } = props
    const [hideStyle,setHideStyle] = useState({display:"none"})
    const switch_code_display = ()=>{
        if(hideStyle.display==="none"){
            setHideStyle({display:"block"})
        }else{
            setHideStyle({display:"none"})
        }
    }
    return (
        <div className="codeBox">
            <Preview demo={demo}/>
            <Introduce title={title} description={description} switch_code_display={switch_code_display}/>
            <Code code={code} hideStyle={hideStyle}/>
        </div>
    )
}
export default Demo