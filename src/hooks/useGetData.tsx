import {useState,useEffect} from 'react'
import axios from 'axios'
const useGetData = (url:string,deps:any[]=[]):any=>{
    const [load,setLoading] = useState(false)
    const [data,setData] = useState<any>({})
    useEffect(()=>{
        setLoading(true)
        axios.get(url).then(res=>{
            setData(res.data)
            setLoading(false)
        })
    },deps)
    return [ data, load ]
}
export default useGetData