import Document from '../components/content'
import React from 'react'
import { Icontent, Iprops} from '../interface/document'
import Table from '../../components/Table'
import Divider from '../../components/Divider'
const DividerPage:React.FC = ()=>{ 
    const brief=(<>
        <h1>Divider分割线</h1>
        <p>区隔内容的分割线</p>
        <h2>何时使用</h2>
        <div>
            <ul>
                <li>
                    <p>对不同章节的文本段落进行分割。</p>
                </li>
                <li>
                    <p>对行内文字/链接进行分割，例如表格的操作列。</p>
                </li>
            </ul>
        </div>
        <h2>代码演示</h2>
        </>)
    
    const items:Icontent[]=[
//span
        {
            id:1, 
            demo:<div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider dashed />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                </div>, 
            title:"水平分割线",
            description:`默认为水平分割线，可在中间加入文字。`,
            code:
`
import { Divider } from 'sxdui';
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
probare, quae sunt a te dicta? Refert tamen, quo modo.
</p>
<Divider />
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
probare, quae sunt a te dicta? Refert tamen, quo modo.
</p>
<Divider dashed />
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
probare, quae sunt a te dicta? Refert tamen, quo modo.
</p>
`
        },
        {
            id:2,
            demo:<div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider orientation="middle">Text</Divider>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider orientation="left">Left Text</Divider>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider orientation="right">Right Text</Divider>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                    </p>
                </div>, 
            title:"带文字的分割线",
            description:`分割线中带有文字，可以用 orientation 指定文字位置。`,
            code:
`
import { Divider } from 'sxdui';
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
probare, quae sunt a te dicta? Refert tamen, quo modo.
</p>
<Divider orientation="middle">Text</Divider>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
probare, quae sunt a te dicta? Refert tamen, quo modo.
</p>
<Divider orientation="left">Left Text</Divider>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
probare, quae sunt a te dicta? Refert tamen, quo modo.
</p>
<Divider orientation="right">Right Text</Divider>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
probare, quae sunt a te dicta? Refert tamen, quo modo.
</p>
`
        }
    ]
    const data = [
        {
            key:1,
            arguments: 'dashed',
            brief: "是否虚线",
            type: 'boolean',
            default:"false"
          },
          {
            key:2,
            arguments: 'orientation',
            brief: "分割线标题的位置",
            type: 'left | right | center',
            default:"-"
          },
    ]
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
            <h2>Api</h2>
            <Table data={data} columns={columns} />
        </div>
      
      
    const document:Iprops = {
        brief:brief,
        content:items,
        api:api
    }
    return (<Document document={document}/>)
}
export default DividerPage