import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import pkg from "./package.json";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";

const env = process.env.NODE_ENV;

export default {
  input: "packages/index.js",
  output: [
    {
      file: "dist/cjs/index.js",
      format: "cjs",
    },
    {
      file: "dist/esm/index.js",
      format: "esm",
    },
    {
      file: "dist/umd/pear-ui.min.js",
      format: "umd",
      name: "bundle",
    },
  ],
  external: Object.keys(pkg.peerDependencies),
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    resolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env),
      preventAssignment: true,
    }),
    commonjs(),
    env === "production" && terser(),

    copy({
      targets: [{ src: "packages/*", dest: "dist/lib" }],
    }),
  ],
};
