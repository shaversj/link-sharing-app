import { NextRequest, NextResponse } from "next/server";
import { deleteAllLinks, getLinks, removeAndUpdateLinks } from "@/components/actions";
import { auth } from "../../../../../auth";

export async function PUT(request: NextRequest) {
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

export async function DELETE(request: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  await deleteAllLinks(userId || "");
  return new Response("OK");
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  const res = await request.json();
  await deleteAllLinks(res.userId || "");
  await removeAndUpdateLinks(res.userId || "", res.links);
  return new Response("OK");
}
