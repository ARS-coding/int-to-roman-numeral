import React, { useState ,useRef } from "react";
import { intToRomanNumeral } from "./utils";

function App() {
  const romanNumeralResult = useRef<HTMLInputElement>(null);
  const [romanNumeral, setRomanNumeral] = useState("");

  function handleFormSubmit(e:React.FormEvent) {
    // don't refresh the page after form submission
    e.preventDefault();

    // get the input value from the form element, if it's truthy and bigger than 0, call the intToRomanNumeral function with it  
    let intInputValue:number = Number(((e.target as HTMLFormElement)[0] as HTMLInputElement).value);
    if(intInputValue && intInputValue > 0) setRomanNumeral(intToRomanNumeral(intInputValue));
  }

  return (
    <main className="App">
      <form id="form" onSubmit={handleFormSubmit}>
        <input name="int" type="number" min={1} max={3999} />
        <input type="submit" />
      </form>
      <span ref={romanNumeralResult} id="roman-numeral-result">{romanNumeral}</span>      
    </main>
  );
};

export default App;
