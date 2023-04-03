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
import {
  RxFontBold,
  RxFontItalic,
  RxListBullet,
  RxUnderline,
} from "react-icons/rx";
import { RiFontColor } from "react-icons/ri";
import "react-quill/dist/quill.snow.css";

import logo from "../../src/logo-removebg-preview.png";
import { VscListOrdered } from "react-icons/vsc";

//Custom toolbar module
const CustomToolbar = () => (
  <div id="toolbar" className="toolbar">
    <img src={logo} alt="logo" className="logo" />
    <select className="ql-header" defaultValue="">
      <option value="1">Heading 1</option>
      <option value="2">Heading 2</option>
      <option value="3">Heading 3</option>
      <option value="">Normal</option>
    </select>
    <span className="ql-formats">
      <button className="ql-bold">
        <RxFontBold />
      </button>
      <button className="ql-italic">
        <RxFontItalic />
      </button>
      <button className="ql-underline">
        <RxUnderline />
      </button>
    </span>
    <span className="ql-formats">
      <button className="ql-list">
        <RxListBullet />
      </button>
      <button className="ql-list">
        <VscListOrdered />
      </button>
    </span>
    <span className="ql-formats">
      <button className="ql-color">
        <span className="ql-formats">
          <RiFontColor />
          <select className="ql-color" value="">
            <option value="red"></option>
            <option value="orange"></option>
            <option value="yellow"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="purple"></option>
          </select>
        </span>
      </button>

      <select className="ql-background" />
      <select className="ql-align" />
      <button className="ql-link" />
      <button className="ql-image" />
    </span>
  </div>
);

// Register the color attribute with Quill
const colorStyle = Quill.import("attributors/style/color");
Quill.register(colorStyle, true);

//Register the custom icons
const icons = Quill.import("ui/icons");
icons["bold"] = <RxFontBold />;
icons["italic"] = <RxFontItalic />;
icons["underline"] = <RxUnderline />;
icons["list"]["bullet"] = <RxListBullet />;
icons["list"]["ordered"] = <VscListOrdered />;
icons["color"] = <RiFontColor />;

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
