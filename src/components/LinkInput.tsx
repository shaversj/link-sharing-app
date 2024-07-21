import Image from "next/image";
import { useState } from "react";
import { dispatchProps, LinkProps } from "@/components/CustomizeLinksPage";

export default function LinkInput({ link, dispatch }: { link: LinkProps; dispatch: dispatchProps }) {
  const [linkValue, setLinkValue] = useState(link.url);

  function handleLinkChange(e: any) {
    setLinkValue(e.target.value);
    dispatch({ type: "update", payload: { ...link, url: e.target.value } });
  }

  return (
    <div>
      <label htmlFor="email" className="block text-xs font-medium leading-[150%] text-gray">
        Email
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Image src={"/images/icon-link.svg"} alt={"Link"} width={16} height={16} />
          {/*<EnvelopeIcon className="text-gray-400 h-5 w-5" aria-hidden="true" />*/}
        </div>
        <input
          type="text"
          name="link"
          id="link"
          className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="e.g. https://github.com/"
          defaultValue={link.url || ""}
          onChange={(e) => handleLinkChange(e)}
        />
      </div>
    </div>
  );
}
