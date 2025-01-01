"use server";

import BlogModal from "@/app/lib/BlogModal";

export async function GET(request, { params }) {
  const id = await params.id;
  const blog = await BlogModal.findById(id);
  console.log("id=>", id);
  return Response.json(blog);
}
export async function DELETE(request, { params }) {
  const id = await params.id;
  const blog = await BlogModal.deleteOne({ _id: id });
  console.log("id=>", id);
  return Response.json(blog);
}
export async function PUT(request, { params }) {
  const id = await params.id;
  const blogEdit = await request.json();
  console.log("blogEdit=>", blogEdit);

  const update = await BlogModal.updateOne(
    {
      _id: id,
    },
    {
      ...blogEdit,
    }
  );
  console.log("blogEdit=>", blogEdit);

  console.log("id=>", id);
  return Response.json({ blog: update, msg: "Blog Ubdate Successfully" });
}
