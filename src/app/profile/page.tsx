import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import Input from "@/components/Input";
import Header from "@/components/Header";

import InputFile from "@/components/InputFile";
import { updateUser } from "@/components/actions";
import UpdateUserForm from "@/components/UpdateUserForm";

export default async function Details() {
  const session = await auth();
  if (!session?.user) return redirect(`${process.env.NEXT_PUBLIC_BACKEND_URL}error?error=NotAuthenticated`);

  const [firstName, lastName] = session.user.name?.split(" ") || ["", ""];

  return (
    <div>
      <Header activePage={"profile"} userId={session.user.id} />
      <UpdateUserForm user={session.user} />
    </div>
  );
}
