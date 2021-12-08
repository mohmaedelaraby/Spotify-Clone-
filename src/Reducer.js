 export const initialState={
    user :null,
    playlists:[],
    playing:false,
    item:null,
    discover_weekly: null,
    //remove after finishing because it will alywas open in user page
    //token: ""//'BQBNHXgh2ZXg72DIwtbFakbnenFJHbTHMPwsMnUNk5WFv5v5EMefxvdhkwHBEONuk3ZZqwy6hGqlw5ELpCPncm4td8Dg2HElZnZAsu1KDtNI70-99zdgwN9QL18OoZEwLfJeGtxq1O4UUby09ZW1glp8a_supRmge9_1ZLtejOx9z5niWhmA'
};

const reducer =(state,action)=>{

    console.log(action)
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
            user:action.user
            };

     
        case "SET_ITEM":
            return {
                  ...state,
                  item: action.item,
                };
        case 'SET_TOKEN':
            return{
                ...state,
            token:action.token
            };

        case "SET_PLAYLISTS":
            return{
                  ...state,
            playlists: action.playlists
            };

        case "SET_DISCOVER_WEEKLY":
            return{
                 ...state,
                  discover_weekly: action.discover_weekly
                };
        default: return state;

    }
};
export default reducer