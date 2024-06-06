import Image from "next/image";
import SiteLink from "@/components/SiteLink";

export default function ProfileDetails() {
  return (
    <div className={"w-full border border-amber-800 px-6 font-instrumentSans"}>
      <div className={"flex gap-x-4 py-4"}>
        <button className={"min-w-[159.5px] rounded-lg border border-purple py-[11px] font-semibold leading-[150%] text-purple"}>Back to Editor</button>
        <button className={"min-w-[159.5px] rounded-lg border border-purple bg-purple py-[11px] leading-[150%] text-white"}>Share Link</button>
      </div>

      <div className={"mt-[60px] flex flex-col items-center"}>
        <Image src="/images/profile-picture.svg" alt="Profile" width={104} height={104} />
        <h1 className={"text-[32px] font-bold leading-[150%]"}>Ben Wright</h1>
        <h2 className={"leading-[150%] text-gray"}>ben@example.com</h2>
      </div>

      <div className={"flex justify-center pt-[56px]"}>
        <SiteLink imagePath={"/images/icon-github.svg"} siteName={"GitHub"} />
      </div>
    </div>
  );
}
