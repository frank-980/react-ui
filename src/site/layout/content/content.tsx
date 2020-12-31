import React from 'react';
import CodePreview from './demo/CodePreview'
import {Icontent} from '../../interface'
interface IDoc{
    content:Icontent[];
}
class Content extends React.Component<IDoc> {
    constructor(props:IDoc){
        super(props)
    }
    render(){
        const {content}=this.props
        const cLength = content.length
        if(cLength<1) return (<div></div>)
        if(cLength===1){
            return (
                <div className="codeWrap">
                    <CodePreview {...content[0]}/>
                </div> 
            )   
        }
        let left:Icontent[]=[];
        let right:Icontent[]=[];
        const middle = cLength % 2 ==0 ? cLength/2 : Math.floor(cLength/2) + 1
        for(let i=0;i<middle;i++){
            left=[...left,content[i]]
        }
        for(let i=0;i<cLength-middle;i++){
            right=[...right,content[i+middle]]
        }  
        return (
            <div>
                <div className="codeWrap">
                    {left.map((item:Icontent)=>{
                        return (<CodePreview key={item.id} {...item}/>)
                    })}
                </div> 
                <div className="codeWrap" style={{paddingRight:"0px"}}>
                    {right.map((item:Icontent)=>{
                        return (<CodePreview key={item.id} {...item}/>)
                    })}
                </div> 
            </div>
        ) 
    }
}
export default Content