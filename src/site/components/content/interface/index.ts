export interface IDemoList{
    id:number;
    col?:number;
    demo?:any;
    title?:string;
    description?:string;
    code?:string;
}
export interface IDemo{
    id:number;
    col?:number;
    demo?:any;
    title?:string;
    description?:string;
    code?:string;
}

export interface ICode{
    code?:any;
    hideStyle?:object;
}
export interface IPreview{
    demo:any;
}
export interface IIntroduce{
    title?:string;
    description?:string;
    switch_code_display:any;
}