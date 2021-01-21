import React from 'react';
interface Ibottom{
    bottom?:any;
}
const Bottom:React.FC<Ibottom> = (props)=>{
    const { bottom } = props

    return (
        <section className="brief">
            {bottom}
        </section>
    )
}
export default Bottom