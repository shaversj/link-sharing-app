import LinkCard from "@/components/LinkCard";

type linksProps = {
  name: string;
  link: string;
};

export default function LinksList({ links }: { links: linksProps[] }) {
  return (
    <div className={"space-y-6"}>
      {links.map((link, idx) => (
        <>
          <LinkCard linkName={link.name} linkUrl={link.link} linkNumber={idx + 1} />
        </>
      ))}
    </div>
  );
}
