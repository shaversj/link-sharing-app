import Image from "next/image";
import { auth } from "../../../auth";
import SiteLinkList from "@/components/SiteLinkList";
import Link from "next/link";

export default async function ProfileDetails() {
  const session = await auth();
  if (!session?.user) return <div>Not authenticated</div>;

  console.log(session.user.id);

  return (
    <div className={"w-full border border-amber-800 px-6 font-instrumentSans"}>
      <div className={"flex gap-x-4 py-4"}>
        <Link href={`/links/${session?.user.id}`} className={"min-w-[159.5px] rounded-lg border border-purple py-[11px] font-semibold leading-[150%] text-purple"}>
          Back to Editor
        </Link>
        <button className={"min-w-[159.5px] rounded-lg border border-purple bg-purple py-[11px] leading-[150%] text-white"}>Share Link</button>
      </div>

      <div className={"mt-[60px] flex flex-col items-center"}>
        <Image alt={"Profile Image"} src={session?.user?.image || ""} width={104} height={104} />
        <h1 className={"text-[32px] font-bold leading-[150%]"}>{session.user.name}</h1>
        <h2 className={"leading-[150%] text-gray"}>{session.user.email}</h2>
      </div>

      <SiteLinkList id={session.user.id || ""} />
    </div>
  );
}
