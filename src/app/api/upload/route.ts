import { NextRequest, NextResponse } from "next/server";
import { saveImage } from "@/components/actions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  const formData = await request.formData();
  const file = formData.get("file");
  const userId = formData.get("userId");

  try {
    if (file instanceof Blob) {
      const body = await file.arrayBuffer();
      await saveImage(file, userId as string);
    }
  } catch (error) {
    console.error(error);
  }

  revalidatePath(`${process.env.NEXT_PUBLIC_BACKEND_URL}profile`);
  redirect(`${process.env.NEXT_PUBLIC_BACKEND_URL}profile`);
}
