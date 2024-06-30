import CustomizeLinksPage from "@/components/CustomizeLinksPage";
import { auth } from "../../../auth";

export default async function Links() {
  const session = await auth();
  if (!session?.user) return <div>Not authenticated</div>;

  return (
    <>
      <div>
        <CustomizeLinksPage userId={session?.user?.id || ""} />
      </div>
    </>
  );
}
