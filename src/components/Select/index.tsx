import React,{useState, useEffect, useRef} from 'react';
import classNames from 'classnames';
import Icon from '../Icon'
interface ISelect{
    mode?:string;
    defaultValue?:any;
    clearable?:boolean;
    children?:any;
    childrenArray?:any;
    style?:object;
    onChange?:any;
}
interface IOption{
    children:any;
    value?:any;
    label?:any;
}
interface ISelectInfo{
    key:string;
    isSelect:boolean;
    value:any;
    label:any;
    
}
//util工具方法
const getInnerText = (child:any)=>{
    if(typeof child.children==='string'){
        return child.children
    }else{
        return child.value
    }
}
const isSelect = (dv:any,cv:any)=>{
    if(typeof dv==="string"){
        return dv===cv
    }else if(typeof dv==="object"){
        return dv.indexOf(cv)>-1
    }
    return false
}

const Option:React.FC<IOption>=(props:IOption)=>{
    return (
        <div>
            <p>{props.children}</p>
        </div>
    )
}
const Select:React.FC<ISelect> = (props)=>{
    const { children=[], onChange=()=>{}, clearable, defaultValue=[], mode, style } = props;
    // init
    const setInitData = ()=>{
        
        if(!children || children.length<1){
            return []
        }
        let initData:ISelectInfo[]=[]
        for(let i=0;i<children.length;i++){
            initData.push({
                key:children[i].props.key || children[i].props.value,
                isSelect:isSelect(defaultValue,children[i].props.value),
                label:children[i].props.label || getInnerText(children[i].props) || "",
                value:children[i].props.value,
            })
        }
        return initData
    }
    //usestate
    const [isShowOption,setShowStatus] = useState(false)
    const [iconRotate,setIconRotate] = useState({ transform:"rotate(0deg)" })
    const [top,setTop] = useState(40)
    const [selectedInfo,setselectedInfo] = useState<ISelectInfo[]>( setInitData() )
    //点击事件监听
    const selectRef:any = useRef();
    const fn = (e:any)=>{
        if(mode!=="multiple"){
            removeListener()
        }
        if(selectRef.current!==e.target && !selectRef.current.contains(e.target||"")){
            setShowStatus(false) 
            removeListener()
        }
    }
    const addListener = ()=>{
        window.addEventListener('click', fn, true);
    }
    const removeListener = ()=>{
        window.removeEventListener('click', fn, true);
    }

    let flag=useRef(true)
    useEffect(()=>{
        let doc:HTMLElement | null = document.getElementById("calcHeight")
        let height:number = doc?doc.clientHeight:32
        setTop(10+height)
        if(flag.current){
            flag.current=false
            return
        }
        if(mode==="multiple"){
            let emitVal:any[]=[]
            selectedInfo.map((item:ISelectInfo)=>{
                if(item.isSelect) emitVal.push(item.value)
            })
            onChange(emitVal)
        }else{
            selectedInfo.map((item:ISelectInfo)=>{
                if(item.isSelect) onChange(item.value)
            })
            setShowStatus(false)
        }
    },[selectedInfo])
    //onclick事件： 清空，下拉，选择
    const handleClear = (e:any)=>{
        e.stopPropagation();
        setselectedInfo(selectedInfo.map((info:ISelectInfo)=>{
            return {...info,isSelect:false}
        }))
    }
    const dropDown = ()=>{
        addListener();
        setShowStatus(!isShowOption)
    }
    const multipleClick = (item:any,e:any)=>{
        e.stopPropagation()
        if(mode==="multiple"){ 
            //此处更新为异步
            setselectedInfo(selectedInfo.map((info:ISelectInfo)=>{
                if(info.key===(item.key || item.value)){  
                    return {...info,isSelect:!info.isSelect}
                }
                return info
            }))
        }else{
            setselectedInfo(selectedInfo.map((info:ISelectInfo)=>{
                if(info.key===(item.key || item.value)){
                    
                    return {...info,isSelect:true}
                }
                return {...info,isSelect:false}
            }))
        }
    }
    //展示框
    const displayArea = ()=>{
        const selectedClass=classNames("selectedText",{"selectedText-focus":isShowOption})
        const dropDownIcon = mode!=="multiple"
            ?(<Icon className="suffixIcon" style={isShowOption?{transform:"rotate(-180deg)"}:{transform:"rotate(0deg)"}} icon="icon-arrow-down-bold"/>)
            :"";
        const clearIcon = clearable && selectedInfo.some((item:ISelectInfo)=>item.isSelect)
            ?(<span className="clearIcon" onClick={(e)=>handleClear(e)}>
                <Icon style={{fontSize:"14px"}} icon="icon-close-bold"/>
            </span>)
            :"";
        const displayInline =(item:any)=>{
            if(item.isSelect){
                return mode==="multiple"
                    ?(
                        <div className="multipleItem" key={item.key}>
                            <span className="item-label">
                                {item.label}
                            </span>
                            <span onClick={(e)=>multipleClick(item,e)}>
                                <Icon className="item-icon" icon="icon-close-bold"/>
                            </span>
                        </div>
                    )
                    :(
                        <div style={{paddingRight:"12px"}} key={item.key}>
                            {item.label}
                        </div>
                    )
            }
            return ""
        } 
        return (
            <div className={selectedClass} onClick={()=>dropDown()}>
                <div className="multipleBox" id={isShowOption?"calcHeight":""}>
                    {selectedInfo.map((item:ISelectInfo)=>{
                        return displayInline(item)
                    })}
                </div>
                {dropDownIcon}
                {clearIcon}
            </div>
        )
    }
    //列表
    const OptionList = ()=>{
        if(isShowOption){
            if(children && children.length>0){
                const row = (info:any)=>{
                    const optionsClasses = classNames("optionItem",{"optionItem-selected":info.isSelect})
                    const iconArea = info.isSelect?(<div><Icon style={{color:"#1890ff"}} icon="icon-select"/></div>):""
                    return mode==="multiple"
                        ?(<div className={optionsClasses} key={info.key} onClick={(e)=>multipleClick(info,e)}>
                            <div style={{flex:"auto",userSelect: "none"}}>
                                {info.label}
                            </div>
                            {iconArea}
                        </div>)
                        :(<div className={optionsClasses} key={info.key} onClick={(e)=>multipleClick(info,e)}>
                            {info.label}
                        </div>)
                }
                return (
                    <div className="selectOptions" style={{top:top+'px'}}>
                        {selectedInfo.map((info:ISelectInfo)=>{
                            {return row(info)}
                        })}
                    </div>
                )
            }else{
                return (
                    <div className="selectOptions">
                        <div>no data</div>
                    </div>
                )
            }
        }
        return ""
    }
    return (
        <div className="select"  style={style} ref={selectRef}>
            {displayArea()}
            {OptionList()}
        </div>
    )
}
export {Select,Option}