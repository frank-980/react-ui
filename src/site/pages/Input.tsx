import Document from '../components/content'
import {Input,AutoComplete} from '../../components/Input'
import {Select,Option} from '../../components/Select'
import Table from '../../components/Table'
import Icon from '../../components/Icon'
import { Icontent, Iprops} from '../interface/document'
const InputPage = ()=>{
    const brief=(<>
        <h1>Input输入框</h1>
            <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
            <h2>何时使用</h2>
            <div>
                <ul>
                    <li>
                        <p>需要用户输入表单域内容时。</p>
                    </li>
                    <li>
                        <p>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</p>
                    </li>
                </ul>
            </div>
            <h2>代码演示</h2>
        </>)
    
    const options = [
        {value:"a10"},
        {value:"a1012"},
        {value:"b11"},
        {value:"c12"},
        {value:"d13"},
        {value:"e14"},
    ]
    const selectBefore = (
        <Select defaultValue="http://" style={{width:"90px"}}>
          <Option value="http://">http://</Option>
          <Option value="https://">https://</Option>
        </Select>
      );
      const selectAfter = (
        <Select defaultValue=".com" style={{width:"80px"}}>
          <Option value=".com">.com</Option>
          <Option value=".jp">.jp</Option>
          <Option value=".cn">.cn</Option>
          <Option value=".org">.org</Option>
        </Select>
      );
    const items:Icontent[]=[
        {
            id:1,
            demo:<div>
                    <Input placeholder="请输入内容"/>
                </div>,
            title:"基本使用",
            description:"基本使用",
            code:
`
import {Input} from 'sxdui'
<Input placeholder="请输入内容"/>
`
        },
        {
            id:2,
            demo:<div>
                    <Input size="large" placeholder="large"/>
                    <Input size="default" placeholder="default" style={{marginTop:"20px"}}/>
                    <Input size="small" placeholder="small" style={{marginTop:"20px"}}/>
                </div>,
            title:"三种大小",
            description:"输入框有三种尺寸（大、默认、小）",
            code:
`
import {Input} from 'sxdui'
<div>
    <Input size="large" placeholder="large"/>
    <Input size="default" placeholder="default" style={{marginTop:"20px"}}/>
    <Input size="small" placeholder="small" style={{marginTop:"20px"}}/>
</div>
`
        },
        {
            id:3,
            demo:<div>
                    <Input prefix={<Icon icon="icon-search"/>} placeholder="请输入内容"/>
                    <Input suffix="元" placeholder="请输入内容" style={{marginTop:"20px"}}/>
                </div>,
            title:"前后置内容",
            description:"可以通过 prefix 和 suffix 属性在 input 组件首部和尾部增加显示内容",
            code:
`
import {Input} from 'sxdui'
<div>
    <Input prefix={<Icon icon="icon-search"/>} placeholder="请输入内容"/>
    <Input suffix="元" placeholder="请输入内容" style={{marginTop:"20px"}}/>
</div>
`
        },
        {
            id:4,
            demo:<div>
                    <Input addonBefore="http://" addonAfter=".com" placeholder="请输入内容"/>
                    <Input addonBefore={selectBefore} addonAfter={selectAfter} placeholder="请输入内容"/>
                </div>,
            title:"复合型输入框",
            description:"指定在 input 中前置或者后置内容",
            code: 
`
import {Input,Select,Option} from 'sxdui'
const selectBefore = (
    <Select defaultValue="http://">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
);
const selectAfter = (
    <Select defaultValue=".com">
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
);
<div>
    <Input addonBefore="http://" addonAfter=".com" placeholder="请输入内容"/>
    <Input addonBefore={selectBefore} addonAfter={selectAfter} placeholder="请输入内容" style={{marginTop:"20px"}}/>
</div>
`
        },
        {
            id:5,
            demo:<div>
                    <AutoComplete placeholder="请输入内容" options={options}/>
                </div>,
            title:"带输入建议",
            description:"根据输入内容提供对应的输入建议",
            code:
`
import {Input} from 'sxdui'
const options = [
    {value:"a10"},
    {value:"a1012"},
    {value:"b11"},
    {value:"c12"},
    {value:"d13"},
    {value:"e14"},
]
<AutoComplete placeholder="请输入内容" options={options}/>
`
        }
    ]
    const data=[
        {
          key:1,
          arguments: 'size',
          brief: "控件大小",
          type: 'string',
          options: 'large | middle | small',
          default:"middle"
        },
        {
          key:2,
          arguments: 'prefix',
          brief: "带有前缀图标的 input",
          type: 'ReactNode',
          default:"-"
        },
        {
            key:3,
            arguments: 'suffix',
            brief: "带有后缀图标的 input",
            type: 'ReactNode',
            default:"-"
        },
        {
            key:4,
            arguments: 'addonBefore',
            brief: "前置内容",
            type: 'ReactNode',
            default:"-"
          },
          {
              key:5,
              arguments: 'addonAfter',
              brief: "后置内容",
              type: 'ReactNode',
              default:"-"
          },
        {
            key:6,
            arguments: 'defaultValue',
            brief: "输入框默认内容",
            type: 'string',
            default:"-"
        },
        {
            key:7,
            arguments: 'placeholder',
            brief: "输入框无值时显示",
            type: 'string',
            default:"-"
        },
        {
            key:8,
            arguments: 'maxLength',
            brief: "最大长度",
            type: 'number',
            default:"-"
        },
        {
            key:9,
            arguments: 'onChange',
            brief: "输入框内容变化时的回调",
            type: 'function(e)',
            default:"-"
        },
     ];
     const data2=[
        {
            key:1,
            arguments: 'defaultValue',
            brief: "输入框默认内容",
            type: 'string',
            default:"-"
          },
          {
            key:2,
            arguments: 'placeholder',
            brief: "输入框无值时显示",
            type: 'string',
            default:"-"
          },
        {
          key:3,
          arguments: 'options',
          brief: "选中该 Option 后，Select 的 title",
          type: 'key?:any,value:number|string,label?:number|string,default?:boolean;',
          default:"-"
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
            <h2>Input 参数</h2>
            <Table data={data} columns={columns} />
            <h2>AutoComplete 参数</h2>
            <Table data={data2} columns={columns} />
        </div>
    const document:Iprops = {
        brief:brief,
        content:items,
        api:api
    }
    return (<Document document={document}/>)
}
export default InputPage
