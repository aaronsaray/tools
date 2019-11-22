import Home from "./Components/Home/Home";
import JSONPrettyPrint from "./Components/JSONPrettyPrint/JSONPrettyPrint";
import FontPreview from "./Components/FontPreview/FontPreview";
import CharacterEncode from "./Components/CharacterEncode/CharacterEncode";
import MarkdownTable from "./Components/MarkdownTable/MarkdownTable";
import ContractGenerator from "./Components/ContractGenerator/ContractGenerator";
import NDA from "./Components/NDA/NDA";
import RGBHex from "./Components/RGBHex/RGBHex";
import EmailPermutator from "./Components/EmailPermutator/EmailPermutator";

const components = [
  {
    name: "Tools",
    path: "/",
    icon: "wrench",
    ignoreInList: true,
    component: Home
  },
  {
    name: "JSON Pretty Print",
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
    name: "MD Table Generator",
    path: "/markdown-table",
    icon: "table",
    description: "Generate Markdown table from csv data",
    component: MarkdownTable
  },
  {
    name: "Contract Generator",
    path: "/contract-generator",
    icon: "file alternate",
    description: "Generate Contract for Services",
    component: ContractGenerator
  },
  {
    name: "NDA Generator",
    path: "/nda-generator",
    icon: "file alternate outline",
    description: "Generate NDA",
    component: NDA
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
  }
];

export default components;
