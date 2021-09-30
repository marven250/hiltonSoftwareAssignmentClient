export default (state= [], action)=>{
    switch(action.type){
        case 'FETCH_ALL' :
            return action.payload;
        case 'CREATE' :
            return [...state, action.payload];
        case 'UPDATE': 
            return state.map(post=> post.name == action.payload._name ? action.payload : post);   
        case 'DELETE':
            return state
        case 'SEARCH':
            return action.payload;    
        default:
            return state;
    };
};