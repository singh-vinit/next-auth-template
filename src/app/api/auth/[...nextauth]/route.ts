import NextAuth from "next-auth";
import { NEXTAUTH_CONFIG } from "@/app/lib/auth";

const handler = NextAuth(NEXTAUTH_CONFIG);

export { handler as GET, handler as POST };
