import React from 'react';
import Brief from './Brief'
import Content from './content'
import Bottom from './Params'
const Document:React.FC = ()=>{
    return (
        <div className="contentInner">
            <Brief/>
            <Content/>
            <Bottom/>
        </div>
    )
}
export default Document