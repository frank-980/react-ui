export interface IBrief{
    h1:string;
    h1p:string;
    h2p?:any;
}
export interface Icontent{
    id:number;
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