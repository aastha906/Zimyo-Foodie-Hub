const multer = require('multer');
const sharp = require('sharp');
const path = require('path');

const storage = multer.memoryStorage();
const upload = multer({ storage });

function resizeImage(req, res, next) {
    if (!req.file) return next();

    sharp(req.file.buffer)
        .resize(800, 800)
        .toFile(path.join(__dirname, `../uploads/${Date.now()}_${req.file.originalname}`))
        .then(() => next())
        .catch(err => res.status(500).json({ message: 'Image processing failed' }));
}

module.exports = { upload, resizeImage };
