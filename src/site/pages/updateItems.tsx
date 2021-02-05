import React from 'react';
import Item from '../components/item'
import { connect } from 'react-redux';
class ItemList extends React.Component<any,any> {
    constructor(props:any){
        super(props)
        
    }
    componentWillMount(){
        console.log()
    }
    render(){
        return (
            <div>
                {
                    this.props.data.map((item:any)=>{
                        return (<Item key={item.id} mark={item.mark} id={item.id} onClick={()=>this.props.setItem(item.id)}/>)
                    })
                }
            </div>
        )
        
    }
}
function mapState(state:any){
    return {data:state.items}
}
function mapReduce(dispatch:any){
    return {
        setItem(id:number){
            dispatch({type: 'mark', id})
        }
    }
}
export default connect(mapState,mapReduce)(ItemList)