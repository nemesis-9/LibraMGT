const express = require('express');
const multer = require('multer');
const path = require('path');
const Book = require('../models/bookModel'); // Import the Book model

const router = express.Router();

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/assets/images')); // Specify the directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Create unique filenames
  }
});

// Initialize multer with the storage engine
const upload = multer({ storage: storage });

// POST route to upload an image and associate it with a book
router.post('/upload/:bookId', upload.single('image'), async (req, res) => {
  try {
    const bookId = req.params.bookId;

    // Find the book by ID
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Update book with image URL
    book.imageUrl = `/assets/images/${req.file.filename}`;
    await book.save(); // Save the updated book

    res.status(200).json({ message: 'Image uploaded successfully', imageUrl: book.imageUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error uploading image', error: err.message });
  }
});

module.exports = router;
