import { createContext } from "react"
import Child from "./Child";

const Mycontext = createContext();

const contextState = "I love monkeys!"

const Parents = () => {
  return <Mycontext.Provider value={contextState}>
    <Child/>
  </Mycontext.Provider>
}

export default Parents;
export {Mycontext}