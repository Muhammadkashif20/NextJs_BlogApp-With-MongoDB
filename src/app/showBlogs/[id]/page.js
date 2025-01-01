import DeleteBlogBtn from "@/app/Components/DeleteBlogBtn";
import Link from "next/link";
import React from "react";

const blogDetail = async ({ params }) => {
  let res = await fetch(`http://localhost:3000/api/blogs/${params.id}`);
  res = await res.json();
  console.log("response=>", res);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6 bg-white rounded-lg shadow-lg p-8 max-w-4xl">
        {/* Header Section with Edit and Delete buttons */}
        <div className="flex justify-end gap-4 mb-8">
          <Link
            href={`/showBlogs/edit/${params.id}`}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Edit
          </Link>
          <DeleteBlogBtn id={params.id} />
        </div>

        {/* Blog Content Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold text-gray-800">{res.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{res.body}</p>
          <p className="text-md font-semibold text-gray-500 ">
            <span className="font-normal">author: </span>{res.author}
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/showBlogs"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default blogDetail;
