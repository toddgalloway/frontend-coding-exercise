import { useState } from "react";
import axios from "axios";
import { ResultsList } from "./components/ResultsList/ResultsList";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import "./App.css";

const API_URL = "http://localhost:8010/proxy/suburbs.json";

// const API_SAMPLE = [
//   { name: "Sydney South", state: { abbreviation: "NSW" } },
//   { name: "Sydney", state: { abbreviation: "NSW" } },
//   { name: "Sydney International Airport", state: { abbreviation: "NSW" } },
//   { name: "Sydney Domestic Airport", state: { abbreviation: "NSW" } },
//   { name: "Sydenham", state: { abbreviation: "VIC" } }
// ];

export default function App() {
  const [userInput, setInput] = useState("");
  const [result, setResult] = useState([]);

  const handleOnInputChange = (userInput) => {
    axios
      .get(`${API_URL}?q=${userInput}`)
      .then((response) => {
        setResult(response.data);
        console.log(response.data);
      })
      .catch(() => {
      });
  };

  const onSelect = (event) => {
    setInput(event.name + ', ' + event.state.abbreviation);
    setResult([]);
  };

  return (
    <section>
      {/* TODO: Implement a suburb autocomplete using &lt;Input /&gt;,
      &lt;ResultsList /&gt; and &lt;Button /&gt; and data provided by the{" "}
      <a href="http://localhost:8010/proxy/suburbs.json?q=Syd">API</a>. */}
      <div className="container">
        <span className="label">Suburb</span>
        <div className="inputField">
          <Input className="input" onChange={handleOnInputChange} value={userInput} />
          <Button userInput={userInput} />
          <ResultsList items={result} userInput={userInput} onSelect={onSelect} />
        </div>
      </div>
    </section>
  );
}
