import SelectMenu from "@/components/SelectMenu";
import LinkInput from "@/components/LinkInput";
import Image from "next/image";
import { LinkProps, removeLinkHandlerProps, updateLinkHandlerProps } from "@/app/links/page";

export default function LinkCard({ link, updateLinkHandler, removeLinkHandler }: { link: LinkProps; updateLinkHandler: updateLinkHandlerProps; removeLinkHandler: removeLinkHandlerProps }) {
  return (
    <div className={"mt-6 rounded-md bg-gray-light px-5 py-5"}>
      <div className={"space-y-6"}>
        <div className={"flex"}>
          <Image src={"/images/icon-drag-and-drop.svg"} alt={"Drag and drop"} width={12} height={6} />
          <span className={"pl-[8px] font-bold leading-[150%] text-gray"}>Link #{link.id}</span>
          <button onClick={() => removeLinkHandler(link.id)} className={"ml-auto text-gray"}>
            Remove
          </button>
        </div>
        <div className={"space-y-3"}>
          <SelectMenu selectedLink={link.name} />
          <LinkInput link={link} updateLinkHandler={updateLinkHandler} />
        </div>
      </div>
    </div>
  );
}
