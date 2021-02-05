export interface ISideProps{
    style?:object;
}
export interface ISideData{
    text:string,
    children:{
        id:number,
        text:string,
        path:string,
    }[]
}