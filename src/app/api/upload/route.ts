import { NextRequest } from "next/server";
import { saveImage } from "@/components/actions";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file");
  const userId = formData.get("userId");

  if (file instanceof Blob) {
    const body = await file.arrayBuffer();
    await saveImage(file, userId as string);
  }

  return Response.redirect("/profile");
}
