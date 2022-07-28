/* eslint-disable no-undef */

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@native-base/icons": "@native-base/icons/lib",
            "^~/(.+)": "./src/\\1",
            "^@/(.+)/(.+)": "../../packages/\\1/src/\\2",
          },
        },
      ],
    ],
  }
}
