import React from 'react';
import { IBrief } from '../../interface'
const Brief:React.FC<IBrief> = (props:IBrief)=>{
    const {h1,h1p,h2p} = props
    return (
        <section className="brief">
            <h1>{h1}</h1>
            <p>{h1p}</p>
            <h2>何时使用</h2>
            {h2p}
            <h2>代码演示</h2>
        </section>
    )
}
export default Brief