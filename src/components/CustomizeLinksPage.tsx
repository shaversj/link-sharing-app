"use client";

import { v4 as uuidv4 } from "uuid";
import LinksList from "@/components/LinksList";
import useLinkReducer from "@/app/hooks/useLinkReducer";
import Header from "@/components/Header";

export type LinkProps = {
  id: string | null;
  userId: string;
  name: string;
  url: string;
};

export type dispatchProps = (action: { type: string; payload: LinkProps }) => void;

export default function CustomizeLinksPage({ userId }: { userId: string }) {
  const { links, dispatch } = useLinkReducer({
    initialLinks: [],
  });

  async function getLinksfromDB() {
    const routeURL = new URL("http://localhost:3000/api/user/link?userId=" + userId);
    return await fetch(routeURL);
  }

  if (links.length === 0) {
    getLinksfromDB().then((data) => {
      data.json().then((data) => {
        if (data.length > 0) {
          data.map((link: LinkProps) => {
            dispatch({ type: "add", payload: link });
          });
        }
      });
    });
  }

  function submitHandler(e: any) {
    e.preventDefault();
    links.map((link) => {
      dispatch({ type: "save", payload: link });
    });
  }
  return (
    <>
      <Header activePage={"links"} />
      <div className={"mt-4 px-4 antialiased"}>
        <div className={"rounded-md bg-white px-6 py-6"}>
          <div className={"space-y-[0.5rem] pt-[4rem]"}>
            <h2 className={"text-left align-top text-[1.5rem] font-bold leading-[150%] text-dark-gray"}>Customize your links</h2>
            <p className={"text-[0.994rem] leading-[150%] text-gray"}>Add/edit/remove links below and then share all your profiles with the world!</p>
          </div>
          <button
            onClick={() =>
              dispatch({
                type: "add",
                payload: { id: uuidv4(), name: "", userId: userId, url: "" },
              })
            }
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
    </>
  );
}
