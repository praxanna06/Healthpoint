const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        page1: './src/index2.js',
        page2: './src/index3.js',
        page3: './src/index4.js',
        page4: './src/index5.js',
        page5: './src/index6.js',
        page6: './src/index7.js'
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
}