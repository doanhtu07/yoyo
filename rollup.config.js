import commonjs from "@rollup/plugin-commonjs";
// import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "dist/app/index.js",
  output: {
    file: "dist/app/bundle.js",
    format: "cjs",
    // compact: true,
  },
  plugins: [commonjs()],
};
