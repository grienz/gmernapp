const fs = require('fs')

module.exports = async function (req, res, next) {
    try {
        if(!req.files || Object.keys(req.files).length === 0)
            return res.status(400).json({msg: "No files were uploaded."})
        const file = req.files.file;


        console.log(file);
        // 1024 = 1 mb // 4096 = 4 mb

        if (file.size > 1024 * 1024 ){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "Size too LARGE."})
        }
        next ()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}


const removeTmp = (path) => {
    fs.unlink(path, err => {
        if(err) throw err
    })
}