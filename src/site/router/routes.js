import ButtonPage from '../pages/Button'
import SelectPage from '../pages/Select'
import InputPage from '../pages/Input'
import IconPage from '../pages/Icon'
import GridPage from '../pages/Grid'
import DividerPage from '../pages/Divider'
import CheckboxPage from '../pages/Checkbox'
import RadioPage from '../pages/Radio'
import TablePage from '../pages/Table'
import ItemList from '../pages/updateItems'
import ItemList2 from '../pages/updateItems2'
export default [
    {
      text:"通用",
      children:[
        {
          id:1,
          text:"button 按钮",
          path:"/button",
          component:ButtonPage
        },
        {
          id:2,
          text:"Icon 图标",
          path:"/icon",
          component:IconPage
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
          component:DividerPage
        },
        {
          id:4,
          text:"Grid 栅格",
          path:"/grid",
          component:GridPage
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
          component:SelectPage
        },
        {
          id:6,
          text:"Checkbox 多选框",
          path:"/checkbox",
          component:CheckboxPage
        },

        {
          id:7,
          text:"Input 输入框",
          path:"/input",
          component:InputPage
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
          component:TablePage
        }
      ]
    },
    {
      text:"ItemList",
      children:[
        {
          id:10,
          text:"ItemList",
          path:"/ItemList",
          component:ItemList
        }
      ]
    },
    {
      text:"ItemList2",
      children:[
        {
          id:10,
          text:"ItemList2",
          path:"/ItemList2",
          component:ItemList2
        }
      ]
    },
]