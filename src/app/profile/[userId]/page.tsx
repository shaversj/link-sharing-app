import { auth } from "../../../../auth";
import { PreviewPage } from "@/components/PreviewPage";

export default async function ProfileDetails({ params }: { params: { userId: string } }) {
  const session = await auth();

  return (
    <>
      <PreviewPage userId={params.userId} isAuthenticated={!!session?.user} />
    </>
  );
}
