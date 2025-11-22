import { useCallback, useEffect, useState } from "react";

function App() {
  const [pasLength, setPassLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str = str + "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_=+[]{}~`";
    }
    for (let i = 1; i <= pasLength; i++) {
      let indx = Math.floor(Math.random() * str.length + 1); // Read random number from w3school
      // pass = pass + str[indx]
      pass += str.charAt(indx);
    }
    setPassword(pass);
  }, [pasLength, charAllowed, numberAllowed, setPassword]);
  // passwordGenerator()
  useEffect(()=>{
    passwordGenerator()
  },[pasLength,charAllowed,numberAllowed,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-center text-white mt-5">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black"
            placeholder="Password"
            readOnly
          />
          <button className="cursor-pointer outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={pasLength}
              onChange={(e) => setPassLength(e.target.value)}
              className="cursor-pointer"
            />
            <label htmlFor="">Length: ({pasLength})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultValue={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }} />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultValue={charAllowed}
            id="chatInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }} />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
