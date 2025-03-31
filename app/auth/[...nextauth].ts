import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { Session } from "@/types/session"
import { DefaultSession } from "next-auth"

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token, user }: { 
      session: DefaultSession, 
      token: any, 
      user: any 
    }) {
      if (session.user) {
        session.user = {
          ...session.user,
          id: token.sub,
          subscription: user.subscription
        } as Session['user']
      }
      return session
    },
  },
  session: {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24 * 7, // 7 days
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
