import { useState } from "react";

const Likes = (props) => {

const [stateHijo, setStateHijo] = useState("")

const handleInput=(e)=>{
  console.log(e.target.value);
  setStateHijo(e.target.value)
  console.log(stateHijo);
}

const tempValue="vañpr"


//(function () {
  //props.updateState()
//})();

  return (
    <>
      <input type="text" placeholder="Son" onChange={handleInput} value={stateHijo} ></input>
      <h1>Estado hijo: {tempValue}</h1>
    </>
  )
};

export default Likes;