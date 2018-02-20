// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      { pattern: "src/**/*.ts" },
      { pattern: "test/**/*.ts" }
    ],
    preprocessors: {
      "src/**/*.ts": ["karma-typescript", "coverage"],
      "test/**/*.ts": ["karma-typescript"]
    },

    reporters: ["progress", "coverage", "karma-typescript"],

    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json"
    },

    browsers: ["Chrome"]
  });
};
