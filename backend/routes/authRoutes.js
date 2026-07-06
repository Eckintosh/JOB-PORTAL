const express = require("express");
const {register, login, getMe} = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");
const { uploadToCloudinary } = require("../middlewares/uploadMiddleware");

const router = express.Router();

// Placeholder test route
router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);

router.post("/upload-image", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const result = await uploadToCloudinary(req.file.buffer, {
            folder: "job-portal/avatars",
            resource_type: "image",
            format: "webp",
            transformation: [{ width: 400, height: 400, crop: "fill", gravity: "face" }],
        });

        res.status(200).json({ imageUrl: result.secure_url });
    } catch (error) {
        console.error("Cloudinary upload error:", error);
        res.status(500).json({ message: "Image upload failed", error: error.message });
    }
}); 

module.exports = router;
