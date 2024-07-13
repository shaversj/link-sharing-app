"use client";

import SiteLinkList from "@/components/SiteLinkList";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Image from "next/image";

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export function PreviewPage({ userId, isAuthenticated }: { userId?: string; isAuthenticated: boolean }) {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({} as User);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async (endpoint: string, method: "POST" | "GET") => {
      const routeURL = new URL(`http://localhost:3000/api/user${endpoint}?userId=${userId}`);
      const response = await fetch(routeURL, { method });
      const data = await response.json();
      if (endpoint === "/links") {
        setLinks(data);
        setIsLoading(false);
      } else {
        setUser(data);
        setIsUserLoading(false);
      }
    };
    fetchUserData("", "GET");
    fetchUserData("/links", "POST");
  }, []);

  if (isUserLoading || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={"w-[375px] font-instrumentSans"}>
        {isAuthenticated && <Header activePage={"preview"} />}
        <div className={""}>
          <div className={"flex flex-col items-center"}>
            <Image alt={"Profile Image"} src={user.image || ""} width={104} height={104} />
            <h1 className={"text-[32px] font-bold leading-[150%]"}>{user && user.name}</h1>
            <h2 className={"leading-[150%] text-gray"}>{user && user.email}</h2>
          </div>
          {links && <SiteLinkList links={links} />}
        </div>
      </div>
    </>
  );
}
