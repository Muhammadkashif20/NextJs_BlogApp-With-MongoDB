"use client";
import { useRef } from "react";
import { addBlog } from "../actions/blogs";
import { useRouter } from 'next/navigation'

const BlogForm = () => {
  const formRef = useRef(null);
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-100 py-12">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Add Your Blog
        </h1>
        <form
          ref={formRef}
          action={async (formData) => {
            let obj = {
              title: formData.get("title"),
              body: formData.get("body"),
              author: formData.get("author"),
            };
            console.log("formData=>", obj);
            await addBlog(obj);
            router.push("/showBlogs");
            formRef.current?.reset();
          }}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Enter Your Title"
            name="title"
            required
            className="border outline-none border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            type="text"
            placeholder="Enter Your Description"
            name="body"
            required
            className="border outline-none border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter Your Author"
            name="author"
            required
            className="border outline-none border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="submit"
            className="bg-blue-500 rounded-md w-full text-white hover:bg-blue-600 p-3 cursor-pointer mt-4"
            value="Add Blog"
          />
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
