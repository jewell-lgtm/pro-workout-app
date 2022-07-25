// eslint-disable-next-line no-undef,@typescript-eslint/no-var-requires
const { createWebpackConfigAsync } = require("expo-yarn-workspaces/webpack")

// eslint-disable-next-line no-undef
module.exports = async function (env, argv) {
  return await createWebpackConfigAsync(env, argv)
}
