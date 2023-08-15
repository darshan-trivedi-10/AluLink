import multer from "multer";

import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dest = path.join(__dirname, '../../public/images');
const storage = multer.diskStorage({
  destination: dest,
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    console.log(file.originalname);
    const uniqueFilename = `${file.originalname}`;
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage });

export default upload;