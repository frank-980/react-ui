import React,{useState} from 'react';
import Icon from "../../../../components/Icon"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Icontent } from '../../../interface'
const CodeBox:React.FC<Icontent> = (props:Icontent)=>{
    const {demo,title="",description="",code=""} = props
    const [hideStyle,setHideStyle] = useState({display:"none"})
    const switchCode = ()=>{
        if(hideStyle.display==="none"){
            setHideStyle({display:"block"})
        }else{
            setHideStyle({display:"none"})
        }
    }
    return (
        <div className="codeBox">
            <section className="demo">
                {demo}
            </section>
            <section className="markdown">
                <div className="title">
                    <span>{title}</span>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="actions">
                    <Icon icon="icon-file" style={{fontSize:"16px",lineHeight:"16px",cursor:"pointer"}}/>
                    <Icon icon="icon-code" onClick={()=>switchCode()} style={{fontSize:"16px",lineHeight:"16px",cursor:"pointer",marginLeft:"16px"}}/>
                </div>
            </section>
            <section className="code" style={hideStyle}>
                <SyntaxHighlighter language="javascript" style={a11yLight} codeTagProps={{className:"codeSize"}}>
                    {code}
                </SyntaxHighlighter> 
            </section>
        </div>
    )
}
export default CodeBox