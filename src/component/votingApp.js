import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../redux/actions'
function VotingApp() {
    const programmingLang = useSelector(data => data)
    const dispatch=useDispatch()
    const styles = {
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        border: "1px solid gray",
        fontSize: "2rem"
    }
    console.log(programmingLang, "<<<<<<<<<<<<")
    const handleVote=(id)=> {
        dispatch(
            {
                type:actions.incrementVote,
                payload:{
                    voteId: id,
                }
            }
        )
        
    }
  return (
    <div style={{width: "30%", margin: '20px auto'}}>
        {programmingLang.votingApp.map(item=>{
            return(
                <div style={styles}>
                    <div>{item.language}</div>
                    <div>{item.votes}</div>
                    <div><button onClick={()=>handleVote(item.id)}>+</button></div>
                </div>
            )
        })}
    </div>
  )
}

export default VotingApp  