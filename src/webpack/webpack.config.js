const path = require("path");
const glob = require("glob");
const fs = require("fs-extra");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outDir = path.resolve("../main/resources/static");
const templateDir = path.resolve("../main/resources/template");

const pages = glob
  .sync("**/*.html", { cwd: path.resolve("pages") })
  .map((html) => ({
    html,
    chunk: html.replace(".html", "").replace("\\", "/"),
    files: getPageChunks(html),
  }));

const entry = Object.fromEntries(
  pages.map((page) => [
    page.chunk,
    [
      "@popperjs/core",
      "bootstrap",
      "bootstrap/scss/bootstrap.scss",
      ...page.files,
    ],
  ])
);

const htmls = pages.map(
  (page) =>
    new HtmlWebpackPlugin({
      filename: page.html,
      template: path.resolve("pages", page.html),
      chunks: [page.chunk],
    })
);

module.exports = {
  entry,
  output: {
    filename: "[name].js",
    path: outDir,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transformamos archivos .js
        // exclude: /node_modules/, // Ignoramos node_modules
        use: {
          loader: "babel-loader", // Usamos Babel para transpilar ES6+
          options: {
            presets: ["@babel/preset-env"], // Preset para características modernas de JavaScript
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/, // Para archivos SCSS
        use: [
          MiniCssExtractPlugin.loader, // Extrae CSS en archivos separados
          "css-loader", // Traduce CSS a CommonJS
          "sass-loader", // Compila Sass a CSS
        ],
      },
    ],
  },
  plugins: [
    ...htmls,
    new MiniCssExtractPlugin({
      filename: "[name].css", // Nombre del archivo CSS de salida
    }),
  ],

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        bootstrap: {
          name: "bootstrap",
          filename: "js/[name].js",
          test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
          priority: 10, // La prioridad es importante para asegurar que se maneje correctamente
        },
        popper: {
          name: "popper",
          filename: "js/[name].js",
          test: /[\\/]node_modules[\\/]@popperjs[\\/]core[\\/]/,
          priority: 10,
        },
        commons: {
          name: "commons",
          filename: "js/[name].js",
          test: /[\\/]node_modules[\\/]/,
          priority: 1,
        },
      },
    },
  },

  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/, // Esta regex captura todos los módulos dentro de node_modules
  //         name: "[name].vendors", // El nombre del chunk común
  //         chunks: "all", // Tipo de chunks a optimizar
  //       },
  //     },
  //   },
  // },
  // Configuraciones adicionales...
};

function getPageChunks(html) {
  const chunks = [];

  const ts = path.resolve("pages", html.replace(".html", ".ts"));
  const scss = path.resolve("pages", html.replace(".html", ".scss"));

  if (fs.existsSync(ts)) {
    chunks.push(ts);
  }

  if (fs.existsSync(scss)) {
    chunks.push(scss);
  }

  return chunks;
}
