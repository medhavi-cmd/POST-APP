const ImageKit = require('@imagekit/nodejs');
require("dotenv").config();

const imagekit = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
    return await imagekit.files.upload({
        file: buffer.toString("base64") ,
        fileName: "image.jpg"
    });
}

module.exports = { uploadFile };

