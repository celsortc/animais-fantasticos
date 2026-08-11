export default [
  {
    rules: {
      // "no-console": "error",
      indent: ["error", 2],
      "keyword-spacing": "error", //espaço depois do if por exemplo
      "no-multiple-empty-lines": "error",
      "eol-last": ["error", "always"],
      semi: ["error", "always"],
      "no-trailing-spaces": "error",
      "operator-assignment": "error", //Erro usa o += basicamente isso
      "no-inner-declarations": [
        "error",
        "functions",
        { blockScopedFunctions: "disallow" },
      ],
    },
  },
];
