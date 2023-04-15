import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import addFileIconSettings from "./rollup-plugin-add-file-icon-settings";

// https://github.com/rollup/rollup/issues/703#issuecomment-224984436 <-- passing args into config file
const ENTRY_FILE_PATH = process.env.file_path;

const config = {
  input: ENTRY_FILE_PATH,
  output: {
    dir: "..",
    format: "es",
  },
  plugins: [typescript(), nodeResolve(), terser(), addFileIconSettings(ENTRY_FILE_PATH!)],
  watch: {
    include: "src/**",
  },
};

// ts-unused-exports:disable-next-line
export default [config];
