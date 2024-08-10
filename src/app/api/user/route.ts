import { getUser } from "@/components/actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // const session = await auth();
  // if (!session?.user) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  const userId = request.nextUrl.searchParams.get("userId");
  return NextResponse.json(await getUser(userId || ""));
}
