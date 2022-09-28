const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  optimization: {
    // 한 .js 파일 내에서 사용하지 않는 import를 찾고, 의존성 그래프를 그린 다음에 최종 번들에서 제거한다
    usedExports: true,

    // 한 .js 파일 내에서 import된 각 변수가 해당 파일 내 어떤 export에서 사용되었는지를 추적한다
    innerGraph: true,

    // 한 .js 파일 내에서 사용하지 않으며, sideeffect가 falsy한 import는 의존성 그래프에 추가하지 않는다
    sideEffects: true,
  },
  devtool: false,
};
