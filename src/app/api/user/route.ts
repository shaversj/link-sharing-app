import { getUser } from "@/components/actions";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");

  return Response.json(await getUser(userId || ""));
}
