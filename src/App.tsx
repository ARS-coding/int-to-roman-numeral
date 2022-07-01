import React, { useState ,useRef } from "react";
import { intToRomanNumeral } from "./utils";

function App() {
  const intInput = useRef<HTMLInputElement>(null);
  const [romanNumeral, setRomanNumeral] = useState("");

  function handleFormSubmit(e:React.FormEvent) {
    // don't refresh the page after form submission
    e.preventDefault();

    // get the input value, if it's truthy and bigger than 0, call the intToRomanNumeral function with it  
    let intInputValue:number|undefined = Number(intInput.current?.value);
    if(intInputValue && intInputValue > 0) setRomanNumeral(intToRomanNumeral(intInputValue));
  }

  return (
    <main className="App">
      <form id="form" onSubmit={handleFormSubmit} data-testid="form">
        <input ref={intInput} name="int" type="number" min={1} max={3999} data-testid="input" />
        <button type="submit" data-testid="button">Convert!</button>
      </form>
      <span id="roman-numeral-result" data-testid="result">{romanNumeral}</span>      
    </main>
  );
};

export default App;
