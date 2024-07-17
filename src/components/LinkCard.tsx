import SelectMenu from "@/components/SelectMenu";
import LinkInput from "@/components/LinkInput";
import Image from "next/image";
import { dispatchProps, LinkProps } from "@/app/links/[userId]/page";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function LinkCard({ link, dispatch, idx }: { link: LinkProps; dispatch: dispatchProps; idx: number }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: link.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={"mt-6 rounded-md bg-gray-light px-5 py-5"}>
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
