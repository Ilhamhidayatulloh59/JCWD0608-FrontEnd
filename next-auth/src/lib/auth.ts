import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "./axios";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { data } = await axios.post("/users/login", {
          login: credentials.email,
          password: credentials.password,
        });

        if (!data) {
          throw new Error("Invalid credentials.");
        }

        return data;
      },
    }),
    Google({
      clientId: process.env.NEXT_GOOGLE_ID,
      clientSecret: process.env.NEXT_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 3,
  },
  callbacks: {
    signIn: async () => {
      return true;
    },
    session: async ({ token, session }) => {
      session.user = { ...session.user, ...token, email: token.email || "" };
      return session;
    },
    jwt: async ({ token, user }) => {
      token = { ...token, ...user };
      return token;
    },
  },
});
