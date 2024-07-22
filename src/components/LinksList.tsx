import LinkCard from "@/components/LinkCard";
import { dispatchProps, LinkProps } from "@/components/CustomizeLinksPage";

export default function LinksList({ links, dispatch }: { links: LinkProps[]; dispatch: dispatchProps }) {
  const moveCard = (fromIndex: number, toIndex: number) => {
    dispatch({ type: "move", payload: { fromIndex, toIndex } });
  };

  return (
    <div className={"space-y-6"}>
      {links.map((link, idx) => (
        <LinkCard key={link.id} idx={idx} link={link} moveCard={moveCard} dispatch={dispatch} />
      ))}
    </div>
  );
}
