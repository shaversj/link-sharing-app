import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { platformSites } from "@/constants/platformConstants";

export type Site = {
  id: number | null;
  name: string | null;
  backgroundColor: string | null;
  imageLocation: string | null;
};

export default function SiteLink({ siteName, linkData }: { siteName: string; linkData: any }) {
  const platform = platformSites.find((site) => site.name === siteName);
  const containerStyle = platform?.backgroundColor
    ? `flex h-[56px] w-[237px] items-center rounded-lg px-4 ${platform.backgroundColor}`
    : `flex h-[56px] w-[237px] items-center rounded-lg px-4 bg-black`;

  return (
    <>
      <>
        <Link href={linkData.url || ""}>
          <div className={containerStyle}>
            <Image id={"site_image"} src={platform?.imageLocation || ""} alt={"Site Image"} width={20} height={20} />
            <span className={"pl-[8px] leading-[150%] text-white"}>{siteName}</span>
            <svg className={"ml-auto"} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.66699 7.33355V8.66688H10.667L7.00033 12.3335L7.94699 13.2802L13.227 8.00022L7.94699 2.72021L7.00033 3.66688L10.667 7.33355H2.66699Z" fill="white" />
            </svg>
          </div>
        </Link>
      </>
    </>
  );
}
