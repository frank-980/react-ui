import React,{useState} from 'react';
import {Link} from 'react-router-dom'
const SideBar:React.FC = (props)=>{
    const [active,setActive]=useState(1)
    interface Idata{
        text:string,
        children:{
            id:number,
            text:string,
            path:string,
        }[]
    }
    const sidebar:Idata[]=[
        {
          text:"开发指南",
          children:[
            {
              id:1,
              text:"安装",
              path:"index",
            },
            {
              id:2,
              text:"快速上手",
              path:"#/component/usage",
            },
          ]
        },
        {
          text:"组件",
          children:[
            {
              id:3,
              text:"button 按钮",
              path:"button",
            }
          ]
        },
    ]
    const switchNav =(id:number)=> {
        setActive(id)
    }
    return (
        <div className="sidebar">
            <ul className="firstUl">
                {sidebar.map((item,index)=>{
                    return (
                        <li className="firstLi" key={index}>
                            <div className="firstTit">{item.text}</div>
                            {item.children.map(item2=>{
                                return (
                                    <div key={item2.id}>
                                      <Link 
                                        className={`thirdTit ${active === item2.id ?"active":""}`} 
                                        to={item2.path}
                                        onClick={()=>switchNav(item2.id)}>
                                        {item2.text}
                                      </Link>
                                    </div>
                                )
                            })}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default SideBar