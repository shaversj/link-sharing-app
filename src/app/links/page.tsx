"use client";
import { useState } from "react";
import LinksList from "@/components/LinksList";

export type LinkProps = {
  id: number;
  name: string;
  url: string;
};

export type updateLinkHandlerProps = (id: number, name: string, url: string) => void;

export default function Links() {
  const [links, setLinks] = useState<LinkProps[]>([
    { id: 1, name: "Twitter", url: "https://twitter.com" },
    { id: 2, name: "GitHub", url: "https://github.com" },
    { id: 3, name: "LinkedIn", url: "https://linkedin.com" },
  ]);

  function addLinkHandler() {
    setLinks([...links, { id: links.length + 1, name: "Github", url: "" }]);
  }

  function updateLinkHandler(id: number, name: string, url: string) {
    const updatedLinks = links.map((link) => {
      if (link.id === id) {
        return { id, name, url };
      }
      return link;
    });
    setLinks(updatedLinks);
  }

  return (
    <div className={"px-4 antialiased"}>
      <div className={"rounded-md bg-white px-6 py-6"}>
        <div className={"space-y-[0.5rem] pt-[4rem]"}>
          <h2 className={"text-left align-top text-[1.5rem] font-bold leading-[150%] text-dark-gray"}>Customize your links</h2>
          <p className={"text-[0.994rem] leading-[150%] text-gray"}>Add/edit/remove links below and then share all your profiles with the world!</p>
        </div>
        <button onClick={addLinkHandler} className={"mt-[2.5rem] w-full rounded-md border border-purple px-[1.688rem] py-[0.688rem] text-[1rem] font-bold leading-[150%] text-purple"}>
          + Add new Link
        </button>

        <LinksList links={links} updateLinkHandler={updateLinkHandler} />
      </div>
      <div className={"border border-white border-t-[#d9d9d9] bg-white p-4"}>
        <button className={"w-full rounded-md bg-[#d8ceff] px-[1.688rem] py-[0.688rem] align-top text-[1rem] font-bold leading-[150%] text-white"} type="submit">
          Save
        </button>
      </div>
    </div>
  );
}
