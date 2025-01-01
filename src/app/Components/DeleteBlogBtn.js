"use client";
import React from "react";
import { deleteBlog } from "../actions/blogs";
import { useRouter } from "next/navigation";

const DeleteBlogBtn = ({ id }) => {
  const router = useRouter();
  const handleOnDelete = async () => {
    await deleteBlog(id);
    router.push("/showBlogs");
  };
  return (
    <div>
      <button
        onClick={handleOnDelete}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteBlogBtn;
