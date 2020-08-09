const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/svg+xml': 'svg',
  'video/mp4': 'mp4',
  'audio/mpeg': 'mp3',
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const type = file.mimetype.split('/')[0];

    switch (type) {
      case 'audio': {
        callback(null, 'stock/music');
        break;
      }
      case 'image': {
        if (file.mimetype === 'image/svg+xml') {
          callback(null, 'stock/artwork');
        } else {
          callback(null, 'stock/picture');
        }
        break;
      }
      case 'video': {
        callback(null, 'stock/video');
        break;
      }
      default:
        console.log('error');
    }
  },
  filename: (req, file, callback) => {
    const extension = MIME_TYPES[file.mimetype];
    const name = file.originalname
      .split(`.${extension}`)
      .join('')
      .split(' ')
      .join('_');
    callback(null, `${name + Date.now()}.${extension}`);
  },
});

module.exports = multer({ storage }).array('multi-files', 10);
