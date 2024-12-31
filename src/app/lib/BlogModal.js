const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    author: String,
    body: String,
  },
  {
    timestamps: true,
  }
);

const BlogModal = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
export default BlogModal;


