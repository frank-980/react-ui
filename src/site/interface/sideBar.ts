export interface ISideProps{
    changeToAny:any;
    routeActive:string;
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