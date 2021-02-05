import Document from '../components/content'
import React,{useState} from 'react'
import { Icontent, Iprops} from '../interface/document'
import Button from '../../components/Button/button'
import Icon from '../../components/Icon'
import Table from '../../components/Table'
const ButtonPage:React.FC = ()=>{
    const brief=(<>
        <h1>Button按钮</h1>
        <p>按钮用于开始一个即时操作</p>
        <h2>何时使用</h2>
        <div>
            <p>标记了操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
            <ul>
                <li>
                    <p>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</p>
                </li>
                <li>
                    <p>默认按钮：用于没有主次之分的一组行动点。</p>
                </li>
                <li>
                    <p>文本按钮：用于最次级的行动点。</p>
                </li>
                <li>
                    <p>链接按钮：用于作为外链的行动点。</p>
                </li>
            </ul>
        </div>
        <h2>代码演示</h2>
        </>)
    
    const [loading,setLoading] = useState(false)
    const clickHandle = ()=>{
        setLoading(true)
        setTimeout(()=>setLoading(false),3000)
    }
    const items:Icontent[]=[
        {
            id:1,
            demo:<div>
                    <Button type="primary" style={{marginRight:"20px"}}>primary</Button>
                    <Button type="default" style={{marginRight:"20px"}}>default</Button>
                    <Button type="text" style={{marginRight:"20px"}}>text</Button>
                    <Button type="link">link</Button>
                </div>,
            title:"按钮类型",
            description:"按钮有四种类型：主按钮、次按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。",
            code:
`
import { Button } from 'sxdui'
<div>
    <Button type="primary" style={{marginRight:"20px"}}>primary</Button>
    <Button type="default" style={{marginRight:"20px"}}>default</Button>
    <Button type="text" style={{marginRight:"20px"}}>text</Button>
    <Button type="link">link</Button>
</div>
`
        },
        {
            id:2,
            demo:<div>
                    <Button type="primary" size="large" style={{marginRight:"20px"}}>large</Button>
                    <Button type="default" style={{marginRight:"20px"}}>middle</Button>
                    <Button type="text" size="small" style={{marginRight:"20px"}}>small</Button>
                    <div style={{marginTop:"16px"}}/>
                    <Button type="primary" size="large" shape="round" style={{marginRight:"20px"}}>large round</Button>
                    <Button type="default" shape="round" style={{marginRight:"20px"}}>middle round</Button>
                    <Button type="text" shape="round" size="small" style={{marginRight:"20px"}}>small round</Button>
                </div>,
            title:"按钮尺寸",
            description:"通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中",
            code:
`
import { Button } from 'sxdui'
<div>
    <Button type="primary" size="large" style={{marginRight:"20px"}}>large</Button>
    <Button type="default" style={{marginRight:"20px"}}>middle</Button>
    <Button type="text" size="small" style={{marginRight:"20px"}}>small</Button>
    <div style={{marginTop:"16px"}}/>
    <Button type="primary" size="large" shape="round" style={{marginRight:"20px"}}>large round</Button>
    <Button type="default" shape="round" style={{marginRight:"20px"}}>middle round</Button>
    <Button type="text" shape="round" size="small" style={{marginRight:"20px"}}>small round</Button>
</div>
`
        },
        /* loading */
        {
            id:3,
            demo:<div>
                    <Button type="primary" loading style={{marginRight:"20px"}}>loading</Button>
                    <Button type="primary" onClick={()=>clickHandle()} loading={loading}>click me !</Button>
                </div>,
            title:"加载中状态",
            description:"添加 loading 属性即可让按钮处于加载状态，第二个按钮演示点击后进入加载状态",
            code:
`
import { Button } from 'sxdui'
const [loading,setLoading] = useState(false)
const clickHandle = ()=>{
    setLoading(true)
    setTimeout(()=>setLoading(false),3000)
}
<div>
    <Button type="primary" loading style={{marginRight:"20px"}}>loading</Button>
    <Button type="primary" onClick={()=>clickHandle()} loading={loading}>click me !</Button>
</div>
`
        },
        {
            id:4,
            demo:<div>
                    <Button type="primary" ghost style={{marginRight:"20px"}}>large</Button>
                    <Button type="primary" disabled style={{marginRight:"20px"}}>large</Button>
                </div>,
            title:"幽灵按钮和禁用状态",
            description:`
            幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
            添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。`,
            code:
`
import { Button } from 'sxdui'
<div>
    <Button type="primary" ghost style={{marginRight:"20px"}}>large</Button>
    <Button type="primary" disabled style={{marginRight:"20px"}}>large</Button>
</div>
`
        },
        {
            id:5,
            demo:<div>
                    <Button type="primary" block style={{marginBottom:"16px"}}>primary block</Button>
                    <Button type="default" block style={{marginBottom:"16px"}}>default block</Button>
                    <Button type="link" block>link block</Button>
                </div>,
            title:"Block 按钮",
            description:"block 属性将使按钮适合其父宽度。",
            code:
`
import { Button } from 'sxdui'
<div>
    <Button type="primary" block style={{marginBottom:"16px"}}>primary block</Button>
    <Button type="default" block style={{marginBottom:"16px"}}>default block</Button>
    <Button type="link" block>link block</Button>
</div>
`
        },
        {
            id:6,
            demo:<div>
                    <Button type="primary" shape="circle" style={{marginRight:"20px"}}><Icon icon="icon-search"/></Button>
                    <Button type="primary" shape="circle" style={{marginRight:"20px"}}>S</Button>
                    <Button type="primary" shape="round"><Icon icon="icon-search" style={{marginRight:"8px"}}/>search</Button>
                    <div style={{marginTop:"16px"}}/>
                    <Button type="default" shape="circle" style={{marginRight:"20px"}}><Icon icon="icon-search"/></Button>
                    <Button type="default" shape="circle" style={{marginRight:"20px"}}>S</Button>
                    <Button type="default" shape="round"><Icon icon="icon-search" style={{marginRight:"8px"}}/>search</Button>
                </div>,
            title:"图标按钮",
            description:"当需要在 Button 内嵌入 Icon 时，直接在 Button 内使用 Icon 组件。",
            code:
`
import { Button } from 'sxdui'
<div>
    <Button type="primary" shape="circle" style={{marginRight:"20px"}}><Icon icon="icon-search"/></Button>
    <Button type="primary" shape="circle" style={{marginRight:"20px"}}>S</Button>
    <Button type="primary" shape="round"><Icon icon="icon-search" style={{marginRight:"8px"}}/>search</Button>
    <div style={{marginTop:"16px"}}/>
    <Button type="default" shape="circle" style={{marginRight:"20px"}}><Icon icon="icon-search"/></Button>
    <Button type="default" shape="circle" style={{marginRight:"20px"}}>S</Button>
    <Button type="default" shape="round"><Icon icon="icon-search" style={{marginRight:"8px"}}/>search</Button>
</div>
`
        },
        {
            id:7,
            demo:<div>
                    <Button type="primary" danger style={{marginRight:"20px"}}>danger primary</Button>
                    <Button type="default" danger style={{marginRight:"20px"}}>danger default</Button>
                    <Button type="text" danger style={{marginRight:"20px"}}>text danger</Button>
                    <Button type="link" danger>danger link</Button>
                </div>,
            title:"图标按钮",
            description:"当需要在 Button 内嵌入 Icon 时，直接在 Button 内使用 Icon 组件。",
            code:
`
import { Button } from 'sxdui'
<div>
    <Button type="primary" danger style={{marginRight:"20px"}}>danger primary</Button>
    <Button type="default" danger style={{marginRight:"20px"}}>danger default</Button>
    <Button type="text" danger style={{marginRight:"20px"}}>text danger</Button>
    <Button type="link" danger>danger link</Button>
</div>
`
        },
    ]

    const data=[
        {
          key:1,
          arguments: 'type',
          brief: "设置按钮类型",
          type: 'string',
          options: 'primary | dashed | link | text | default',
          default:"default"
        },
        {
          key:2,
          arguments: 'size',
          brief: "设置按钮尺寸",
          type: 'large | middle | small',
          default:"middle"
        },
        {
          key:3,
          arguments: 'ghost',
          brief: "是否启用幽灵按钮",
          type: 'boolean',
          default:"false"
        },
        {
          key:4,
          arguments: 'loading',
          brief: "是否加载中状态",
          type: 'boolean',
          default:"false"
        },
        {
          key:5,
          arguments: 'disabled',
          brief: "是否禁用状态",
          type: 'boolean',
          default:"false"
        },
        {
          key:6,
          arguments: 'shape',
          brief: "设置按钮形状",
          type: 'circle | round',
          default:"—"
        },
     ];
     const columns=[
        {
            title: '参数',
            dataIndex: 'arguments'
        },
        {
            title: '说明',
            dataIndex: 'brief'
        },
        {
            title: '类型',
            dataIndex: 'type'
        },
        {
            title: '默认值',
            dataIndex: 'default',
        }
    ];
    const api = 
        <div>
            <h2>Button 参数</h2>
            <Table data={data} columns={columns} />
        </div>
    const document:Iprops = {
        brief:brief,
        content:items,
        api:api
    }
    return (<Document document={document}/>)
}
export default ButtonPage