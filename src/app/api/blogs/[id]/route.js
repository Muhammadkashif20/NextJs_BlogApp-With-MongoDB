import BlogModal from "@/app/lib/BlogModal";
export async function GET(request, { params }) {
  const id = await params.id;
  const blog = await BlogModal.findById(id)
  console.log("id=>",id);
  return Response.json(blog);
}