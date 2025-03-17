import { z } from "zod";
import type { APIErrorParams } from "@/utils/error";

export type Video = {
  id: number;
  name: string;
  date: string;
}

export const signupSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  username: z.string().min(4, { message: "Username must be at least 3 characters" }),
  password: z.string().min(4, { message: "Password must be at least 8 characters" })
})

export const videoSchema = z.object({
  name: z.string().nonempty(),
  url: z.string().nonempty(),
  userId: z.number(),
})

export type VideoInsert = z.infer<typeof videoSchema>;

export type LoginData = {
  username: string;
  password: string;
}

export type RegisterData = {
  username: string;
  email: string;
  password: string;
}

export type SignupFormState = {
  status: "success" | "error";
  data?: {
    user: {
      id: number;
    }
  };
  error?: APIErrorParams
}

declare module "next-auth" {

  interface Session {
    user: {
      id: string;
      email: string;
      username: string;
    };
  }
  
  interface User {
    id: string;
    email: string;
    username: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    email: string;
  }
}
