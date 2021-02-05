import React from 'react';
class Item extends React.PureComponent<any,any> {
    constructor(props:any){
        super(props)
        this.state={
            mark : this.props.mark
        }
    }
    /*shouldComponentUpdate(nextProps:any, nextState:any){
        if(nextProps.mark === this.state.mark){
            return false
        }
        return true
    }*/
    isMark(mark:boolean){
        if(!mark){
            return (
                <p style={{height:"50px",marginTop:"20px"}} onClick={this.props.onClick}>{this.props.id}</p>
            )
        }else{
            return (
                <p style={{border:"red 1px solid ",height:"50px",marginTop:"20px"}} onClick={this.props.onClick}>{this.props.id}</p>
            )
        }
    }
    render(){
        return this.isMark(this.props.mark)
    }
}
export default Item