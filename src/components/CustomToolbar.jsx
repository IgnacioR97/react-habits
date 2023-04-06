import logo from "../../src/logo-removebg-preview.png";
import { Quill } from "react-quill";

import { RiFontColor } from "react-icons/ri";
import { VscListOrdered, VscListUnordered } from "react-icons/vsc";
import { BsTypeBold, BsTypeItalic } from "react-icons/bs";
import { AiOutlineUnderline, AiOutlineUnorderedList } from "react-icons/ai";
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
      <option value="" className="toolbar-icon toolbar-normal">
        Normal
      </option>
    </select>

    <button className="ql-bold">
      <BsTypeBold className="toolbar-icon" />
    </button>
    <button className="ql-italic">
      <BsTypeItalic className="toolbar-icon" />
    </button>
    <button className="ql-underline">
      <AiOutlineUnderline className="toolbar-icon" />
    </button>

    <button className="ql-list" value="bullet">
      <VscListUnordered className="toolbar-icon" />
    </button>
    <button className="ql-list" value="ordered">
      <VscListOrdered className="toolbar-icon" />
    </button>

    <select className="ql-color ql-picker ql-color-picker">
      <BiLink className="toolbar-icon" />
    </select>
    <select className="ql-background">
      <BiHighlight className="toolbar-icon" />
    </select>
    <select className="ql-align ql-picker ql-icon-picker">
      <RxTextAlignCenter className="toolbar-icon" />
    </select>
    <button className="ql-link">
      <BiLink className="toolbar-icon" />
    </button>
    <button className="ql-image">
      <MdImage className="toolbar-icon" />
    </button>
  </div>
);

//Register the custom icons
const icons = Quill.import("ui/icons");
console.log(icons);
icons.bold = <BsTypeBold className="toolbar-icon" />;
icons.italic = <BsTypeItalic className="toolbar-icon" />;
icons.underline = <AiOutlineUnderline className="toolbar-icon" />;
icons["list"][
  "ordered"
] = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class='toolbar-icon'><path fill-rule="evenodd" clip-rule="evenodd" d="M2.287 2.326L2.692 2h.677v3h-.708V2.792l-.374.281v-.747zM5 3h10v1H5V3zm0 4h10v1H5V7zm10 4H5v1h10v-1zM3.742 7.626l.029-.039.065-.09a.84.84 0 0 0 .156-.507c0-.12-.02-.24-.057-.354a.848.848 0 0 0-.492-.529 1.123 1.123 0 0 0-.452-.082 1.094 1.094 0 0 0-.458.087.867.867 0 0 0-.479.522A1.038 1.038 0 0 0 2 6.957v.05h.81v-.05a.3.3 0 0 1 .046-.157.174.174 0 0 1 .057-.054.19.19 0 0 1 .172 0 .188.188 0 0 1 .056.06.24.24 0 0 1 .031.081.445.445 0 0 1-.036.29 1.309 1.309 0 0 1-.12.182l-1 1.138-.012.013v.54h1.988v-.7h-.9l.65-.724zm-.037 3.817c.046.032.086.07.12.114a.841.841 0 0 1 .167.55c0 .107-.017.213-.05.314a.792.792 0 0 1-.487.5 1.288 1.288 0 0 1-.48.079c-.115 0-.23-.016-.341-.049a.94.94 0 0 1-.258-.123.751.751 0 0 1-.182-.177 1.063 1.063 0 0 1-.116-.2A1.038 1.038 0 0 1 2 12.078v-.049h.814v.049c0 .027.003.055.009.082a.207.207 0 0 0 .03.074.14.14 0 0 0 .053.052.2.2 0 0 0 .157.008.159.159 0 0 0 .056-.039.22.22 0 0 0 .042-.075.417.417 0 0 0 .017-.126.483.483 0 0 0-.022-.163.2.2 0 0 0-.051-.08.138.138 0 0 0-.06-.029.537.537 0 0 0-.077-.007h-.161v-.645h.168a.241.241 0 0 0 .069-.011.164.164 0 0 0 .065-.034.175.175 0 0 0 .048-.067.286.286 0 0 0 .021-.121.28.28 0 0 0-.016-.1.166.166 0 0 0-.097-.099.2.2 0 0 0-.156.007.164.164 0 0 0-.055.053.344.344 0 0 0-.04.156v.049H2v-.049a.987.987 0 0 1 .18-.544.8.8 0 0 1 .179-.186.87.87 0 0 1 .262-.133c.114-.036.234-.053.354-.051.116-.001.231.01.344.036.092.021.18.055.263.1a.757.757 0 0 1 .32.318.73.73 0 0 1 .09.347.81.81 0 0 1-.167.528.562.562 0 0 1-.12.114z"></path></svg>
`;
icons["list"][
  "bullet"
] = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="toolbar-icon"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path></svg>
`;
icons.color = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className='toolbar-icon'><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.246 14H8.754l-1.6 4H5l6-15h2l6 15h-2.154l-1.6-4zm-.8-2L12 5.885 9.554 12h4.892zM3 20h18v2H3v-2z"></path></g></svg>`;
icons.background = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className='toolbar-icon'
"><path d="m20.707 5.826-3.535-3.533a.999.999 0 0 0-1.408-.006L7.096 10.82a1.01 1.01 0 0 0-.273.488l-1.024 4.437L4 18h2.828l1.142-1.129 3.588-.828c.18-.042.345-.133.477-.262l8.667-8.535a1 1 0 0 0 .005-1.42zm-9.369 7.833-2.121-2.12 7.243-7.131 2.12 2.12-7.242 7.131zM4 20h16v2H4z"></path></svg>`;
icons.align[""] = `
<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className='toolbar-icon'><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor"></path></svg>`;
icons.align[
  "center"
] = `<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className='toolbar-icon'><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM3 10.5C3 10.2239 3.22386 10 3.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z" fill="currentColor"></path></svg>`;

icons.align[
  "right"
] = `<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className='toolbar-icon'><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z" fill="currentColor"></path></svg>`;

icons.align[
  "justify"
] = `<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className='toolbar-icon'><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor"></path></svg>`;

icons.link = <BiLink className="toolbar-icon" />;
icons.image = <MdImage className="toolbar-icon" />;

Quill.register(icons);

export default CustomToolbar;
