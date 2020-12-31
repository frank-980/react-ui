import React from 'react';
import CodePreview from './demo/CodePreview'
const Content:React.FC = ()=>{
    return (
        <div>
            <div className="codeWrap">
                <CodePreview/>
                <CodePreview />
            </div> 
            <div className="codeWrap">
                <CodePreview/>
                <CodePreview />
            </div> 
        </div>
    )
}
export default Content