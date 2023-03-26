import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback } from "react";
import Toolbar from "./Toolbar";

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
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper === null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
  }, []);

  return (
    <div>
      <Toolbar options={TOOLBAR_OPTIONS} />
      <div className="container" ref={wrapperRef}></div>
    </div>
  );
};

export default TextEditor;
