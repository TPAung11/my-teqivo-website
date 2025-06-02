import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your authentication logic here
        if (credentials?.username === "admin" && credentials?.password === "your-secure-password") {
          return {
            id: "1",
            name: "Admin",
            email: "admin@example.com",
            role: "admin"
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (<any>user).role
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        (<any>session.user).role = token.role
      }
      return session
    }
  }
})

export { handler as GET, handler as POST }