import CredentialsProvider from "next-auth/providers/credentials";

export const NEXTAUTH_CONFIG = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize() {
        const user = {
          id: "1",
          name: "vinit",
          email: "singhvinit435@gmail.com",
        };
        if (user) return user;
        else return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    async session({ session, token, user }: any) {
      if (session.user) {
        session.user.id = token.uid;
      }
      return session;
    },
  },
};
