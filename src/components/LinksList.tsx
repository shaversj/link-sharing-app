import LinkCard from "@/components/LinkCard";
import { LinkProps, updateLinkHandlerProps, removeLinkHandlerProps } from "@/app/links/page";

export default function LinksList({ links, updateLinkHandler, removeLinkHandler }: { links: LinkProps[]; updateLinkHandler: updateLinkHandlerProps; removeLinkHandler: removeLinkHandlerProps }) {
  return (
    <div className={"space-y-6"}>
      {links.map((link) => (
        <LinkCard key={link.id} link={link} updateLinkHandler={updateLinkHandler} removeLinkHandler={removeLinkHandler} />
      ))}
    </div>
  );
}
