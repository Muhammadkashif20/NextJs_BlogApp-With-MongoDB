"use server";

import blogModal from "@/app/lib/BlogModal";
import { ConnectDB } from "@/app/lib/dbConnect";

export async function GET(request) {
  await ConnectDB();
  const blogs = await blogModal.find();
  console.log("Blogs=>", blogs);
  return Response.json({
    data: blogs,
    msg: "Blogs Fetched Successfully",
  });
}
export async function POST(request) {
  await ConnectDB();
  const blogs = await request.json();
  console.log("blogs=>", blogs);
  const blogAdded = await new blogModal({ ...blogs });
  await blogAdded.save();
  console.log("blogs added In Mongodb=> ", blogAdded);

  return Response.json({
    data: blogAdded,
    msg: "Blogs Added Successfully",
  });
}
