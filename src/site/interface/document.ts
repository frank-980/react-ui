export interface IBrief{
    introduce?:any;
}
export interface Icontent{
    id:number;
    col?:number;
    demo?:any;
    title?:string;
    description?:string;
    code?:string;
}
export interface Iprops{
    brief:IBrief;
    api?:any;
    content:Icontent[];
}
export interface IDoc{
    document:Iprops
}