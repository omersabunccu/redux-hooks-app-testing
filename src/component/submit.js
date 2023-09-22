import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from "../redux/actions"

function Submit() {
  const submitMessage=useSelector(msg=>msg.submitResult)
  const dispatch = useDispatch()
  const handleSubmit=()=>{
    dispatch({
        type:actions.submit,
        payload:{
          message: "You made your submission"
        }
    })
  }

  const handleStart=()=>{
    dispatch({
        type:actions.restart,
        payload:{
          message: "You can start another vote again"
        }
    })
  }
  return (
    <div>
      <p>{submitMessage}</p>
      <button onClick={handleSubmit} style={{padding: "10px", fontSize: "1.3rem"}}>Submit your vote</button>
      <br />
      <button disabled={submitMessage==="You have not voted yet"} onClick={handleStart} style={{padding: "10px", fontSize: "1.3rem", marginTop: "10px"}}>Start over</button>
    </div>
  )
}

export default Submit