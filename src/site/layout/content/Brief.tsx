import React from 'react';
import { IBrief } from '../../interface/document'
const Brief:React.FC<IBrief> = (props:IBrief)=>{
    const { introduce } = props
    return (
        <section className="brief">
            {introduce}
            
        </section>
    )
}
export default Brief