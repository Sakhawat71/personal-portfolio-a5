// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";
// import { cookies } from "next/headers";

// declare module "next-auth" {
//     interface User {
//         accessToken?: string;
//     }
// }
// declare module "next-auth" {
//     interface Session {
//         accessToken?: string;
//     }
// }


// export const authOptions: NextAuthOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//         }),

//         GithubProvider({
//             clientId: process.env.GITHUB_CLIENT_ID as string,
//             clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//         }),

//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "email" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 try {
//                     const res = await fetch(`${process.env.NEXTAUTH_URL}/auth/login`, {
//                         method: "POST",
//                         headers: { "Content-Type": "application/json" },
//                         body: JSON.stringify(credentials),
//                     });

//                     const responseData = await res.json();
//                     if (!res.ok || !responseData.data?.token) {
//                         throw new Error(responseData.message || "Invalid credentials");
//                     }

//                     const { token } = responseData.data;

//                     (await cookies()).set("accessToken", token, {
//                         httpOnly: true,
//                         secure: process.env.NODE_ENV === "production",
//                         maxAge: 7 * 24 * 60 * 60,
//                         path: "/",
//                     });

//                     return { ...responseData.data, accessToken: token };
//                 } catch (error) {
//                     console.error("Login Error:", (error as any)?.message);
//                     throw new Error((error as any)?.message);
//                 }
//             },
//         }),
//     ],

//     pages: {
//         signIn: "/login",
//     },

//     callbacks: {
//         async jwt({ token, user }) {
//             if (user?.accessToken) {
//                 token.accessToken = user.accessToken;
//             }
//             return token;
//         },
//         async session({ session, token }) {
//             if (token.accessToken) {
//                 session.accessToken = token.accessToken as string;
//             }
//             return session;
//         },
//     },

//     session: {
//         strategy: "jwt",
//     },

//     secret: process.env.NEXTAUTH_SECRET as string,
// };



import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

declare module "next-auth" {
    interface User {
        accessToken?: string;
    }
    interface Session {
        accessToken?: string;
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        // GithubProvider({
        //     clientId: process.env.GITHUB_CLIENT_ID!,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        //     authorization: {
        //         params: {
        //             redirect_uri: `${process.env.NEXTAUTH_URL}/auth/callback/github`
        //         }
        //     }
        // }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(credentials),
                    });

                    if (!res.ok) {
                        const errorData = await res.json();
                        throw new Error(errorData.message || "Authentication failed");
                    }

                    const responseData = await res.json();

                    if (!responseData.data?.token) {
                        throw new Error("Invalid response from server");
                    }

                    return {
                        ...responseData.data.user,
                        accessToken: responseData.data.token
                    };
                } catch (error) {
                    console.error("Login Error:", error);
                    throw new Error(typeof error === 'string' ? error : "Authentication failed");
                }
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user?.accessToken) {
                token.accessToken = user.accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string;
            return session;
        },
    },
    session: {
        strategy: "jwt",
        maxAge: 7 * 24 * 60 * 60, // 7 days
    },
    cookies: {
        sessionToken: {
            name: "next-auth.session-token",
            options: {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
                maxAge: 7 * 24 * 60 * 60, // 7 days
            },
        },
    },
    secret: process.env.NEXTAUTH_SECRET as string,
};
