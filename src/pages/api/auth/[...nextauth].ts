import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "google-client-id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "google-client-secret"
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_CLIENT_ID ?? "apple-client-id",
    //   clientSecret: process.env.APPLE_CLIENT_SECRET ?? "apple-client-secret"
    // })
  ],
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET ?? "replace-me",
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role ?? "venue-admin";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = (token as { role?: string }).role ?? "venue-admin";
      }
      return session;
    }
  }
};

export default NextAuth(authOptions);
