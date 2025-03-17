"use client";

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signIn } from "next-auth/react";

/* <components> */
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { BorderBeam } from "@/components/magicui/border-beam"
  import ErrorField from "@/components/ErrorField";
  import FormError from "@/components/FormError";
  import SubmitButton from "@/components/buttons/SubmitButton";
/* </components> */

import { cn } from "@/lib/utils"
import { signup } from "@/actions";
import type { SignupFormState } from "@/types";

export default function SignupForm({ className,...props }: React.ComponentPropsWithoutRef<"div">) {

  const router = useRouter();
  const [ state, setState ] = useState<SignupFormState>({ status: "error" })
  const [ loginData, setLoginData ] = useState<{ username: string; password: string; }>({ username: "", password: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    try  {

      e.preventDefault ();

      const form = e.target as HTMLFormElement;

      const formData = new FormData (form);

      const res = await signup (formData);

      setState (res);

      if (res.status == "success") {

        const username = formData.get("username");
        const password = formData.get("password");

        const signInOp = await signIn ("credentials", {
          redirect: false,
          username,
          password,
        })

        if (signInOp?.error) {

          return setState({
            status: "error",
            error: {
              code: "INVALID_CREDENTIALS",
              status: 401,
              message: "Authentication Error",
            }
          })

        }

        router.push('/dashboard');

      } else {

        console.log ("error", res.error);

      }
    
    } catch (err) {
    
      console.log ("error", err)

    }

  } 

  console.log ("err code", state.error?.code)

  return (
    <div className={cn("flex flex-col gap-6 overflow-hidden", className)} {...props}>
      <Card className="relative">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="mr_someone"
                  onChange={(e) => setLoginData ((prev) => ({ ...prev, username: e.target.value }))}
                  required
                />
                { state.error?.code == "INVALID_INPUT" && state.error?.details![0].username && <ErrorField error={state.error?.details![0].username} /> }
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e) => setLoginData ((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
                { state.error?.code == "INVALID_INPUT" && state.error?.details![0].email && <ErrorField error={state.error?.details![0].email} /> }
                </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password" 
                  onChange={(e) => setLoginData ((prev) => ({ ...prev, password: e.target.value }))}
                  required
                />
                { state.error?.code == "INVALID_INPUT" && state.error?.details![0].password && <ErrorField error={state.error?.details![0].password} /> }
                </div>
              <SubmitButton text="Register" />
              {
                state.error && state.error?.code != "INVALID_INPUT" && <FormError message={state.error?.message!} />
              }
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
        <BorderBeam duration={8} size={350} className="hello" colorFrom="#FFF" colorTo="transparent" />
      </Card>
    </div>
  )
}
