import { useContext } from "react"
import { Mycontext } from "./Parents"



const Child = () => {
  const ctx = useContext(Mycontext);

  return (
    <h1>{ctx}</h1>
  )
}

export default Child