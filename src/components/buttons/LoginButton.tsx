import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginButton = () => {

  return (
    <Link href={"/login"}>
      <Button variant={"secondary"} size={"lg"}>Login</Button>
    </Link>
  );

}

export default LoginButton;