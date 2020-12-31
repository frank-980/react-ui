import React from 'react';
const Brief:React.FC = ()=>{
    return (
        <section className="brief">
            <h1>Pagination分页</h1>
            <p>采用分页的形式分隔长列表，每次只加载一个页面</p>
            <h2>何时使用</h2>
            <p>采用分页的形式分隔长列表，每次只加载一个页面</p>
            <ul>
                <li>
                    <p>当加载/渲染所有数据将花费很多时间时；</p>
                </li>
                <li>
                    <p>可切换页码浏览数据</p>
                </li>
            </ul>
            <h2>代码演示</h2>
        </section>
    )
}
export default Brief