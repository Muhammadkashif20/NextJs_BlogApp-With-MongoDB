import Link from "next/link";
export default async function ShowBlogs() {
  let fetchBlogs = await fetch(`http://localhost:3000/api/blogs`);
  fetchBlogs = await fetchBlogs.json();
  return (
    <div>
      <div className="flex justify-between text-center mx-20 my-3">
              <h1 className="font-bold text-2xl">Blog App</h1>
              <Link
                className="p-3 rounded-md bg-blue-600  text-white"
                href={"/showBlogs/addBlogs"}
              >
                Add Blogs
              </Link>
            </div>
      {fetchBlogs.data?.map((blogs) => {
        return (
          <Link key={blogs._id} href={`/showBlogs/${blogs._id}`}>
          <div  className="container mx-auto text-center my-5 gap-3">
            <h1 className="text-3xl font-semibold border p-3 mx-60 flex justify-center items-center">{blogs.title}</h1>
          </div>
          </Link>
        );
      })}
    </div>
  );
}
