import { NextRequest } from "next/server";
import { getLinks } from "@/components/actions";

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  const links = await getLinks(userId || "");

  if (links.length > 0) {
    return Response.json(links);
  } else {
    return new Response(JSON.stringify({ message: "No links found" }), { status: 404 });
  }
}
