import React from "react";

const blogDetail = async ({ params }) => {
  let res = await fetch(`http://localhost:3001/api/blogs/${params.slug}`);
  res = await res.json();
  console.log("response=>", res);
  return (
    <div className="my-5 ">
      <div className="flex justify-end  gap-5 mx-5">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Edit</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</button>
      </div>
      <div className="mx-5 flex flex-col gap-5">
      <h1 className="font-semibold text-3xl">{res.title}</h1>
      <h1 className=" text-2xl">{res.body}</h1>
      <h1 className="font-normal underline  text-[1.3rem]">{res.author} </h1>
      </div>
    </div>
  );
};

export default blogDetail;
