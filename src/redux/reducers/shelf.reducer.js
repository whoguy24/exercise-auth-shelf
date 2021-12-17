const shelf = (state = [], action) => {
    switch (action.type) {
      case 'SET_SHELF':
        return action.payload;
      case 'CLEAR_SHELF':
        return [];
      default:
        return state;
    }
  }
  
  export default shelf;