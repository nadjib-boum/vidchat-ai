"use client";

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link";
import { signIn } from "next-auth/react"
import { Loader2 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Button } from "@/components/ui/button"
import FormError from "@/components/FormError"
import { cn } from "@/lib/utils"

export default function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const [ loginData, setLoginData ] = useState<{ username: string; password: string; }>({ username: "", password: "" });
  const [ error, setError ] = useState<string | null> (null);
  const [ loading, setLoading ] = useState<boolean> (false);
  const router = useRouter ();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault ();

    setError (null);

    setLoading (true);

    const { username, password } = loginData;

    const loginOp = await signIn ("credentials", {
      redirect: false,
      username,
      password
    })

    setLoading (false);

    if (loginOp?.error) return setError ("Invalid Credentials")

    router.push("/dashboard");

  }

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
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="username" type="text"  value={loginData.username} onChange={(e) => setLoginData ((prev) => ({ ...prev, username: e.target.value }))} required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password"  value={loginData.password} onChange={(e) => setLoginData ((prev) => ({ ...prev, password: e.target.value }))} required />
              </div>
              <Button type="submit" className="w-full cursor-pointer" disabled={loading} onClick={handleClick}>
                { loading ? <Loader2 className="animate-spin" /> : "Login" }
              </Button>
              {
                error && <FormError message={error} />
              }
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
        <BorderBeam duration={8} size={300} className="hello" colorFrom="#FFF" colorTo="transparent" />
      </Card>
    </div>
  )
}
