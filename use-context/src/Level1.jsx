import { useContext } from "react";
import { AuthContext } from "./Level3";

const Level1 = () => {
  const [authState, setAuthState] = useContext(AuthContext);
  console.log(authState, setAuthState);

  function add(){
    // AuthContext["add"] = 112;
    setAuthState((prevState)=>{
      return {...prevState, add: 111}
    })
  }

  return (
    <>
      <h3>Level1</h3>
      <button onClick={add}>Add to context!</button>
      <p>{JSON.stringify(authState, null, 2)}</p>
    </>
  );
};

export default Level1;
