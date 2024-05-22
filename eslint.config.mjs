import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {languageOptions: { 
    globals: globals.browser,
    parserOptions: {
      ecmaVersion: 12,
    } },
  ignores:["ijl.config.js",
    "stubs/api/index.js"]   },

  
  pluginJs.configs.recommended,
  pluginReactConfig,
];