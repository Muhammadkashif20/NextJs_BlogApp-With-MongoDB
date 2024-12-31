"use client";
import { useRef } from "react";
import { addBlog } from "../actions/blogs";
import { useRouter } from 'next/navigation'
const BlogForm = () => {
  const formRef = useRef(null);
  const router = useRouter()

  return (
    <div>
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
            router.push("/showBlogs")
           formRef.current?.reset(); 
        }}
        className="flex items-center  gap-4 flex-col justify-center m-5"
      >
        <input
          type="text"
          placeholder="Enter Your Title"
          maxLength={18}
          name="title"
          required
          className="border outline-none border-gray-200 rounded-md p-3 w-96"
        />
        <textarea
          type="text"
          placeholder="Enter Your Description"
          name="body"
          required
          className="border outline-none border-gray-200 rounded-md p-3 w-96"
        />
        <input
          type="text"
          placeholder="Enter Your Author"
          maxLength={18}
          name="author"
          required
          className="border outline-none border-gray-200 rounded-md p-3 w-96"
        />
        <input
          type="submit"
          className="bg-blue-500 rounded w-24 text-white hover:bg-blue-600 p-2 cursor-pointer ms-3"
          value={"Add Blog"}
        />
      </form>
    </div>
  );
};

export default BlogForm;
