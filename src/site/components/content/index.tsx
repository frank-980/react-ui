import React from 'react';
import DemoList from './demoList'
import {IDoc} from '../../interface/document'
const Document:React.FC<IDoc> = (props:IDoc)=>{
    const {document} = props
    return (
        <div className="contentInner">
            <section className="brief">
                {document.brief} 
            </section>
            <DemoList content={document.content}/>
            <section className="brief">
                {document.api}
            </section>
        </div>
    )
}
export default Document