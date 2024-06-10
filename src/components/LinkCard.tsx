import SelectMenu from "@/components/SelectMenu";
import LinkInput from "@/components/LinkInput";
import Image from "next/image";
import { LinkProps, updateLinkHandlerProps } from "@/app/links/page";

export default function LinkCard({ link, updateLinkHandler }: { link: LinkProps; updateLinkHandler: updateLinkHandlerProps }) {
  return (
    <div className={"mt-6 rounded-md bg-gray-light px-5 py-5"}>
      <div className={"space-y-6"}>
        <div className={"flex"}>
          <Image src={"/images/icon-drag-and-drop.svg"} alt={"Drag and drop"} width={12} height={6} />
          <span className={"pl-[8px] font-bold leading-[150%] text-gray"}>Link #{link.id}</span>
          <span className={"ml-auto text-gray"}>Remove</span>
        </div>
        <div className={"space-y-3"}>
          <SelectMenu selectedLink={link.name} />
          <LinkInput link={link} updateLinkHandler={updateLinkHandler} />
        </div>
      </div>
    </div>
  );
}
