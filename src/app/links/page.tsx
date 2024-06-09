"use client";
import Image from "next/image";
import SelectMenu from "@/components/SelectMenu";
import LinkInput from "@/components/LinkInput";
import { useState } from "react";
import LinksList from "@/components/LinksList";

export default function Links() {
  const [links, setLinks] = useState<{ name: string; link: string }[]>([
    { name: "Twitter", link: "https://twitter.com" },
    { name: "GitHub", link: "https://github.com" },
    { name: "LinkedIn", link: "https://linkedin.com" },
  ]);

  function setLinksHandler() {
    setLinks([...links, { name: "", link: "" }]);
  }

  return (
    <div className={"px-4 antialiased"}>
      <div className={"rounded-md bg-white px-6 py-6"}>
        <div className={"space-y-[0.5rem] pt-[4rem]"}>
          <h2 className={"text-left align-top text-[1.5rem] font-bold leading-[150%] text-dark-gray"}>Customize your links</h2>
          <p className={"text-[0.994rem] leading-[150%] text-gray"}>Add/edit/remove links below and then share all your profiles with the world!</p>
        </div>
        <button className={"mt-[2.5rem] w-full rounded-md border border-purple px-[1.688rem] py-[0.688rem] text-[1rem] font-bold leading-[150%] text-purple"}>+ Add new Link</button>

        <LinksList links={links} />
      </div>
      <div className={"border border-white border-t-[#d9d9d9] bg-white p-4"}>
        <button className={"w-full rounded-md bg-[#d8ceff] px-[1.688rem] py-[0.688rem] align-top text-[1rem] font-bold leading-[150%] text-white"} type="submit">
          Save
        </button>
      </div>
    </div>
  );
}
