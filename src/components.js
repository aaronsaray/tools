import Home from "./Components/Home/Home";
import JSONPrettyPrint from "./Components/JSONPrettyPrint/JSONPrettyPrint";
import FontPreview from "./Components/FontPreview/FontPreview";
import CharacterEncode from "./Components/CharacterEncode/CharacterEncode";
import MarkdownTable from "./Components/MarkdownTable/MarkdownTable";
import RGBHex from "./Components/RGBHex/RGBHex";
import EmailPermutator from "./Components/EmailPermutator/EmailPermutator";
import MetaGenerator from "./Components/MetaGenerator/MetaGenerator";
import OriginalCost from "./Components/OriginalCost/OriginalCost";

const components = [
  {
    name: "Tools",
    path: "/",
    icon: "wrench",
    ignoreInList: true,
    component: Home
  },
  {
    name: "Pretty JSON",
    path: "/json-pretty-print",
    icon: "code file",
    description: "Takes JSON and formats it in a readable way",
    component: JSONPrettyPrint
  },
  {
    name: "Font Preview",
    path: "/font-preview",
    icon: "font",
    description: "Compare fonts and sizes in real time",
    component: FontPreview
  },
  {
    name: "Char Encode",
    path: "/character-encode",
    icon: "hashtag",
    description: "Convert content to character encoding",
    component: CharacterEncode
  },
  {
    name: "MD Table Gen",
    path: "/markdown-table",
    icon: "table",
    description: "Generate Markdown table from csv data",
    component: MarkdownTable
  },
  {
    name: "RGB ↔ Hex",
    path: "/rgb-hex",
    icon: "eye dropper",
    description: "RGB Hex Converter and Back Again",
    component: RGBHex
  },
  {
    name: "Meme Gen",
    path: "https://quickpic.dev",
    external: true,
    icon: "image",
    description: "Meme Generation Tool (as well as other image editing options)"
  },
  {
    name: "Email Permutator",
    path: "/email-permutator",
    icon: "mail",
    description:
      "Generates permutations of email addresses based on user contact details",
    component: EmailPermutator
  },
  {
    name: "Meta Tag Gen",
    path: "/meta-generator",
    icon: "tasks",
    description: "Generates meta and open graph tags",
    component: MetaGenerator
  },
  {
    name: "Original Cost",
    path: "/original-cost",
    icon: "percent",
    description: "Show original cost of item before a discount percentage.",
    component: OriginalCost
  },
];

export default components;
