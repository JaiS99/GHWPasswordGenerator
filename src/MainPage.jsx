import React, { useState } from "react";
import { AiOutlineCopy, AiOutlineSave } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { isValidUrl } from "./utils";
import {addPassword} from "./db"
import TableComponent from "./TableComponent"

const MainPage = () => {
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");

  const generatePassword = () => {
    const randomPassword = Math.random().toString(36).slice(-10);
    setPassword(randomPassword);
  };

  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      toast("Password copied to clipboard");
    }
  };

  const savePassword = () => {
    if (password && website && isValidUrl(website)) {
      console.log("Website:", website, "Password:", password);
      addPassword(website, password)
      toast("Password saved successfully!");
    } else {
      toast("Enter valid Website and/or Password");
    }
  };

  return (
    <div>
      <Toaster
        toastOptions={{
          duration: 2000,
          style: {
            background: "#1e40af",
            color: "#cffafe",
          },
        }}
      />
      <div>
        <h1 className="text-4xl text-center font-medium">Password Generator</h1>
        <button
          onClick={generatePassword}
          className="bg-pink-900 text-pink-200 px-4 py-5 mt-10 rounded-lg hover:bg-pink-700 drop-shadow-lg inline-flex items-center"
        >
          Generate Password
          <span className="ml-4">
            <FiRefreshCw className="bg-pink-900 hover:bg-pink-700" size={28} />
          </span>
        </button>
        <div className="block">
          <input
            className="w-3/4 rounded-md border-2 border-pink-700 px-3.5 py-4 text-lg text-pink-950 mt-4"
            readOnly
            value={password}
            placeholder="Password:"
          />
          <button className="ml-4" title="copy-button" onClick={copyPassword}>
            <AiOutlineCopy size={40} className="text-pink-600" />
          </button>
        </div>
      </div>
      <div className="block">
        <input
          className="w-3/4 rounded-md border-2 border-pink-700 px-3.5 py-4 text-lg text-pink-950 mt-4"
          placeholder="Website:"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
        <button className="ml-4" title="save-button" onClick={savePassword}>
          <AiOutlineSave size={40} className="text-pink-600" />
        </button>
        <TableComponent />
      </div>
    </div>
  );
};

export default MainPage;