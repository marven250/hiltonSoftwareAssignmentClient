export default (state = false, action)=>{
    switch(action.type){
        case 'UPDATE_SEARCH_BOOLEAN' :
            return action.payload;   
        default:
            return state;
    };
};