interface ROMAN_CHARS_DICTIONARY_I {
    M: number,
    CM: number,
    D: number, 
    CD: number,
    C: number,
    XC: number,
    L: number,
    XL: number,
    X: number,
    IX: number,
    V: number, 
    IV: number,
    I: number
}

export type ROMAN_CHARS_PROP_KEYS_T = keyof typeof ROMAN_CHARS_DICTIONARY;

const ROMAN_CHARS_DICTIONARY:ROMAN_CHARS_DICTIONARY_I = {
    M: 1000,
    CM: 900,
    D: 500, 
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5, 
    IV: 4,
    I: 1 
};


export { ROMAN_CHARS_DICTIONARY };