import React,{useState} from 'react';
import Icon from "../../../components/Icon"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
interface ICodeBox{
    demo?:any;
    title?:string;
    description?:string;
    code?:string;
}
const CodeBox:React.FC<ICodeBox> = (props:ICodeBox)=>{
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
                {props.demo}
            </section>
            <section className="markdown">
                <div className="title">
                    <span>按钮类型</span>
                </div>
                <div className="description">
                    <p>按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。
                        主按钮在同一个操作区域最多出现一次。
                        主按钮在同一个操作区域最多出现一次。
                        主按钮在同一个操作区域最多出现一次。
                    </p>
                </div>
                <div className="actions">
                    <Icon icon="icon-file" style={{fontSize:"16px",lineHeight:"16px",cursor:"pointer"}}/>
                    <Icon icon="icon-code" onClick={()=>switchCode()} style={{fontSize:"16px",lineHeight:"16px",cursor:"pointer",marginLeft:"16px"}}/>
                </div>
            </section>
            <section className="code" style={hideStyle}>
                <SyntaxHighlighter language="javascript" style={a11yLight} codeTagProps={{className:"codeSize"}}>
                    11
                </SyntaxHighlighter> 
            </section>
        </div>
    )
}
export default CodeBox