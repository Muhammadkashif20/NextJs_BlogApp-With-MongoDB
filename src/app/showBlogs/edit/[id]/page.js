"use client";
import { useEffect, useRef, useState } from "react";
// import { addBlog } from "../actions/blogs";
import { useRouter } from "next/navigation";
import { getSingleBlog, ubdateBlog } from "@/app/actions/blogs";
const EditBlog = ({ params }) => {
  const [blogDetail,setBlogDetail]=useState({
    title:"",
    body:"",
    author:"",

  })
  const formRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    getBlogDetal();
  }, [params]);
  async function getBlogDetal() {
    let blog = await getSingleBlog(params.id);
    if(blog){
        setBlogDetail({...blog})
    }
    console.log("blog=>",blog);
  }
  return (
    <div>
      <form
        ref={formRef}
        action={async () => {
          let obj = {
           ...blogDetail,
          };
          console.log("formData=>", obj);
            await ubdateBlog(params.id,obj);
            router.push("/showBlogs")
           formRef.current?.reset();
        }}
        className="flex items-center  gap-4 flex-col justify-center m-5"
      >
        <input
          type="text"
          placeholder="Edit Your Title"
          name="title"
          value={blogDetail.title}
          onChange={(e)=>{setBlogDetail({...blogDetail,title:e.target.value})}}
          required
          className="border outline-none border-gray-200 rounded-md p-3 w-96"
        />
        <textarea
          type="text"
          placeholder="Edit Your Description"
          name="body"
          value={blogDetail.body}
          onChange={(e)=>{setBlogDetail({...blogDetail,body:e.target.value})}}

          required
          className="border outline-none border-gray-200 rounded-md p-3 w-96"
        />
        <input
          type="text"
          placeholder="Edit Your Author"
          maxLength={18}
          name="author"
          onChange={(e)=>{setBlogDetail({...blogDetail,author:e.target.value})}}

          value={blogDetail.author}

          required
          className="border outline-none border-gray-200 rounded-md p-3 w-96"
        />
        <input
          type="submit"
          className="bg-blue-500 rounded w-24 text-white hover:bg-blue-600 p-2 cursor-pointer ms-3"
          value={"Edit Blog"}
        />
      </form>
    </div>
  );
};

export default EditBlog;
