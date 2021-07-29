const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

module.exports = {
  babel: {
    plugins: ["@babel/plugin-proposal-optional-chaining"],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, "src/theme.less"),
      },
    },
  ],
};
