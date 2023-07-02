import React,{useContext} from "react"
import {AppState} from "../App"
import {NameContext} from "../App"

const ComC = () => {
  const appdata = useContext(AppState);
  const name = useContext(NameContext);

  return (
    <div className="compc">
    <div>ComC</div>
    <h1>{appdata.data}</h1>
    <h1>{name.name}</h1>
    <h1>{name.age}</h1>
    </div>
  )
}

export default ComC