import Document from '../components/content'
import React,{useState} from 'react'
import { Icontent, Iprops} from '../interface/document'
import Button from '../../components/Button/button'
import {Checkbox ,CheckboxGroup} from '../../components/Checkbox'
import Divider from '../../components/Divider'
import Table from '../../components/Table'
const CheckboxPage:React.FC = ()=>{
    const brief=(<>
        <h1>Checkbox 多选框</h1>
        <p>多选框。</p>
        <h2>何时使用</h2>
        <div>
            <ul>
                <li>
                    <p>在一组可选项中进行多项选择时；</p>
                </li>
                <li>
                    <p>单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</p>
                </li>
            </ul>
        </div>
        <h2>代码演示</h2>
        </>)
    const [checked,setChecked] = useState(false)
    const [disabled,setDisabled] = useState(false)
    const [checkedList, setCheckedList] = useState(['Apple']);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);
  const plainOptions:any = ['Apple', 'Pear', 'Orange'];
    const valueChange=(val:any)=>{
        setCheckedList(val ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(val)
    }
    const onChange=(val:any)=>{
        console.log(val)
        setIndeterminate(!!val.length && val.length < plainOptions.length);
        setCheckedList(val);
        setCheckAll(val.length === plainOptions.length)
    }
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];
    const items:Icontent[]=[
        {
            id:1,
            demo:<div>
                    <Checkbox onChange={(value:string)=>console.log(value)}>Checkbox</Checkbox>
                </div>,
            title:"基本使用",
            description:"简单的 checkbox。",
            code:
`
import { Checkbox } from 'sxdui'
<Checkbox onChange={(value:string)=>console.log(value)}>Checkbox</Checkbox>
`
        },
        {
            id:2,
            demo:<div>
                    <Checkbox defaultChecked={false} disabled />
                    <br />
                    <Checkbox defaultChecked disabled />
                </div>,
            title:"不可用",
            description:"checkbox 不可用。",
            code:
`
import { Checkbox } from 'sxdui'
<Checkbox defaultChecked={false} disabled />
<br />
<Checkbox defaultChecked disabled />
`
        },
        {
            id:3,
            demo:<div>
                    <Checkbox checked={checked} disabled={disabled}>checkbox</Checkbox>
                    <Button type="primary" size="small" onClick={()=>setChecked(!checked)}>
                        {checked ? 'Check' : 'Uncheck'}
                    </Button>
                    <Button type="primary" size="small" onClick={()=>setDisabled(!disabled)}>
                        {disabled ? 'disabled' : 'abled'}
                    </Button>
                </div>,
            title:"受控的Checkbox",
            description:"联动 checkbox。",
            code:
`
import { Checkbox, Button } from 'sxdui'
const [checked,setChecked] = useState(false)
const [disabled,setDisabled] = useState(false)
const toggleChecked = ()=>{
    setChecked(!checked)
}
const toggleDisable = ()=>{
    setDisabled(!disabled)
}
<Checkbox checked={checked} disabled={disabled}>checkbox</Checkbox>
<Button type="primary" size="small" onClick={()=>setChecked(!checked)}>
    {checked ? 'Check' : 'Uncheck'}
</Button>
<Button type="primary" size="small" onClick={()=>setDisabled(!disabled)}>
    {disabled ? 'disabled' : 'abled'}
</Button>
`
        },
        
        {
            id:4,
            demo:<div>
                    <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={(v:any)=>console.log(v)}/>
                    <br />
                    <br />
                    <CheckboxGroup options={options} defaultValue={['Pear']}/>
                    <br />
                    <br />
                    <CheckboxGroup options={optionsWithDisabled} defaultValue={['Pear']}/>
                </div>,
            title:"Checkbox 组",
            description:"方便的从数组生成 Checkbox 组。",
            code:
`
import { Checkbox } from 'sxdui'
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
<CheckboxGroup options={plainOptions} defaultValue={['Apple']}/>
<br />
<br />
<CheckboxGroup options={options} defaultValue={['Pear']}/>
<br />
<br />
<CheckboxGroup options={optionsWithDisabled} defaultValue={['Pear']}/>
`
        },
        {
            id:5,
            demo:<div>
                    <Checkbox checked={checkAll} indeterminate={indeterminate} onChange={valueChange}>Check all</Checkbox>
                    <Divider />
                    <CheckboxGroup value={checkedList} options={plainOptions} defaultValue={['Apple',"Pear"]} onChange={onChange} />
                </div>,
            title:"全选",
            description:"全选效果",
            code:
`
import { Checkbox, Divider } from 'sxdui'
const [checkedList, setCheckedList] = useState(['Apple']);
const [indeterminate, setIndeterminate] = React.useState(true);
const [checkAll, setCheckAll] = React.useState(false);
const plainOptions:any = ['Apple', 'Pear', 'Orange'];
const valueChange=(val:any)=>{
    setCheckedList(val ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(val)
}
const onChange=(val:any)=>{
    setIndeterminate(!!val.length && val.length < plainOptions.length);
    setCheckedList(val);
    setCheckAll(val.length === plainOptions.length)
}
<Checkbox checked={checkAll} indeterminate={indeterminate} onChange={valueChange}>Check all</Checkbox>
<Divider />
<CheckboxGroup value={checkedList} options={plainOptions} defaultValue={['Apple',"Pear"]} onChange={onChange} />
`
        },
    ];

    const data=[
        {
          key:1,
          arguments: 'checked',
          brief: "指定当前是否选中",
          type: 'boolean',
          options: 'boolean',
          default:"false"
        },
        {
          key:2,
          arguments: 'defaultChecked',
          brief: "初始是否选中",
          options: 'boolean',
          default:"false"
        },
        {
            key:3,
            arguments: 'disabled',
            brief: "失效状态",
            options: 'boolean',
          default:"false"
          },
          {
            key:4,
            arguments: 'indeterminate',
            brief: "设置 indeterminate 状态，只负责样式控制",
            options: 'boolean',
            default:"false"
          },
          {
            key:5,
            arguments: 'onChange',
            brief: "变化时回调函数",
            options: 'function(val:boolean)',
            default:"-"
          },
     ];
     const data2=[
        {
            key:1,
            arguments: 'defaultValue',
            brief: "默认选中的选项",
            type: 'string[]',
            default:"[]"
          },
          {
            key:2,
            arguments: 'disabled',
            brief: "整组失效",
            options: 'boolean',
            default:"false"
          },
          {
              key:3,
              arguments: 'options',
              brief: "指定可选项",
              options: 'string[] | Option[]',
            default:"[]"
            },
            {
              key:4,
              arguments: 'value',
              brief: "设置 indeterminate 状态，只负责样式控制",
              options: 'string[]',
              default:"[]"
            },
            {
              key:5,
              arguments: 'onChange',
              brief: "变化时回调函数",
              options: 'function(val:string[])',
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
            <h2>Checkbox 参数</h2>
            <Table data={data} columns={columns} />
            <h2>Checkbox Group 参数</h2>
            <Table data={data2} columns={columns} />
        </div>
      
      
    const document:Iprops = {
        brief:brief,
        content:items,
        api:api
    }
    return (<Document document={document}/>)
}
export default CheckboxPage