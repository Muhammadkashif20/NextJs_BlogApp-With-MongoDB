"use client"
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { editBlog, getSingleBlog } from "@/app/actions/blogs";

const EditBlog = ({ params }) => {
  const [blogDetail, setBlogDetail] = useState({
    title: "",
    body: "",
    author: "",
  });

  const formRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    getBlogDetail();
  }, [params]);

  async function getBlogDetail() {
    let blog = await getSingleBlog(params.id);
    if (blog) {
      setBlogDetail({ ...blog });
    }
    console.log("blog=>", blog);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-100 py-12">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Edit Your Blog
        </h1>
        <form
          ref={formRef}
          action={async () => {
            const obj = {
              ...blogDetail,
            };
            console.log("formData=>", obj);
            await editBlog(params.id, obj);
            router.push("/showBlogs");
            formRef.current?.reset();
          }}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Edit Your Title"
            name="title"
            value={blogDetail.title}
            onChange={(e) => {
              setBlogDetail({ ...blogDetail, title: e.target.value });
            }}
            required
            className="border outline-none border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            type="text"
            placeholder="Edit Your Description"
            name="body"
            value={blogDetail.body}
            onChange={(e) => {
              setBlogDetail({ ...blogDetail, body: e.target.value });
            }}
            required
            className="border outline-none border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Edit Your Author"
            maxLength={18}
            name="author"
            onChange={(e) => {
              setBlogDetail({ ...blogDetail, author: e.target.value });
            }}
            value={blogDetail.author}
            required
            className="border outline-none border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="submit"
            className="bg-blue-500 rounded-md w-full text-white hover:bg-blue-600 p-3 cursor-pointer mt-4"
            value="Save Changes"
          />
        </form>
      </div>
    </div>
  );
};

export default EditBlog