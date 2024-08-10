import { getLinks, saveOrUpdateLink, deleteLinkById } from "@/components/actions";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../auth";

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  const links = await getLinks(userId || "");

  if (links.length > 0) {
    return Response.json(links);
  } else {
    return new Response(JSON.stringify({ message: "No links found" }), { status: 404 });
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  const res = await request.json();
  await saveOrUpdateLink(res.links);
  return new Response("OK");
}

export async function DELETE(request: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  const res = await request.json();
  await deleteLinkById(res.id);
  return new Response("OK");
}
