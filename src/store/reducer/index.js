const INITIAL_STATE={
    users:[],
    current_user:{}
}
export default (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case "SETUSER":
            return({
                ...state,
                current_user:action.payload
            })
        case "SETFIREBASEUSER":
            return({
                ...state,
                users:action.payload
            })
        
        


            default:
                return state;
    }
}