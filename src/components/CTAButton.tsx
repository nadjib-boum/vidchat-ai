import Link from "next/link";
import { Button } from "@/components/ui/button";

type CTAButtonProps = {
  text: string;
}

const CTAButton = ({ text }: CTAButtonProps) => {

  return (
    <Link href={"/"}>
      <Button size={"lg"}>Try It Now</Button>
    </Link>
  );

}

export default CTAButton;