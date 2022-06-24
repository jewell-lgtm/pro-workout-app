/* eslint-disable import/no-default-export */
import "dotenv/config";

// eslint-disable-next-line no-undef
let _process = process ?? { env: {} };

export default {
  expo: {
    name: "pro-workout",
    slug: "pro-workout",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: _process.env.API_KEY,
      authDomain: _process.env.AUTH_DOMAIN,
      projectId: _process.env.PROJECT_ID,
      storageBucket: _process.env.STORAGE_BUCKET,
      messagingSenderId: _process.env.MESSAGING_SENDER_ID,
      appId: _process.env.APP_ID,
    },
  },
};
