import { useState } from "react";
import "./App.css";
import UserInfo from "./components/userInfo";

function App() {
  const [count, setCount] = useState(0);
  const user = {
    name: "Slyvia",
    nationality: "America",
    age: 22,
    status: "student",
    university: "ALU",
  };

  return (
    <>
      <h3>First task :</h3>
      <br />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Push me</button>

      <br />
      <br />

      <h3>Second task:</h3>
      <br />

      <UserInfo {...user}></UserInfo>
    </>
  );
}

export default App;
