// import { useSelector } from "react-redux";
import VotingApp from "./component/votingApp";
import Submit from "./component/submit"
// import store from "./redux/store"
import "./App.css";

function App() {
  // const programmingLangs = useSelector(data => data);
  // console.log(programmingLangs, "<<<<<<<<<<<");
  // store.getState()
  return (
    <div className="App">
      <h3>
      Voting App
      </h3>
      <VotingApp />
      <Submit/>
    </div>
  );
}

export default App;

//1.30.26
