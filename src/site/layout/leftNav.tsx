import React from 'react';
import {ISideProps,ISideData} from '../interface/sideBar'
import {Link} from 'react-router-dom'
const SideBar:React.FC<ISideProps> = (props:ISideProps)=>{
  const {changeToAny,routeActive,width} = props
    const sidebar:ISideData[]=[
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
              path:"usage",
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
      if(routeActive!==id){
        changeToAny("changeToFalse")
      }
    }
    return (
        <div className="sidebar" style={{width:width}}>
            <ul className="firstUl">
                {sidebar.map((item,index)=>{
                    return (
                        <li className="firstLi" key={index}>
                            <div className="firstTit">{item.text}</div>
                            {item.children.map(item2=>{
                                return (
                                    <div key={item2.id}>
                                      <Link 
                                        className={`thirdTit ${routeActive === item2.id ?"active":""}`} 
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