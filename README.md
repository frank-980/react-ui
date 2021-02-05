# SXD-UI

create-react-app + typescript 组件库
npx create-react-app my-app --template typescript


### [开始](https://www.yuque.com/frank980/ygs3ps/ny150b)
## [布局](https://www.yuque.com/frank980/ygs3ps/axkst9)
## 组件
1. 通用：
    - button 按钮
    - Icon 图标
2. 布局：
    - Divider分割线
    - Grid 栅格
3. 数据录入：
    - [Select 选择器](https://www.yuque.com/frank980/ygs3ps/ec6x00)
    - Checkbox 多选框
    - Input 输入框
4. 数据展示：
    - Table 表格

#Update Log
2021-1-30
优化site目录下文件结构逻辑
1. ContentBar从layout中抽离到components的content中，
2. codePerview拆分成3个组件Preview，Introduce，Code
3. 修改了一些组件和参数的名字
删除layout文件夹下content文件夹，header，leftNav更换文件名siderBar，footer和index
新增component文件夹下content文件夹，新增brief，demoList，params和index文件。
新增demo文件夹，新增Preview，Introduce，Code，index文件

2021-2-1
优化路由和路由入场过渡逻辑
1. switch包裹在layout中，route从render渲染改为component渲染
<Switch>
	 <Route exact path='/button' render={(props)=><Layout {...props}><ButtonPage/></Layout>}/>
</Switch>

<Layout>
	<Switch>
		 <Route exact path='/button' component={ButtonPage}/>
	</Switch>
</Layout>
2.入场动画CSSTransition从layout抽离到router的switch外层，使用TransitionGroup + CSSTransition
3.添加路由表统一管理，侧边栏SiderBar引入路由表
4.删除redux中管理入场动画的Reducer和State