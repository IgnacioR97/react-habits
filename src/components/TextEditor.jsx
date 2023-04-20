import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomToolbar from "./CustomToolbar";
import { useGlobalContext } from "../context";

const App = () => {
  const [value, setValue] = useState("");
  const { title, setTitle } = useGlobalContext();
  const inputRef = useRef(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleInput = (value) => {
    setTitle(value);
    if (value === "") {
      inputRef.current.style.width = "auto";
    } else {
      inputRef.current.style.width = `${inputRef.current.scrollWidth + 1}px`;
    }
  };

  const getWordCount = () => {
    const text = value.replace(/\s+/g, " ").trim();
    const words = text.split(" ").filter(Boolean);
    return words.length;
  };

  return (
    <div className="container">
      <CustomToolbar />
      <div className="text-editor">
        <input
          type="text"
          className="title"
          placeholder="Title:"
          data-form-type="other"
          ref={inputRef}
          onChange={(e) => handleInput(e.target.value)}
          value={title}
        />
        <p className="word-count">Word Count: {getWordCount()}</p>
        <ReactQuill
          value={value}
          onChange={handleChange}
          modules={{ toolbar: "#toolbar" }}
          placeholder="Enter text here..."
        />
      </div>
    </div>
  );
};

export default App;
