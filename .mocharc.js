module.exports = {
  spec: 'testExplorer/testCase/*.js',
  timeout: 5000,
  reporter: 'mochawesome',
  "reporter-option": [
    'reportDir=report', // Report directory
    'reportFilename=[status]_[datetime]-[name]-report', //Report file name
    'html=true', // enable html report
    'json=false', // disable json report
    'overwrite=false', // disable report file overwrite
    'timestamp=longDate', // add timestamp to report file name
  ],
}
