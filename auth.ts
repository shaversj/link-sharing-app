import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [GitHub],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (typeof token.id === "string") {
        session.user.id = token.id;
      }
      return session;
    },
  },
});
