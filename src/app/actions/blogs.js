"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function addBlog(obj) {
  try {
    await fetch("http://localhost:3000/api/blogs", {
      method: "POST",
      body: JSON.stringify(obj),
    });
    revalidatePath("/showBlogs")
    redirect("/showBlogs")

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
// DeleteTodo Request For Blogs
export async function deleteBlog(obj) {
  console.log("obj=>", obj);
  try {
    await fetch("http://localhost:3000/api/blogs", {
      method: "DELETE",
      body: JSON.stringify(obj),
    });
    revalidatePath("/blogs");
  } catch (error) {
    console.log("error=>", error);
  }
}
