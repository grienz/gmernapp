const uploadCtrl = {
    uploadAvatar: async (req, res) => {
        try {
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = uploadCtrl