import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/schema";
import Credentials from "@auth/core/providers/credentials";
import { getUserFromDb } from "@/components/actions";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        console.log("yes", credentials);

        // logic to verify if user exists
        if (typeof credentials.email === "string") {
          user = await getUserFromDb(credentials.email);
        }

        if (!user) {
          throw new Error("User not found.");
        }

        console.log(user);

        return user ? user[0] : null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
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
