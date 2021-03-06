const mongoose = require("mongoose");
let { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890abcdef", 10);

const chapterSchema = new mongoose.Schema({
  _id: { type: String, required: true, default: () => nanoid() },
  storyId: { type: String, required: true },
  chapterTitle: { type: String, required: true },
  chapterCover: { type: String },
  chapter: { type: String, required: true },
  comments: [
    {
      _id: { type: String, default: () => nanoid() },
      storyId: { type: String, required: true },
      username: { type: String, required: true },
      userId: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
  author: {
    username: { type: String, required: true },
    userId: { type: String, required: true },
  },
});

module.exports = mongoose.model("Chapter", chapterSchema);
