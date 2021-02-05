import Document from '../components/content'
import React,{useState} from 'react'
import { Icontent, Iprops} from '../interface/document'
import {Select,Option} from '../../components/Select'
import Table from '../../components/Table'
const ButtonPage:React.FC = ()=>{
    const brief=(<>
        <h1>Select选择器</h1>
        <p>下拉选择器。</p>
        <h2>何时使用</h2>
        <div>
            <ul>
                <li>
                    <p>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</p>
                </li>
                <li>
                    <p>当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。</p>
                </li>
            </ul>
        </div>
        <h2>代码演示</h2>
        </>)
    const items:Icontent[]=[
        {
            id:1,
            demo:<div>
                    <Select defaultValue="a10">
                        <Option value="a10" label="label">a10</Option>
                        <Option value="b11">b11</Option>
                        <Option value="c12">c12</Option>
                        <Option value="d13">d13</Option>
                        <Option value="e14">e14</Option>
                    </Select>
                </div>,
            title:"基本使用",
            description:"单选，基本使用。",
            code:
`
import {Select,Option} from 'sxdui'
<div>
    <Select defaultValue="a10">
        <Option value="a10" label="label">a10</Option>
        <Option value="b11">b11</Option>
        <Option value="c12">c12</Option>
        <Option value="d13">d13</Option>
        <Option value="e14">e14</Option>
    </Select>
</div>
`
        },
        {
            id:2,
            demo:<div>
                    <Select mode="multiple" defaultValue={["a10","b11"]} clearable>
                        <Option value="a10" label="label">a10</Option>
                        <Option value="b11">b11</Option>
                        <Option value="c12">c12</Option>
                        <Option value="d13">d13</Option>
                        <Option value="e14">e14</Option>
                    </Select>
                </div>,
            title:"多选",
            description:"多选，从已有条目中选择",
            code:
`
import {Select,Option} from 'sxdui'
<div>
    <Select mode="multiple" defaultValue={["a10","b11"]} clearable>
        <Option value="a10" label="label">a10</Option>
        <Option value="b11">b11</Option>
        <Option value="c12">c12</Option>
        <Option value="d13">d13</Option>
        <Option value="e14">e14</Option>
    </Select>
</div>
`
        },
    ];

    const data=[
        {
          key:1,
          arguments: 'mode',
          brief: "设置 Select 的模式为多选",
          type: 'string',
          options: 'multiple',
          default:"-"
        },
        {
          key:2,
          arguments: 'defaultValue',
          brief: "指定默认选中的条目",
          type: 'string | string[] number | number[]',
          default:"-"
        },
     ];
     const data2=[
        {
          key:1,
          arguments: 'value',
          brief: "默认根据此属性值进行筛选",
          type: 'string | number',
          options: '',
          default:"-"
        },
        {
          key:2,
          arguments: 'label',
          brief: "选中该 Option 后，Select 的 title",
          type: 'string',
          options: '',
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
            <h2>Select 参数</h2>
            <Table data={data} columns={columns} />
            <h2>Option 参数</h2>
            <Table data={data2} columns={columns} />
        </div>
      
      
    const document:Iprops = {
        brief:brief,
        content:items,
        api:api
    }
    return (<Document document={document}/>)
}
export default ButtonPage