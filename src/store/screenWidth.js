
const screenWidth = (state={width:window.innerWidth} , action) => {
    switch (action.type) {
      case 'setWidth':
          return { width:action.payload.width }
      default:
        return state;
    }
  };
  export default screenWidth