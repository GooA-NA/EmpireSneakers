const multer = require("multer");

// создание Multer для добавления картинок
const storage = multer.diskStorage({
    destination:(_,__,cb) => {
      cb(null,'images')
    },
    filename:(_,file,cb) => {
      cb(null, file.originalname)
    }
  })

  const types = ["image/png", "image/jpeg", "image/jpg", "image/svg"];

  const fileFilter = ( req, file, cb) => {

	if (types.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};
module.exports = multer({ storage, fileFilter })