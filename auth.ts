import NextAuth, { CredentialsSignin } from "next-auth";
import GitHub from "@auth/core/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/schema";
import Credentials from "@auth/core/providers/credentials";
import { createAccount, createUser, createUserSession, getUserByEmail } from "@/components/actions";
import { generateSessionToken } from "@/lib/utils";
import { randomUUID } from "node:crypto";
import bcrypt from "bcrypt";

function saltAndHashPassword(password: string) {
  // Create a salted hash of the password
  const saltedPassword = password + process.env.SALT;
  return password;
}

const session = {
  // strategy: "database",
  maxAge: 30 * 24 * 60 * 60, // 30 days
  updateAge: 24 * 60 * 60, // 24 hours
};

class UserNotFound extends CredentialsSignin {
  code = "UserNotFound";
}
class InvalidCredentials extends CredentialsSignin {
  code = "InvalidCredentials";
}
class PasswordNotSet extends CredentialsSignin {
  code = "PasswordNotSet";
}

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
        if (!credentials.email || !credentials.password) {
          throw new InvalidCredentials();
        }

        let user = await getUserByEmail(credentials.email as string);
        if (!user.length) {
          throw new UserNotFound();
        }

        const userPassword = user[0].password;

        // Compare the password from the database with the password from the form.
        if (userPassword && credentials.password) {
          if (!bcrypt.compareSync(credentials.password as string, userPassword)) {
            throw new InvalidCredentials();
          }
        }

        return {
          id: user[0]?.id,
          name: user[0]?.name,
          email: user[0]?.email,
          image: user[0]?.image,
        };

        // try {
        //   let user = await getUserByEmail(credentials.email as string);
        //   if (!user.length) {
        //     const accountId = randomUUID();
        //     await createUser({
        //       id: accountId,
        //       email: credentials.email as string,
        //       password: saltAndHashPassword(credentials.password as string),
        //     });
        //     await createAccount({
        //       userId: accountId,
        //       type: "credentials",
        //       provider: "credentials",
        //       providerAccountId: accountId,
        //     });
        //     user = await getUserByEmail(credentials.email as string);
        //   }
        //   return {
        //     id: user[0]?.id,
        //     name: user[0]?.name,
        //     email: user[0]?.email,
        //     image: user[0]?.image,
        //   };
        // } catch (error) {
        //   console.log("Custom Error", error);
        // }

        // return null;
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
