import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTAButton = () => {

  return (
    <Link href={"/signup"}>
      <Button size={"lg"}>Try It Now</Button>
    </Link>
  );

}

export default CTAButton;