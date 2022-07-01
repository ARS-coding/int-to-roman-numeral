import { ROMAN_CHARS_DICTIONARY, ROMAN_CHARS_PROP_KEYS_T } from "./constants";

function intToRomanNumeral(numberToConvert:number) {
  let romanNumeral:string = ""; // we are gonna accumulate this string

  while(numberToConvert > 0) {
    let romanChar:ROMAN_CHARS_PROP_KEYS_T;
    for (romanChar in ROMAN_CHARS_DICTIONARY) { // loop over the keys of ROMAN_CHARS_DICTIONARY 
      const romanIntValue:number = ROMAN_CHARS_DICTIONARY[romanChar]; // the current roman numeral's int value
      if (numberToConvert >= romanIntValue) { // if the current state of given numberToConvert is equal or greater than the current roman numeral's int value..
        numberToConvert -= romanIntValue; // remove current roman numeral's int value from the current state of numberToConvert  
        romanNumeral += romanChar; // and append the current roman character to the romenNumeral accumulator string
        break; // start evaluating from a thousand to 1 again
      };
    }
  }

  return romanNumeral;
};

export { intToRomanNumeral };