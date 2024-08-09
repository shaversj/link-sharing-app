"use client";

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
  // const [site, setSite] = useState<Site>();
  // const [isLoading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   const routeURL = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/user/site?siteName=` + siteName);
  //   fetch(routeURL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setSite(data);
  //       setLoading(false);
  //     });
  // }, []);

  const platform = platformSites.find((site) => site.name === siteName);
  const containerStyle = platform?.backgroundColor
    ? `flex h-[56px] w-[237px] items-center rounded-lg px-4 ${platform.backgroundColor}`
    : `flex h-[56px] w-[237px] items-center rounded-lg px-4 bg-black`;

  const backgroundColors: { [index: string]: string } = {
    "1a1a1a": "bg-[#1a1a1a]",
    "43b7e9": "bg-[#43b7e9]",
    "2d68ff": "bg-[#2d68ff]",
    black: "bg-black",
    "8a1a50": "bg-[#8a1a50]",
    "333333": "bg-[#333333]",
    "2442ac": "bg-[#2442ac]",
    "302267": "bg-[#302267]",
    ffffff: "bg-[#ffffff]",
    eb4a25: "bg-[#eb4a25]",
    "0330d1": "bg-[#0330d1]",
    ed3fc8: "bg-[$ed3fc8]",
    ee3939: "bg-[#ee3939]",
  };

  return (
    <>
      <>
        <Link href={linkData.url || ""}>
          <div className={containerStyle}>
            <Image id={"site_image"} className={""} src={platform?.imageLocation || ""} alt={"Site Image"} width={20} height={20} />
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
