import { useState } from "react";
import { RickAndMortyChars } from "./components/RickAndMortyChars";
import { Launches } from "./components/Launches";
import { Text } from "./components/Text";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const name = "Nenad";
  const country = "PL";

  const [count, setCount] = useState(0);

  const [input, setInput] = useState('');

const handleUserInput = (event) => {
  const text = event.target.value;
  let newText = '';
  newText = text.replace(/[aA]+/, '');
  // newText = text.replace('a', '');
  setInput(newText);
}

  return (
    <>
    <Launches></Launches>
    {/* <RickAndMortyChars></RickAndMortyChars> */}
      {/* <Text name={name} country={country} /> */}
      {/* <button onClick={() => setCount(count + 1)}>Click me {count}</button> */}
      {/* <div><h1
      className="first-h1"
      style={{ backgroundColor: "lightsalmon", fontSize: "25px" }}
    >
      Cao DevLab React
    </h1>
    <h2 onClick={() => console.log("Cao")}>
      {name} <span>Miks</span> -{" "}
      <span style={{ fontStyle: "italic" }}>{country}</span>
    </h2>
    <p dangerouslySetInnerHTML={{ __html: "<b>Ponedjeljak</b>" }}></p></div> */}

    {/* <input name='test' value={input} onChange={handleUserInput} /> */}
    </>
  );
}

export default App;
