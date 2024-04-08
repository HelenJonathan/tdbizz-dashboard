import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  pages: {
    signIn: "/signin",
  },

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },

      async authorize(credentials, req) {
        if (
          credentials?.email === "helenjonathan333@gmail.com" &&
          credentials?.password === "123456"
        ) {
          return {
            id: "1",
            message: "Successful login",
          };
        }
        // === API auth ops ===
        // const res = await fetch("http://localhost:3000/api/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email,
        //     password,
        //   }),
        // });
        // const user = await res.json();
        // if (res.ok && user) {
        //   return user;
        // } else return null;
      },
    }),
  ],
};
