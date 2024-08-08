"use client";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function InputFile({ userId }: { userId?: string }) {
  function handleImageUpload(e: any) {
    // Upload image to server
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId || "");
    fetch(`${process.env.NEXT_APP_URL}api/upload`, {
      method: "POST",
      body: formData,
    });
    redirect(`${process.env.NEXT_APP_URL}profile`);
  }
  return (
    <>
      <input type={"file"} id={"file"} onChange={(e) => handleImageUpload(e)}></input>
    </>
  );
}
