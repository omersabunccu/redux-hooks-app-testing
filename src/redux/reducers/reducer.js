import { data } from "../../assets/data"
import { incrementVote } from "../actions";
function reducer(state = data, actions) {
  if(actions.type===incrementVote){
    const newArra=[]
    for(let i of data){
        if (i.id===actions.payload.voteId){
            i.votes+=1
            newArra.push(i)
        }else{
            newArra.push(i)
        }
    }
    return newArra
  }
  return state;
}
  
export default reducer;
