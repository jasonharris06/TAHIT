// // const withPlugins = require("next-compose-plugins");
//const withImages = require("next-images");
// // const withSass = require("@zeit/next-sass");
// // const withCSS = require("@zeit/next-css");
// const webpack = require("webpack");
// const path = require("path");


// module.exports = {
//   // webpack(config, options) {
//   //   config.resolve.modules.push(path.resolve("./"));
//   //   return config;
//   // },
//   // sassOptions: {
//   //   includePaths: [path.join(__dirname, 'styles')],
//   // },
//   env: {
//     DATABASE_URL: process.env.DATABASE_URL,
//     GOOGLE_TRACKING_ID: process.env.GOOGLE_TRACKING_ID
//   }
// }


// /** @type {import('next').NextConfig} */
// const nextConfig = withImages({
//   webpack(config, options) {
//     config.resolve.modules.push(path.resolve("./"));
//     return config;
//   },
//   reactStrictMode: true
// });

// module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'symposium2023.blob.core.windows.net',

      },
    ],
  },
};

module.exports = nextConfig;