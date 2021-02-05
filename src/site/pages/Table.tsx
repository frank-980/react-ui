import Document from '../components/content'
import React from 'react'
import { Icontent, Iprops} from '../interface/document'
import Table from '../../components/Table'
const RadioPage:React.FC = ()=>{
    const brief=(<>
        <h1>Table 表格</h1>
        <p>展示行列数据。</p>
        <h2>何时使用</h2>
        <div>
            <ul>
                <li>
                    <p>当有大量结构化的数据需要展现时；</p>
                </li>
                <li>
                    <p>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</p>
                </li>
            </ul>
        </div>
        <h2>代码演示</h2>
        </>)
    
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
    const items:Icontent[]=[
        {
            id:1,
            demo:<div>
                    <Table data={data} columns={columns} />
                </div>,
            title:"基本使用",
            description:"简单的表格",
            code:
`
import { Table } from 'sxdui'
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
    },
  ];
  
const data = [
{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
},
{
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
},
{
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
},
];
<Table data={data} columns={columns} />
`
        },
    ];

    const data_table=[
        {
          key:1,
          arguments: 'data',
          brief: "数据数组",
          type: 'object[]',
          default:"-"
        },
        {
          key:2,
          arguments: 'columns',
          brief: "表格列的配置描述",
          type: 'ColumnsType[]',
          default:"-"
        },
     ];
     const columns_table=[
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
            <h2>Table 参数</h2>
            <Table data={data_table} columns={columns_table} />
        </div>
      
      
    const document:Iprops = {
        brief:brief,
        content:items,
        api:api
    }
    return (<Document document={document}/>)
}
export default RadioPage