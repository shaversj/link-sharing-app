import { auth } from "./auth";

// export { auth as middleware } from "./auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname == "/api/") {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }

  if (!req.auth && req.nextUrl.pathname !== "/login") {
    return Response.redirect(`${process.env.NEXT_PUBLIC_BACKEND_URL}error?error=NotAuthenticated`, 302);
  }
});
