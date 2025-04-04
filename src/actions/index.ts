"use server";

import { revalidatePath } from "next/cache";
import userService from "@/services/user";
import videoService from "@/services/video";
import APIError from "@/utils/error";
import { type SignupFormState, signupSchema, type VideoInsert, videoSchema } from "@/types";

export async function signup(formData: FormData): Promise<SignupFormState> {

  try {

    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validatedFields = signupSchema.safeParse({ username, email, password })
    
    if (!validatedFields.success) {

      throw new APIError ({
        status: 400,
        code: "INVALID_INPUT",
        message: "Signup input is invalid",
        details: [validatedFields.error.flatten().fieldErrors]
      });

    } 

    const user = await userService.register ({ username, email, password });

    return {
      status: "success",
      data: {
        user
      }
    };

  } catch (err: any) {

    if (err instanceof APIError) {
      return {
        status: "error",
        error: err.getError ()
      }
    }
    
    console.log ("err", err);

    return {
      status: "error",
      error: {
        status: 500,
        code: "SERVER_ERROR",
        message: "Something Went Wrong",
      }
    }

  } 

}

export async function addVideo (data: VideoInsert) {

  try {

    const { name, url, userId } = data;

    const validatedFields = videoSchema.safeParse({ name, url, userId })

    if (!validatedFields.success) {

      throw new APIError ({
        status: 400,
        code: "INVALID_INPUT",
        message: "Signup input is invalid",
        details: [validatedFields.error.flatten().fieldErrors]
      });

    } 

    const video = await videoService.addVideo ({ name, url, userId });

    return {
      status: "success",
      data: {
        video
      }
    };

  }
  catch (err) {

    if (err instanceof APIError) {
      return {
        status: "error",
        error: err.getError ()
      }
    }
    
    console.log ("err", err);

    return {
      status: "error",
      error: {
        status: 500,
        code: "SERVER_ERROR",
        message: "Something Went Wrong",
      }
    }


  }

}

export async function deleteVideo (id: number) {

  try {

    await videoService.deleteVideo (id);

    revalidatePath (`/dashboard`);

    return {
      status: "success"
    }

  } catch (err) {

    if (err instanceof APIError) {
      return {
        status: "error",
        error: err.getError ()
      }
    }
    
    console.log ("err", err);

    return {
      status: "error",
      error: {
        status: 500,
        code: "SERVER_ERROR",
        message: "Something Went Wrong",
      }
    }

  }

}