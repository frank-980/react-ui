export interface ISiteProps{
    children:any;
    isShow:boolean;
    width:number;
    changeToAny:any;
    setWidth:any;
    location:any;
}

export interface ISiteState{
    routeInfo:{isShow:boolean;};
    screenWidth:{width:number;};
}