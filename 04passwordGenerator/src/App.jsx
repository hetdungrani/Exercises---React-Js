import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setpassword] = useState("");
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [charactor, setcharactor] = useState(false);
  const [text, settext] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (charactor) str += "!@#$%^&*";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, number, charactor]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, charactor, passwordGenerator]);

  const passwordref = useRef(null);

  const copypassword = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

   const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      settext(clipboardText);
    } catch (error) {
      console.error('Failed to read clipboard text:', error);
    }
  };
  return (
    <div className="bg-black w-full h-screen flex justify-center flex-wrap items-center m-auto">
      <div className="bg-white h-80 w-250 text-center p-5 ">
        <h1 className="font-bold text-4xl ">Password Generator</h1>
        <div className="flex mt-10 gap-1">
          <input
            type="text"
            placeholder="Password"
            // value={password}
            defaultValue={password}
            readOnly
            ref={passwordref}
            className="outline-none text-black rounded-sm w-full h-10 p-7  bg-gray-100 text-xl"
          />
          <button
            className="w-50 h-14 bg-blue-900 rounded-sm text-xl text-white hover:bg-blue-600 cursor-pointer"
            onClick={copypassword}
          >
            Copy
          </button>
        </div>
        <div className="flex  w-20 justify-around items-center gap-2 text-xl mt-5">
          <input
            type="range"
            min={7}
            max={50}
            className="cursor-pointer "
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          Length:{length}
          <input
            type="checkbox"
            name="number"
            id=""
            defaultChecked={number}
            onChange={() => {
              setnumber((prev) => !prev);
            }}
            className="cursor-pointer ml-5"
          />
          Number
          <input
            type="checkbox"
            name="character"
            id=""
            defaultChecked={charactor}
            onChange={() => {
              setcharactor((prev) => !prev);
            }}
            className="cursor-pointer"
          />
          Character
        </div>
        <div className="flex mt-10 gap-1">
          <input
            type="text"
            // value={text}
            defaultValue={text}
            readOnly
            className="w-full h-10 p-7 text-xl text-black outline-none bg-gray-100  "
            placeholder="Paste here..."
          />
          <button
            className="w-50 h-14 bg-blue-900 rounded-sm text-xl text-white hover:bg-blue-600 cursor-pointer"
            onClick={handlePaste}
          >
            Paste
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
