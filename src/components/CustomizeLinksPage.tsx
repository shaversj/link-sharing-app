"use client";

import { v4 as uuidv4 } from "uuid";
import LinksList from "@/components/LinksList";
import useLinkReducer, { Action } from "@/app/hooks/useLinkReducer";
import Header from "@/components/Header";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Image from "next/image";

export type LinkProps = {
  id: string | null;
  userId: string;
  name: string;
  url: string;
};

export type dispatchProps = (action: Action) => void;

export default function CustomizeLinksPage({ userId }: { userId: string }) {
  async function getLinksfromDB() {
    const routeURL = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/user/link?userId=` + userId);
    return await fetch(routeURL);
  }

  const { links, dispatch } = useLinkReducer({
    initialLinks: [],
  });

  useEffect(() => {
    getLinksfromDB().then((data) => {
      data.json().then((data) => {
        if (data.length > 0) {
          data.forEach((link: LinkProps) => {
            dispatch({ type: "add", payload: link });
          });
        }
      });
    });
  }, []);

  function submitHandler(e: any) {
    dispatch({ type: "save", payload: links });
  }

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Header activePage={"links"} userId={userId} />
        <div className={"mt-4 px-4 antialiased"}>
          <div className={"md:px-[2.5rem] md:pb-6 md:pt-0 rounded-md bg-white px-6 py-6"}>
            <div className={"md:pt-[2.5rem] space-y-[0.5rem] "}>
              <h2 className={"md:text-[2rem] text-left align-top text-[1.5rem] font-bold leading-[150%] text-dark-gray"}>Customize your links</h2>
              <p className={"md:text-[1rem] text-[0.994rem] leading-[150%] text-gray"}>Add/edit/remove links below and then share all your profiles with the world!</p>
            </div>

            <button
              onClick={() =>
                dispatch({
                  type: "add",
                  payload: { id: uuidv4(), name: "GitHub", userId: userId, url: "" },
                })
              }
              className={"mt-[2.5rem] w-full rounded-md border border-purple px-[1.688rem] py-[0.688rem] text-[1rem] font-bold leading-[150%] text-purple"}
            >
              + Add new Link
            </button>

            {links.length === 0 && (
              <div className={"mt-6 rounded-xl bg-gray-light px-[6px] py-[46.5px]"}>
                <Image src="/images/illustration-empty.svg" className={"md:hidden mx-auto"} width={124.77} height={80} alt="Add" />
                <Image src="/images/illustration-empty.svg" className={"md:block mx-auto hidden"} width={249.53} height={160} alt="Add" />
                <div className={"md:mx-auto md:w-[488px]"}>
                  <h2 className={"md:text-[2rem] text-center text-[1.5rem] font-bold leading-[150%] text-dark-gray"}>Let&#39;s get you started</h2>
                  <p className={"md:text-[1rem] pt-6 text-center text-[0.994rem] leading-[150%] text-gray"}>
                    Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We&#39;re here to help you share your profiles with everyone!
                  </p>
                </div>
              </div>
            )}

            <LinksList links={links} dispatch={dispatch} />
          </div>
          <div className={"md:flex border border-white border-t-[#d9d9d9] bg-white p-4"}>
            <button
              onClick={(e) => submitHandler(e)}
              className={
                "md:px-[27px] md:py-[11px] md:w-[91px] md:h-[46px] md:ml-auto w-full rounded-md bg-[#d8ceff] px-[1.688rem] py-[0.688rem] align-top text-[1rem] font-bold leading-[150%] text-white"
              }
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </DndProvider>
    </>
  );
}
