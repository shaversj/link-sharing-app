import SelectMenu from "@/components/SelectMenu";
import LinkInput from "@/components/LinkInput";
import Image from "next/image";
import { dispatchProps, LinkProps } from "@/components/CustomizeLinksPage";
import { useDrag, useDrop } from "react-dnd";
import React, { useRef } from "react";

export default function LinkCard({ link, dispatch, idx, moveCard }: { link: LinkProps; dispatch: dispatchProps; idx: number; moveCard: any }) {
  function removeLinkHandler() {
    dispatch({ type: "remove", payload: link });
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "LINK",
    item: { index: idx },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [spec, dropRef] = useDrop({
    accept: "LINK",
    hover: (item: { index: number }, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = idx;
      if (item.index !== idx) {
        moveCard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  });

  const ref = useRef(null);
  const dragDropRef = drag(dropRef(ref));

  return (
    <div ref={dragDropRef} className={"mt-6 rounded-md bg-gray-light px-5 py-5"} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className={"space-y-6"}>
        <div className={"flex"}>
          <Image src={"/images/icon-drag-and-drop.svg"} alt={"Drag and drop"} width={12} height={6} />
          <span className={"pl-[8px] font-bold leading-[150%] text-gray"}>Link #{1 + idx}</span>
          <button onClick={removeLinkHandler} className={"ml-auto text-gray"}>
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
