
export interface Icontent{
    id:number;
    col?:number;
    demo?:any;
    title?:string;
    description?:string;
    code?:string;
}
export interface Iprops{
    brief:any;
    api?:any;
    content:Icontent[];
}
export interface IDoc{
    document:Iprops
}