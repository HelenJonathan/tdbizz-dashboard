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
        // Check if credentials are provided
        if (!credentials || !credentials.email || !credentials.password) {
          return null; // Return null if credentials are missing
        }

        // Validate credentials
        if (
          credentials.email === "admin@tradepla.com" &&
          credentials.password === "123456"
        ) {
          // Return user object if credentials are valid
          return {
            id: "1",
            email: credentials.email, // Include user's email
            // Add any additional user data here if needed
          };
        } else {
          // Return null if credentials are invalid
          return null;
        }
      },
    }),
  ],
};
