import Link from "next/link";

export default async function ShowBlogs() {
  let fetchBlogs = await fetch("http://localhost:3000/api/blogs");
  fetchBlogs = await fetchBlogs.json();

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      {/* Header Section */}
      <div className="bg-slate-300 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-semibold">Blog App</h1>
          <Link
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition duration-200 shadow-lg"
            href={"/showBlogs/addBlogs"}
          >
            Add Blog
          </Link>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="container py-10 mx-auto px-4">
        <h2 className="text-2xl font-semibold  mb-6">Explore Blogs</h2>
        <div className="grid grid-cols-1 gap-6 ">
          {fetchBlogs.data?.map((blogs) => (
            <Link key={blogs._id} href={`/showBlogs/${blogs._id}`}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {blogs.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {blogs.body}
                  </p>
                </div>
                <div className="bg-indigo-100 p-2 text-indigo-600 text-center text-sm font-medium">
                  Read More
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
