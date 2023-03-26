import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback } from "react";
import { RxFontBold } from "react-icons/rx";
import { TbOld } from "react-icons/tb";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const icons = Quill.import("ui/icons");
icons.bold = <h1>hello</h1>;

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

  return <div className="container" ref={wrapperRef}></div>;
};
export default TextEditor;
