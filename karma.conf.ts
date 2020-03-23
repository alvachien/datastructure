// Karma configuration file, see link for more information
// https://karma-runner.github.io/2.0/config/configuration-file.html

module.exports = function(config) {
  config.set({

    frameworks: ["jasmine", "karma-typescript"],

    files: [
        { pattern: "src/**/*.ts" }
    ],

    preprocessors: {
        "**/*.ts": ["karma-typescript"]
    },

    reporters: ["dots", "karma-typescript"],

    browsers: ["ChromeHeadless"],

    singleRun: true
  });
};
