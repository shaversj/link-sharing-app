import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/schema";
import Credentials from "@auth/core/providers/credentials";
import { createAccount, createUser, createUserSession, getUserByEmail } from "@/components/actions";
import { generateSessionToken } from "@/lib/utils";
import { randomUUID } from "node:crypto";

function saltAndHashPassword(password: string) {
  return password;
}

const session = {
  // strategy: "database",
  maxAge: 30 * 24 * 60 * 60, // 30 days
  updateAge: 24 * 60 * 60, // 24 hours
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  jwt: {
    encode({ token }) {
      // This is the string returned from the `jwt` callback.
      // It represents the session token that will be set in the browser.
      // https://github.com/nextauthjs/next-auth/discussions/4394#discussioncomment-7696263
      if (token && token.id) {
        return token.id as unknown as string;
      }
      return "";
    },
    async decode() {
      // Disable default JWT decoding.
      // This method is really only used when using the email provider.
      return null;
    },
  },
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    generateSessionToken: () => generateSessionToken(),
  },
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub({
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
        callbackUrl: {},
      },
      authorize: async (credentials) => {
        try {
          let user = await getUserByEmail(credentials.email as string);
          if (!user.length) {
            const accountId = randomUUID();
            await createUser({
              id: accountId,
              email: credentials.email as string,
              password: saltAndHashPassword(credentials.password as string),
            });
            await createAccount({
              userId: accountId,
              type: "credentials",
              provider: "credentials",
              providerAccountId: accountId,
            });
            user = await getUserByEmail(credentials.email as string);
          }
          return {
            id: user[0]?.id,
            name: user[0]?.name,
            email: user[0]?.email,
            image: user[0]?.image,
          };
        } catch (error) {
          console.log("Custom Error", error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/links";
    },
    async session({ session, token, user }) {
      // Make our own custom session object.
      return session;
    },
    async jwt({ token, user, account }) {
      // Override default jwt callback behavior.
      // Create a session instead and then return that session token for use in the `jwt.encode`.

      if (account?.provider !== "credentials") return token;
      const sessionToken = generateSessionToken();
      const sessionExpiry = new Date(Date.now() + session.maxAge * 1000);
      await createUserSession(sessionToken, user.id as string, sessionExpiry);
      return { id: sessionToken };
    },
  },
});
