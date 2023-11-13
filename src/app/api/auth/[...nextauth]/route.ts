import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "@/helpers/constants";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "superuser-login",
      name: "Super-user Authentication",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        const user = users.find((item) => item.email === credentials.email);
        if (user.password === credentials.password) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    // Sign-In Page
    signIn: "/auth/login",
  },
  session: {
    maxAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.user = user;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user = token?.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
