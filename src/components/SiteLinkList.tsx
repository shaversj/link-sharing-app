"use client";

import SiteLink from "@/components/SiteLink";

export default function SiteLinkList({ links }: any) {
  return (
    <>
      <div className={"flex flex-col items-center gap-y-5 pt-[56px]"}>
        {links.map((link: any) => (
          <SiteLink key={link.id} siteName={link.name || ""} linkData={link} />
        ))}
      </div>
    </>
  );
}
