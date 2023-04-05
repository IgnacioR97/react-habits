// import {
//   RxFontBold,
//   RxFontItalic,
//   RxListBullet,
//   RxUnderline,
// } from "react-icons/rx";
// import { RiFontColor } from "react-icons/ri";
// import { BiHighlight } from "react-icons/bi";
// import { VscListOrdered } from "react-icons/vsc";

import logo from "../../src/logo-removebg-preview.png";
import { Quill } from "react-quill";

import { RiFontColor } from "react-icons/ri";
import { VscListOrdered, VscListUnordered } from "react-icons/vsc";
import { BsTypeBold, BsTypeItalic } from "react-icons/bs";
import { AiOutlineUnderline } from "react-icons/ai";
import { BiLink, BiHighlight } from "react-icons/bi";
import { MdImage } from "react-icons/md";
import { RxTextAlignCenter } from "react-icons/rx";

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
        <BsTypeBold />
      </button>
      <button className="ql-italic">
        <BsTypeItalic />
      </button>
      <button className="ql-underline">
        <AiOutlineUnderline />
      </button>
    </span>
    <span className="ql-formats">
      <button className="ql-list">
        <VscListUnordered />
      </button>
      <button className="ql-list">
        <VscListOrdered />
      </button>
    </span>
    <span className="ql-formats">
      <select className="ql-color ql-picker ql-color-picker">
        <RiFontColor />
      </select>
      <select className="ql-background">
        <BiHighlight />
      </select>
      <select className="ql-align ql-picker ql-icon-picker">
        <RxTextAlignCenter />
      </select>
      <button className="ql-link">
        <BiLink />
      </button>
      <button className="ql-image">
        <MdImage />
      </button>
    </span>
  </div>
);

//Register the custom icons
const icons = Quill.import("ui/icons");
icons.bold = <BsTypeBold />;
icons.italic = <BsTypeItalic />;
icons.underline = <AiOutlineUnderline />;
icons["list"]["ordered"] = <VscListOrdered />;
icons["list"]["bullet"] = <VscListUnordered />;
icons.color = <RiFontColor />;
icons.background = <BiHighlight />;
icons.link = <BiLink />;
icons.center = <RxTextAlignCenter />;
icons.image = <MdImage />;
Quill.register(icons);

export default CustomToolbar;
