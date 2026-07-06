const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Cloudinary storage — images go to "job-portal/avatars", PDFs to "job-portal/resumes"
const storage = new CloudinaryStorage({
    cloudinary,
    params: (req, file) => {
        const isImage = file.mimetype.startsWith("image/");
        return {
            folder: isImage ? "job-portal/avatars" : "job-portal/resumes",
            resource_type: isImage ? "image" : "raw",
            format: isImage ? "webp" : undefined, // auto-convert images to webp
            transformation: isImage
                ? [{ width: 400, height: 400, crop: "fill", gravity: "face" }]
                : undefined,
        };
    },
});

// File filter — allow images and PDFs only
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only JPEG, PNG, and PDF are allowed."), false);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
