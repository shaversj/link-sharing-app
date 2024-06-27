"use client";
import { auth } from "../../auth";
import { redirect } from "next/navigation";
import CustomizeLinksPage from "@/components/CustomizeLinksPage";

export default async function Home() {
  const session = await auth();

  return <main>{session?.user ? <CustomizeLinksPage userId={session.user.id || ""} /> : redirect("/login")}</main>;
}
