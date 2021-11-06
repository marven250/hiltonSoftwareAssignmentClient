export default (state = null, action)=>{
    switch(action.type){
        case 'UPDATE_CURRENT_VOLCANO' :
            return action.payload;   
        default:
            return state;
    };
};