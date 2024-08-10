import CustomizeLinksPage from "@/components/CustomizeLinksPage";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function Links() {
  const session = await auth();
  if (!session?.user) return redirect(`${process.env.NEXT_PUBLIC_BACKEND_URL}error?error=NotAuthenticated`);

  return (
    <>
      <div>
        <CustomizeLinksPage userId={session?.user?.id || ""} />
      </div>
    </>
  );
}
