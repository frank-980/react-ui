import React from 'react';
import AppRouter from './router'
import Layout from './layout'
const Site:React.FC = (props)=>{
    return (
        <div className="App" style={{overflow:"hidden"}}>
            <Layout>
                <AppRouter />
            </Layout>
        </div>
    )
}
export default Site

