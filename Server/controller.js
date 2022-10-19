const path = require('path')

module.exports = {
    getHTML: (req,res) => {
        res.sendFile(path.join(__dirname, '../Public/index.html'))
    },
    getCSS: (req,res) => {
        res.sendFile(path.join(__dirname, '../Public/styles.css'))
    },
    getJS: (req,res) => {
        res.sendFile(path.join(__dirname, '../Public/main.js'))
    }
}


















