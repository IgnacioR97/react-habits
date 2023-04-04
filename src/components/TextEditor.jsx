/*/
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback, useState } from "react";
import { RxFontBold } from "react-icons/rx";
import { IconContext } from "react-icons";

import logo from "../../src/logo-removebg-preview.png";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const TextEditor = () => {
  const [wordCount, setWordCount] = useState(0);
  const [title, setTitle] = useState("");

  console.log(RxFontBold);
  console.log(<RxFontBold />);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper === null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, {
      placeholder: "Enter text here...",
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
  }, []);

  return (
    <>
      {<img src={logo} alt="logo" className="logo" />
      <div className="title-container">
        <input
          type="text"
          name="tittle"
          id="tittle"
          className="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="word-count">Word count: {wordCount}</p>
      </div> }
      <div className="container" ref={wrapperRef}></div>
    </>
  );
};
export default TextEditor;
/*/

import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomToolbar from "./CustomToolbar";

const App = () => {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    const index = value === "" ? 0 : parseInt(value, 10) - 1;
    const formats = ["1", "2", "3", false];
    const format = formats[index];
    const quill = ReactQuill.Quill.find(document.querySelector(".ql-editor"));
    quill.format("header", format);
  };

  return (
    <div className="container">
      <CustomToolbar />
      <ReactQuill
        value={value}
        onChange={handleChange}
        modules={{ toolbar: "#toolbar" }}
        placeholder="Enter text here..."
      />
    </div>
  );
};

export default App;
