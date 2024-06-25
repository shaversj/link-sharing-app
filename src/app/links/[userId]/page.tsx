"use client";

import useLinkReducer from "@/app/hooks/useLinkReducer";
import LinksList from "@/components/LinksList";
import { v4 as uuidv4 } from "uuid";

export type LinkProps = {
  id: string | null;
  userId: string;
  name: string;
  url: string;
};

export type dispatchProps = (action: { type: string; payload: LinkProps }) => void;

export default function Links({ params }: { params: { userId: string } }) {
  const { links, dispatch } = useLinkReducer({
    initialLinks: [],
  });

  function submitHandler(e: any) {
    e.preventDefault();
    links.map((link) => {
      dispatch({ type: "save", payload: link });
    });
  }

  return (
    <div className={"px-4 antialiased"}>
      <div className={"rounded-md bg-white px-6 py-6"}>
        <div className={"space-y-[0.5rem] pt-[4rem]"}>
          <h2 className={"text-left align-top text-[1.5rem] font-bold leading-[150%] text-dark-gray"}>Customize your links</h2>
          <p className={"text-[0.994rem] leading-[150%] text-gray"}>Add/edit/remove links below and then share all your profiles with the world!</p>
        </div>
        <button
          onClick={() => dispatch({ type: "add", payload: { id: uuidv4(), name: "", userId: params.userId, url: "" } })}
          className={"mt-[2.5rem] w-full rounded-md border border-purple px-[1.688rem] py-[0.688rem] text-[1rem] font-bold leading-[150%] text-purple"}
        >
          + Add new Link
        </button>
        <LinksList links={links} dispatch={dispatch} />
      </div>
      <div className={"border border-white border-t-[#d9d9d9] bg-white p-4"}>
        <button onClick={(e) => submitHandler(e)} className={"w-full rounded-md bg-[#d8ceff] px-[1.688rem] py-[0.688rem] align-top text-[1rem] font-bold leading-[150%] text-white"} type="submit">
          Save
        </button>
      </div>
    </div>
  );
}
