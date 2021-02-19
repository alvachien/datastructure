// Karma configuration file, see link for more information
// https://karma-runner.github.io/2.0/config/configuration-file.html

module.exports = function(config) {
  config.set({

    frameworks: ["jasmine", "karma-typescript"],

    files: [
      { pattern: "src/lib/**/*.ts" },
      { pattern: "src/test/**/*.ts" }
    ],

    preprocessors: {
      "src/lib/**/*.ts": ["karma-typescript", "coverage"],
      "src/test/**/*.ts": ["karma-typescript"]
    },

    karmaTypescriptConfig: {
      compilerOptions: {
        sourceMap: true,
        target: "ES2015"
      },
      bundlerOptions: {
        transforms: [
          require("karma-typescript-es6-transform")()
        ]
      }
    },
    reporters: ["progress", "karma-typescript", "coverage"],

    browsers: ["ChromeHeadless", "Chrome_with_debugging"],

    customLaunchers: {
      Chrome_with_debugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9333'],
        debug: true
      }
    },
    
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }    
    // singleRun: true
  });
};
