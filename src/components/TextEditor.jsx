import React, { useState } from "react";
import ReactQuill from "react-quill";
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
