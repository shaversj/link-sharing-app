"use client";

export default function InputFile({ userId }: { userId?: string }) {
  function handleImageUpload(e: any) {
    // Upload image to server
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId || "");
    fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData,
    });
  }
  return (
    <>
      <input type={"file"} id={"file"} onChange={(e) => handleImageUpload(e)}></input>
    </>
  );
}
