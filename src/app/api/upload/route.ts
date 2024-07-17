import { NextRequest } from "next/server";
import { saveImage } from "@/components/actions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file");
  const userId = formData.get("userId");

  // if (file instanceof Blob) {
  //   const body = await file.arrayBuffer();
  //   await saveImage(file, userId as string);
  // }

  try {
    if (file instanceof Blob) {
      const body = await file.arrayBuffer();
      await saveImage(file, userId as string);
    }
  } catch (error) {
    console.error(error);
  }
  // revalidatePath("/profile");
  // redirect("/profile");
  // return Response.redirect("/profile/");
  revalidatePath("http://localhost:3000/profile");
  redirect("http://localhost:3000/profile");

  return Response.redirect("http://localhost:3000/profile");
}
