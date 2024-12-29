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

const blogModal = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
export default blogModal;


