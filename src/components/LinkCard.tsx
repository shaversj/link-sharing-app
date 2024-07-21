import SelectMenu from "@/components/SelectMenu";
import LinkInput from "@/components/LinkInput";
import Image from "next/image";
import { dispatchProps, LinkProps } from "@/components/CustomizeLinksPage";

export default function LinkCard({ link, dispatch, idx }: { link: LinkProps; dispatch: dispatchProps; idx: number }) {
  function removeLinkHandler() {
    dispatch({ type: "remove", payload: link });
  }
  return (
    <div className={"mt-6 rounded-md bg-gray-light px-5 py-5"}>
      <div className={"space-y-6"}>
        <div className={"flex"}>
          <Image src={"/images/icon-drag-and-drop.svg"} alt={"Drag and drop"} width={12} height={6} />
          <span className={"pl-[8px] font-bold leading-[150%] text-gray"}>Link #{1 + idx}</span>
          <button onClick={() => dispatch({ type: "remove", payload: link })} className={"ml-auto text-gray"}>
            Remove
          </button>
        </div>
        <div className={"space-y-3"}>
          <SelectMenu selectedLink={link.name || ""} link={link} dispatch={dispatch} />
          <LinkInput link={link} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}
