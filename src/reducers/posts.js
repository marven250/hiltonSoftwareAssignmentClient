export default (state = [], action)=>{
    switch(action.type){
        case 'FETCH_ALL' :
            return action.payload;
        case 'CREATE' :
            return [...state, action.payload];
        case 'UPDATE': 
            return state.map(volcano=> volcano.name === action.payload.name ? action.payload : volcano);   
        case 'DELETE':
            return state.filter(volcano=> volcano.name !== action.payload);
        case 'SEARCH':
            return action.payload;    
        default:
            return state;
    };
};