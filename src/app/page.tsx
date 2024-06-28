import { auth } from "../../auth";
import { redirect } from "next/navigation";
import CustomizeLinksPage from "@/components/CustomizeLinksPage";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <div>{session?.user ? redirect("/links") : redirect("/login")}</div>
    </>
  );
}
