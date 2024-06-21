import { getLinksById } from "@/components/actions";
import SiteLink from "@/components/SiteLink";

export default async function SiteLinkList({ id }: { id: string }) {
  const links = await getLinksById(id);
  return (
    <>
      <div className={"flex flex-col items-center gap-y-5 pt-[56px]"}>
        {links.map((link) => (
          <SiteLink key={link.id} siteName={link.name || ""} />
        ))}
      </div>
    </>
  );
}
