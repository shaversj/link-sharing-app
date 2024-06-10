import LinkCard from "@/components/LinkCard";
import { LinkProps, updateLinkHandlerProps } from "@/app/links/page";

export default function LinksList({ links, updateLinkHandler }: { links: LinkProps[]; updateLinkHandler: updateLinkHandlerProps }) {
  return (
    <div className={"space-y-6"}>
      {links.map((link) => (
        <LinkCard key={link.id} link={link} updateLinkHandler={updateLinkHandler} />
      ))}
    </div>
  );
}
