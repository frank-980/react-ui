const setItem = (state=[{id:1,mark:false},{id:2,mark:true}],action)=>{
    if(action.type==="mark"){
        return state.map((item)=>{
            if(item.id===action.id){
                return {...item,mark:!item.mark}
            }
            return item
        })
    }else{
        return state
    }
}
export default setItem