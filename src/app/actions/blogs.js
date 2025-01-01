"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function addBlog(obj) {
  try {
    await fetch("http://localhost:3000/api/blogs", {
      method: "POST",
      body: JSON.stringify(obj),
    });
    revalidatePath("/showBlogs");
    redirect("/showBlogs");
  } catch (error) {
    console.log("error=>", error);
  }
}
export async function getSingleBlog(id) {
  console.log("getSingleBlogid=>",id);
  try {
    let res = await fetch(`http://localhost:3000/api/blogs/${id}`);
    res = await res.json();
    return res;
  } catch (error) {
    console.log("error=>", error);
  }
}
export async function editBlog(id,obj) {
  console.log("getSingleBlogid=>",id);
  try {
     await fetch(`http://localhost:3000/api/blogs/${id}`,{
      method:"PUT",
      body:JSON.stringify(obj)
     });
     revalidatePath("/showBlogs")
  } catch (error) {
    console.log("error=>", error);
  }
}
// DeleteTodo Request For Blogs
export async function deleteBlog(id) {
  console.log("id=>", id);
  try {
    await fetch(`http://localhost:3000/api/blogs/${id}`, {
      method: "DELETE",
    });
    revalidatePath("/showBlogs");
  } catch (error) {
    console.log("error=>", error);
  }
}
// UbdateTodo Request For Blogs
export async function ubdateBlog(obj) {
  console.log("obj=>", obj);
  try {
    await fetch("http://localhost:3000/api/blogs", {
      method: "PUT",
      body: JSON.stringify(obj),
    });
    revalidatePath("/blogs");
  } catch (error) {
    console.log("error=>", error);
  }
}
