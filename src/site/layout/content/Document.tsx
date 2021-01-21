import React from 'react';
import Brief from './Brief'
import Content from './content'
import Bottom from './Params'
import {IDoc} from '../../interface/document'
const Document:React.FC<IDoc> = (props:IDoc)=>{
    const {document} = props
    return (
        <div className="contentInner">
            <Brief {...document.brief}/>
            <Content content={document.content}/>
            <Bottom bottom={document.api}/>
        </div>
    )
}
export default Document