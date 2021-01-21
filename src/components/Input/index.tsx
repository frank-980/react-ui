import React,{useState, useEffect,useRef} from 'react'
import classNames from 'classnames';
import Icon from '../Icon'
import {Select} from '../Select'
import { clear } from 'console';
interface IInput  {
    size?:string;
    style?:object;
    placeholder?:string;
    value?:any;
    defaultValue?:any;
    prefix?:any;
    suffix?:any;
    addonBefore?:any;
    addonAfter?:any;
    clearable?:boolean;
    children?:any;
    //事件
    onChange?:any;
    onClick?:any;
}
const Input:React.FC<IInput> = (props:IInput)=>{
    const {style,size="default",placeholder="", value="",defaultValue="", prefix="", suffix="", addonBefore, addonAfter, clearable=false, onChange=()=>{},onClick=()=>{}} = props
    const [valueInner,setValue] = useState(value)
    const handleChange = (e:any)=>{
        let value = e.target.value
        setValue(value)
        onChange(value)
    }
    
    const renderInput = ()=>{
        return (
            <input className="sxd-input" onClick={()=>{onClick()}} placeholder={placeholder} value={valueInner} onChange={(e)=>handleChange(e)}/>
        )
    }
    const [isFocus,setFocus] = useState(false)
    const classes = classNames("sxd-input-wrap",{
        [`sxd-wrap-${size}`]:size,
        ["sxd-input-wrap-focus"]:isFocus
    })
    const inputWrapRef:any = useRef();
    const fn = (e:any)=>{
        removeListener()
        setFocus(false) 
        
    }
    const addListener = ()=>{
        document.addEventListener('click', fn, true);
    }
    const removeListener = ()=>{
        document.removeEventListener('click', fn, true);
    }
    const wrapFocus = ()=>{
        addListener();
        setFocus(true)
    }
    const beforeInfo = ()=>{
        if(typeof addonBefore==='string'){
            return (<span className="groupAdd">{addonBefore}</span>)
        }
        return addonBefore
    }
    const afterInfo = ()=>{
        if(typeof addonAfter==='string'){
            return (<span className="groupAdd">{addonAfter}</span>)
        }
        return addonAfter
    }
    const wrapInput = ()=>{
        if(size!=="default" || prefix!=="" || suffix!=="" || addonBefore!=="" || addonAfter!=="")
        {
            return (
                <div className="groupWrap">
                    {beforeInfo()}
                    <div className={classes}  style={style} onClick={()=>{wrapFocus()}} ref={inputWrapRef}>
                        {prefix}
                        
                        {renderInput()}
                        
                        {clearable && valueInner!==""?(
                            <Icon 
                            icon="icon-close-bold" 
                            style={{cursor:"pointer"}}
                            onClick={()=>setValue("")}
                            />
                            ):""}
                        {suffix}
                    </div>
                    {afterInfo()}
                </div>
            )
        }
        return (
            <div className={classes}  style={style} onClick={()=>{wrapFocus()}} ref={inputWrapRef}>
                {renderInput()}
            </div>
        )
    }
    return wrapInput()
}


interface IOptions  {
    key?:any;
    value:number|string;
    label?:number|string;
}
interface IFilterOptions{
    key:any;
    isShow:boolean;
    value:number|string;
    label:number|string;
}
interface IAutoComplete  {
    defaultValue?:number|string;
    options:IOptions[];
    placeholder?:string;
    onChange?:any;
    style?:object;
}
const AutoComplete:React.FC<IAutoComplete> = (props:IAutoComplete)=>{
    const { defaultValue="",style,placeholder,options, onChange=()=>{}} = props
    const [inputVal,setInputVal] = useState(defaultValue)
    const inputWrapRef:any = useRef();
    const fn = (e:any)=>{
        removeListener()
        if(inputWrapRef.current!==e.target && !inputWrapRef.current.contains(e.target||"")){
            setShowStatus(false)  
        }
    }
    const addListener = ()=>{
        document.addEventListener('click', fn, true);
    }
    const removeListener = ()=>{
        document.removeEventListener('click', fn, true);
    }
    const initData = ()=>{
        if(!options || options.length<1){
            return []
        }
        let initData:IFilterOptions[]=[]
        for(let i=0;i<options.length;i++){
            if(!options[i].key) options[i].key=options[i].value
            initData.push({
                key:options[i].key,
                isShow:true,
                label:options[i].label || options[i].value,
                value:options[i].value,
            })
        }
        return initData
    }
    const [filterOptions,setOptions] = useState(initData())
    const [isShowOption,setShowStatus] = useState(false)
    const handleChange = (v:number|string)=>{
        onChange(v)
        setInputVal(v)
        setOptions(filterOptions.map((item:IFilterOptions)=>{
            return {...item,isShow:item.value.toString().indexOf(v.toString())>-1}
        }))
    }
    const handleClick = (item:IFilterOptions,e:any)=>{
        e.stopPropagation()
        handleChange(item.value)
        setShowStatus(false)
        removeListener()
    }
    const OptionList = ()=>{
        if(isShowOption && filterOptions.length>0 && filterOptions.some((item:IFilterOptions)=>item.isShow)){
            return (
                <div className="selectOptions" style={{top:'35px'}}>
                    {filterOptions.filter((item:IFilterOptions)=>{
                        return item.isShow
                    }).map((info:IFilterOptions)=>{
                        return (
                            <div className="optionItem" key={info.key} onClick={(e)=>handleClick(info,e)}>
                                {info.label}
                            </div>
                        )
                    })
                    }
                </div>
            )
        }
        return ""
    }
    return (
        <div className="select" ref={inputWrapRef}>
            <input 
            className="sxd-input" 
            placeholder={placeholder}
            value={inputVal} 
            onChange={(e:any)=>{handleChange(e.target.value)}} 
            onClick={()=>{setShowStatus(true);addListener()}} 
            />
            {OptionList()}
        </div>
        )
}
export {Input,AutoComplete}