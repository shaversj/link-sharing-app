import { NextRequest } from "next/server";
import { getSiteByName } from "@/components/actions";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const siteName = searchParams.get("siteName");
  const siteDetails = await getSiteByName(siteName || "");

  if (siteDetails.length > 0) {
    return Response.json(siteDetails[0]);
  } else {
    return new Response(JSON.stringify({ message: "No Sites Found" }), { status: 404 });
  }
}
