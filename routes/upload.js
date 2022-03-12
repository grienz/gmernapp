const router = require('express').Router()
const UploadImage = require('../middleware/uploadImage')
const UploadCtrl = require('../controllers/uploadCtrl')



router.post('/upload_avatar', uploadImage, uploadCtrl.uploadAvatar)


module.exports = router


