import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
