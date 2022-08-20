import { useEffect, useState } from "react"

//出现0的情况时转为true不是就为value
export const isFalsy = (value:unknown)=>value===0?false:!value
export const cleanObject = (object:object) =>{
    const result = {...object}
    Object.keys(result).forEach(key=>{
        //获取value的值
        //@ts-ignore
        const value = result[key]
        if(isFalsy(value)){
            //@ts-ignore
            delete result[key]
        }
    })
    return result
}
export const useMount=(callback:()=>void)=>{
    useEffect(()=>{
        callback()
    })
}
export const useDebounce = (value:unknown,delay?:number):any=>{
    const [debouncedValue,setDebouncedValue] = useState(value)
    useEffect(()=>{
        //每次在value变化以后，设置一个定时器
        const timeout = setTimeout(()=>setDebouncedValue(value),delay)
        //每次在上一个useEffect处理完以后在执行
        return () => clearTimeout(timeout)

    },[value,delay])
    return debouncedValue
}