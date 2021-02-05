import React from 'react';
import { connect } from 'react-redux';
class Item extends React.Component<any,any> {
    constructor(props:any){
        super(props)
    }
    isMark(mark:boolean){
        if(!mark){
            return (
                <p style={{height:"50px"}} onClick={()=>this.props.setItem(this.props.id)}>{this.props.id}</p>
            )
        }else{
            return (
                <p style={{border:"red 1px solid ",height:"50px"}} onClick={()=>this.props.setItem(this.props.id)}>{this.props.id}</p>
            )
        }
    }
    render(){
        return this.isMark(this.props.mark)
    }
}
function mapState(state:any){
    return {data:state.items}
}
function mapDispatch(dispatch:any){
    return {
        setItem(id:number){
            dispatch({type: 'mark', id})
        }
    }
}
export default connect(mapState,mapDispatch)(Item)