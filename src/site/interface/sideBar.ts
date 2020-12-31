export interface ISideProps{
    changeToAny:any;
    routeActive:number;
    width:number;
}

export interface ISideData{
    text:string,
    children:{
        id:number,
        text:string,
        path:string,
    }[]
}