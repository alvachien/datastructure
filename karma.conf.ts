// Karma configuration file, see link for more information
// https://karma-runner.github.io/2.0/config/configuration-file.html

module.exports = (config: any) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-typescript')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './src/lib/*.ts', watched: true },
      { pattern: './src/test/*.spec.ts', watched: false }
    ],
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    preprocessors: {
      './src/lib/*.ts': 'karma-typescript',
      './src/test/*.spec.ts': 'karma-typescript'
    },

    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.spec.json",
    },

    reporters: ['progress', 'coverage-istanbul'],

    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
  });
};
