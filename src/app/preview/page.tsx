import { auth } from "../../../auth";
import { PreviewPage } from "@/components/PreviewPage";

export default async function ProfileDetails() {
  const session = await auth();
  if (!session?.user) return <div>Not authenticated</div>;

  // async function getLinksfromDB() {
  //   const routeURL = new URL("http://localhost:3000/api/user/link?userId=" + session?.user?.id);
  //   return await fetch(routeURL, { cache: "no-store" });
  // }

  return (
    <>
      <PreviewPage session={session} />
    </>
  );
}
