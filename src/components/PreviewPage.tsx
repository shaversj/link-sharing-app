"use client";

import Image from "next/image";

import SiteLinkList from "@/components/SiteLinkList";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export function PreviewPage({ session }: { session: any }) {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const routeURL = new URL("http://localhost:3000/api/user/links?userId=" + session?.user?.id);
    fetch(routeURL, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setLinks(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className={"w-[375px] font-instrumentSans"}>
        <Header activePage={"preview"} />
        <div className={""}>
          <div className={"flex flex-col items-center"}>
            <Image alt={"Profile Image"} src={session?.user?.image || ""} width={104} height={104} />
            <h1 className={"text-[32px] font-bold leading-[150%]"}>{session.user.name}</h1>
            <h2 className={"leading-[150%] text-gray"}>{session.user.email}</h2>
          </div>

          {links && <SiteLinkList links={links} />}
        </div>
      </div>
    </>
  );
}
