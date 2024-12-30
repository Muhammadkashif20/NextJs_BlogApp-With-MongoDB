import BlogForm from "../Components/BlogsForm";

export default async function ShowBlogs() {
  let fetchBlogs = await fetch(`http://localhost:3000/api/blogs`);
  fetchBlogs = await fetchBlogs.json();
  return (
    <div>
      {fetchBlogs.data?.map((blogs) => {
        return (
          <div key={blogs._id} className="container mx-auto text-center my-5">
            <h1 className="text-3xl font-semibold">{blogs.title}</h1>
            <p className="text-2xl">{blogs.description}</p>
            <p>{blogs.author}</p>
          </div>
        );
      })}
      <BlogForm/>
    </div>
  );
}
