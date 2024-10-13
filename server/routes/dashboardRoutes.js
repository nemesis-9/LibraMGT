const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const User = require('../models/user');

router.get('/book/count', async (req, res) => {
  try {
    const count = await Book.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/author/count', async (req, res) => {
  try {
    const count = await Author.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/genre/count', async (req, res) => {
  try {
    const count = await Genre.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/user/count', async (req, res) => {
    try {
      const count = await User.countDocuments();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.get('/genre/distribution', async (req, res) => {
  try {
    const genres = await Genre.aggregate([
      {
        $lookup: {
          from: 'books',
          localField: '_id',
          foreignField: 'genreId',
          as: 'books'
        }
      },
      {
        $project: {
          label: '$name',
          value: { $size: '$books' }
        }
      }
    ]);

    res.json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;