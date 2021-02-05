import Document from '../components/content'
import React from 'react'
import { Icontent, Iprops} from '../interface/document'
import Table from '../../components/Table'
import Divider from '../../components/Divider'
import {Row,Col} from '../../components/Grid'
const ButtonPage:React.FC = ()=>{ 
    const brief=(<>
        <h1>Grid栅格</h1>
        <p>24 栅格系统。</p>
        
        <h2>概述</h2>
        <div>
            <p>布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p>
            <ul>
                <li>
                    <p>通过 row 在水平方向建立一组 column（简写 col）。</p>
                </li>
                <li>
                    <p>你的内容应当放置于 col 内，并且，只有 col 可以作为 row 的直接元素。</p>
                </li>
                <li>
                    <p>栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 <Col span={8} /> 来创建。</p>
                </li>
                <li>
                    <p>如果一个 row 中的 col 总和超过 24，那么多余的 col 会作为一个整体另起一行排列。</p>
                </li>
            </ul>
            <p>我们的栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。</p>
            <p>布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。</p>
        </div>
        <h2>代码演示</h2>
        </>)
    
    const gutterStyle = { background: '#0092ff', padding: '8px 0' };
    const boxStyle = {background:"rgba(128, 128, 128, 0.08)"}
    const height_100 = {height:"100px",lineHeight:"100px"}
    const height_50 = {height:"50px",lineHeight:"50px"}
    const height_120 = {height:"160px",lineHeight:"160px"}
    const height_80 = {height:"80px",lineHeight:"80px"}
    const items:Icontent[]=[
//span
        {
            id:1, 
            col:1,
            demo:<div>
                    <Row>
                        <Col span={24}>col-24</Col>
                    </Row>
                    <Row>
                        <Col span={12}>col-12</Col>
                        <Col span={12}>col-12</Col>
                    </Row>
                    <Row>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                    </Row>
                    <Row>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                    </Row>
                </div>, 
            title:"基础栅格",
            description:`从堆叠到水平排列。
            使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。`,
            code:
`
import { Row, Col } from 'sxdui';
<Row>
    <Col span={24}>col-24</Col>
</Row>
<Row>
    <Col span={12}>col-12</Col>
    <Col span={12}>col-12</Col>
</Row>
<Row>
    <Col span={8}>col-8</Col>
    <Col span={8}>col-8</Col>
    <Col span={8}>col-8</Col>
</Row>
<Row>
    <Col span={6}>col-6</Col>
    <Col span={6}>col-6</Col>
    <Col span={6}>col-6</Col>
    <Col span={6}>col-6</Col>
</Row>
`
        },
//gutter
        {
            id:2,
            demo:<div>
                    <Divider orientation="left">Vertical</Divider>
                    <Row gutter={16}>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                    </Row>
                    <Divider orientation="left">Responsive</Divider>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 64, xxl: 64 }}>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                    </Row>
                    <Divider orientation="left">Vertical</Divider>
                    <Row gutter={[16,24]}>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                        <Col span={6}><div style={gutterStyle}>col-6</div></Col>
                    </Row>
                </div>, 
            title:"区块间隔",
            description:`栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px 作为栅格间隔(n 是自然数)。

            如果要支持响应式，可以写成 { xs: 8, sm: 16, md: 24, lg: 32 }。
            
            如果需要垂直间距，可以写成数组形式 [水平间距, 垂直间距] [16, { xs: 8, sm: 16, md: 24, lg: 32 }]。`,
            code:
`
import { Row, Col, Divider } from 'sxdui';
const gutterStyle = { background: '#0092ff', padding: '8px 0' };

<Divider orientation="left">Vertical</Divider>
<Row gutter={16}>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
</Row>
<Divider orientation="left">Responsive</Divider>
<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 64, xxl: 64 }}>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
</Row>
<Divider orientation="left">Vertical</Divider>
<Row gutter={[16,24]}>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
    <Col span={6}><div style={gutterStyle}>col-6</div></Col>
</Row>
`
        },
//offset
        {
            id:3,
            demo:<div>
                    <Row>
                        <Col span={8}>col-8</Col>
                        <Col span={8} offset={8}>col-8</Col>
                    </Row>
                    <Row>
                        <Col span={6} offset={6}>col-6 col-offset-6</Col>
                        <Col span={6} offset={6}>col-6 col-offset-6</Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6}>col-12 col-offset-6</Col>
                    </Row>
                </div>, 
            title:"左右偏移",
            description:`使用 offset 可以将列向右侧偏。例如，offset={4} 将元素向右侧偏移了 4 个列（column）的宽度。`,
            code:
`
import { Row, Col } from 'sxdui';
<Row>
    <Col span={8}>col-8</Col>
    <Col span={8} offset={8}>col-8</Col>
</Row>
<Row>
    <Col span={6} offset={6}>col-6 col-offset-6</Col>
    <Col span={6} offset={6}>col-6 col-offset-6</Col>
</Row>
<Row>
    <Col span={12} offset={6}>col-12 col-offset-6</Col>
</Row>
`
        },
//justify
        {
            id:4,
            demo:<div>
                    <Divider orientation="left">start</Divider>
                    <Row style={boxStyle} justify="start">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>
                    <Divider orientation="left">center</Divider>
                    <Row style={boxStyle} justify="center">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>
                    <Divider orientation="left">end</Divider>
                    <Row style={boxStyle} justify="end">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>
                    <Divider orientation="left">space-between</Divider>
                    <Row style={boxStyle} justify="space-between">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>
                    <Divider orientation="left">space-around</Divider>
                    <Row style={boxStyle} justify="space-around">
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>
                </div>, 
            title:"排版",
            description:`子元素根据不同的值 start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式。`,
            code:
`
import { Row, Col, Divider } from 'sxdui';
const boxStyle = {background:"rgba(128, 128, 128, 0.08)"}

<Divider orientation="left">start</Divider>
<Row style={boxStyle} justify="start">
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
</Row>
<Divider orientation="left">center</Divider>
<Row style={boxStyle} justify="center">
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
</Row>
<Divider orientation="left">end</Divider>
<Row style={boxStyle} justify="end">
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
</Row>
<Divider orientation="left">space-between</Divider>
<Row style={boxStyle} justify="space-between">
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
</Row>
<Divider orientation="left">space-around</Divider>
<Row style={boxStyle} justify="space-around">
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
    <Col span={4}>col-4</Col>
</Row>
`
        },
//align
        {
            id:5,
            demo:<div>
                    <Divider orientation="left">top</Divider>
                    <Row style={boxStyle} justify="center" align="top">
                        <Col span={4}><p style={height_100}>col-4</p></Col>
                        <Col span={4}><p style={height_50}>col-4</p></Col>
                        <Col span={4}><p style={height_120}>col-4</p></Col>
                        <Col span={4}><p style={height_80}>col-4</p></Col>
                    </Row>
                    <Divider orientation="left">middle</Divider>
                    <Row style={boxStyle} justify="center" align="middle">
                        <Col span={4}><p style={height_100}>col-4</p></Col>
                        <Col span={4}><p style={height_50}>col-4</p></Col>
                        <Col span={4}><p style={height_120}>col-4</p></Col>
                        <Col span={4}><p style={height_80}>col-4</p></Col>
                    </Row>
                    <Divider orientation="left">bottom</Divider>
                    <Row style={boxStyle} justify="center" align="bottom">
                        <Col span={4}><p style={height_100}>col-4</p></Col>
                        <Col span={4}><p style={height_50}>col-4</p></Col>
                        <Col span={4}><p style={height_120}>col-4</p></Col>
                        <Col span={4}><p style={height_80}>col-4</p></Col>
                    </Row>
                </div>, 
            title:"对齐",
            description:`子元素垂直对齐。`,
            code:
`
import { Row, Col, Divider } from 'sxdui';
const boxStyle = {background:"rgba(128, 128, 128, 0.08)"}
const height_100 = {height:"100px",lineHeight:"100px"}
const height_50 = {height:"50px",lineHeight:"50px"}
const height_120 = {height:"160px",lineHeight:"160px"}
const height_80 = {height:"80px",lineHeight:"80px"}

<Divider orientation="left">top</Divider>
<Row style={boxStyle} justify="center" align="top">
    <Col span={4}><p style={height_100}>col-4</p></Col>
    <Col span={4}><p style={height_50}>col-4</p></Col>
    <Col span={4}><p style={height_120}>col-4</p></Col>
    <Col span={4}><p style={height_80}>col-4</p></Col>
</Row>
<Divider orientation="left">middle</Divider>
<Row style={boxStyle} justify="center" align="middle">
    <Col span={4}><p style={height_100}>col-4</p></Col>
    <Col span={4}><p style={height_50}>col-4</p></Col>
    <Col span={4}><p style={height_120}>col-4</p></Col>
    <Col span={4}><p style={height_80}>col-4</p></Col>
</Row>
<Divider orientation="left">bottom</Divider>
<Row style={boxStyle} justify="center" align="bottom">
    <Col span={4}><p style={height_100}>col-4</p></Col>
    <Col span={4}><p style={height_50}>col-4</p></Col>
    <Col span={4}><p style={height_120}>col-4</p></Col>
    <Col span={4}><p style={height_80}>col-4</p></Col>
</Row>
`
        },
//order
        {
            id:6,
            demo:<div>
                    <Row>
                        <Col span={6} order={4}>col-order-1</Col>
                        <Col span={6} order={3}>col-order-2</Col>
                        <Col span={6} order={2}>col-order-3</Col>
                        <Col span={6} order={1}>col-order-4</Col>
                    </Row>
                </div>, 
            title:"排序",
            description:`通过 order 来改变元素的排序`,
            code:
`
import { Row, Col } from 'sxdui';
<Row>
    <Col span={6} order={4}>col-order-1</Col>
    <Col span={6} order={3}>col-order-2</Col>
    <Col span={6} order={2}>col-order-3</Col>
    <Col span={6} order={1}>col-order-4</Col>
</Row>
`
        },
//flex
        {
            id:7,
            col:1,
            demo:<div>
                    <Divider orientation="left">Percentage columns</Divider>
                    <Row>
                        <Col flex={2}>2 / 5</Col>
                        <Col flex={3}>3 / 5</Col>
                    </Row>
                    <h5>Fill rest</h5>
                    <Row>
                        <Col flex="100px">100px</Col>
                        <Col flex="auto">Fill Rest</Col>
                    </Row>
                    <Divider orientation="left">Raw flex style</Divider>
                    <Row>
                        <Col flex="1 1 200px">1 1 200px</Col>
                        <Col flex="0 1 300px">0 1 300px</Col>
                    </Row>
                </div>, 
            title:"Flex填充",
            description:`Col 提供 flex 属性以支持填充。`,
            code:
`
import { Row, Col, Divider } from 'sxdui';
<Divider orientation="left">Percentage columns</Divider>
<Row>
    <Col flex={2}>2 / 5</Col>
    <Col flex={3}>3 / 5</Col>
</Row>
<h5>Fill rest</h5>
<Row>
    <Col flex="100px">100px</Col>
    <Col flex="auto">Fill Rest</Col>
</Row>
<Divider orientation="left">Raw flex style</Divider>
<Row>
    <Col flex="1 1 200px">1 1 200px</Col>
    <Col flex="0 1 300px">0 1 300px</Col>
</Row>
`
        },
        {
            id:8,
            
            demo:<div>
                    <Row>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
                        <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
                    </Row>
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
                    </Row>
                </div>, 
            title:"响应式布局",
            description:`预设六个响应尺寸：xs sm md lg xl xxl。
            span pull push offset order 属性可以通过内嵌到 xs sm md lg xl xxl 属性中来使用。
            其中 xs={6} 相当于 xs={{ span: 6 }}。`,
            code:
`
import { Row, Col } from 'sxdui';
<Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
</Row>
<Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
</Row>
`
        },
    ]
    const data_col = [
        {
            key:1,
            arguments: 'span',
            brief: "栅格占位格数，为 0 时相当于 display: none",
            type: 'number',
            default:"-"
          },
          {
            key:2,
            arguments: 'offset',
            brief: "栅格左侧的间隔格数，间隔内不可以有栅格",
            type: 'number',
            default:"0"
          },
          {
            key:3,
            arguments: 'flex',
            brief: "水平排列方式",
            type: 'number',
            default:"start"
          },
          {
            key:4,
            arguments: 'order',
            brief: "栅格顺序",
            type: 'number',
            default:"0"
          },
          {
            key:5,
            arguments: 'xs',
            brief: "屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象",
            type: 'number | object',
            default:"0"
          },
          {
            key:6,
            arguments: 'sm',
            brief: "屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象",
            type: 'number | object',
            default:"-"
          },
          {
            key:7,
            arguments: 'md',
            brief: "屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象",
            type: 'number | object',
            default:"-"
          },
          {
            key:8,
            arguments: 'lg',
            brief: "屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象",
            type: 'number | object',
            default:"-"
          },
          {
            key:9,
            arguments: 'xl',
            brief: "屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象",
            type: 'number | object',
            default:"-"
          },
          {
            key:10,
            arguments: 'xxl',
            brief: "屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象",
            type: 'number | object',
            default:"-"
          },
    ]
    const data_row=[
        {
          key:1,
          arguments: 'gutter',
          brief: "栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]",
          type: 'number | object | array',
          default:"0"
        },
        {
          key:2,
          arguments: 'align',
          brief: "垂直对齐方式",
          type: 'top | middle | bottom',
          default:"top"
        },
        {
          key:3,
          arguments: 'justify',
          brief: "水平排列方式",
          type: 'start | end | center | space-around | space-between',
          default:"start"
        },
        /*{
          key:4,
          arguments: 'wrap',
          brief: "是否自动换行",
          type: 'boolean',
          default:"true"
        },*/
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
            <h2>Row</h2>
            <Table data={data_row} columns={columns} />
            <h2>Col</h2>
            <Table data={data_col} columns={columns} />
        </div>
      
      
    const document:Iprops = {
        brief:brief,
        content:items,
        api:api
    }
    return (<Document document={document}/>)
}
export default ButtonPage