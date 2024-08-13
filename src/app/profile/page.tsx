import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import Header from "@/components/Header";
import UpdateUserForm from "@/components/UpdateUserForm";

export default async function Details() {
  const session = await auth();
  if (!session?.user) return redirect(`${process.env.NEXT_PUBLIC_BACKEND_URL}error?error=NotAuthenticated`);

  return (
    <div>
      <Header activePage={"profile"} userId={session.user.id} />
      {session.user.id && <UpdateUserForm userId={session.user.id} />}
    </div>
  );
}
