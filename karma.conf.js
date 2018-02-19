// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      "src/test/*.ts" // *.tsx for React Jsx
    ],
    preprocessors: {
      "**/*.ts": "karma-typescript" // *.tsx for React Jsx
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["Chrome"]
  });
};
