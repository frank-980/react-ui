import Document from '../layout/content/Document'
import React from 'react'
import {IBrief, Icontent, Iprops} from '../interface'
import Button from '../../components/Button/button'
const brief:IBrief={
    h1:"1Button按钮",
    h1p:"1按钮用于开始一个即时操作",
    h2p:<div>
            <p>1标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p><ul>
                <li>
                    <p>当加载/渲染所有数据将花费很多时间时；</p>
                </li>
                <li>
                    <p>可切换页码浏览数据</p>
                </li>
            </ul>
        </div>
}
const items:Icontent[]=[
    {
        id:1,
        demo:<div><Button ghost>123</Button></div>,
        title:"按钮类型",
        description:"按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。",
        code:"this is code"
    },
    {
        id:2,
        demo:<p>this is demo2</p>,
        title:"按钮类型2",
        description:"按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。",
        code:"this is code2"
    }
]
const document:Iprops = {
    brief:brief,
    content:items,
    api:{}
}
const ButtonPage:React.FC = ()=>{
    return (<Document document={document}/>)
}
export default ButtonPage