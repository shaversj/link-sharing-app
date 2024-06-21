import Image from "next/image";
import SiteLink from "@/components/SiteLink";
import { auth } from "../../../auth";
import { getLinksById } from "@/components/actions";
import SiteLinkList from "@/components/SiteLinkList";

export default async function ProfileDetails() {
  const session = await auth();
  if (!session?.user) return <div>Not authenticated</div>;

  return (
    <div className={"w-full border border-amber-800 px-6 font-instrumentSans"}>
      <div className={"flex gap-x-4 py-4"}>
        <button className={"min-w-[159.5px] rounded-lg border border-purple py-[11px] font-semibold leading-[150%] text-purple"}>Back to Editor</button>
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
