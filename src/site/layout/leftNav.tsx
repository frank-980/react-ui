import React from 'react';
import {ISideProps,ISideData} from '../interface/sideBar'
import {Link} from 'react-router-dom'
const SideBar:React.FC<ISideProps> = (props:ISideProps)=>{
  const {changeToAny,routeActive,width} = props
    const sidebar:ISideData[]=[
        {
          text:"通用",
          children:[
            {
              id:1,
              text:"button 按钮",
              path:"/button",
            },
            {
              id:2,
              text:"Icon 图标",
              path:"/icon",
            },
          ]
        },
        {
          text:"布局",
          children:[
            {
              id:34,
              text:"Divider 分割线",
              path:"/divider",
            },
            {
              id:4,
              text:"Grid 栅格",
              path:"/grid",
            }
          ]
        },
        {
          text:"数据录入",
          children:[
            {
              id:5,
              text:"Select 选择器",
              path:"/select",
              
            },
            {
              id:6,
              text:"Checkbox 多选框",
              path:"/checkbox",
            },

            {
              id:7,
              text:"Input 输入框",
              path:"/input",
            },
           
          ]
        },
        {
          text:"数据展示",
          children:[
            {
              id:9,
              text:"Table 表格",
              path:"/table",
            }
          ]
        },
    ]
    const switchNav =(path:string)=> {
      if(routeActive!==path){
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
                                        className={`thirdTit ${routeActive === item2.path ?"active":""}`} 
                                        to={item2.path}
                                        onClick={()=>switchNav(item2.path)}>
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