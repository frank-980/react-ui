import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React from 'react';
import { ICode } from "../interface";
const Code:React.FC<ICode> = (props:ICode)=>{
    const { code, hideStyle } =props
    return (
        <section className="code" style={hideStyle}>
            <SyntaxHighlighter language="javascript" style={a11yLight} codeTagProps={{className:"codeSize"}}>
                {code}
            </SyntaxHighlighter> 
        </section>
    )
}
export default Code