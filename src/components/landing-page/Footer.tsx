import Link from "next/link";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Facebook, Linkedin } from "lucide-react";
import type { JSX } from "react";

type FooterLinkProps = {
  href: string;
  icon: JSX.Element;
}

const FooterLink = ({ href, icon }: FooterLinkProps) => {
  return (
    <Link href={href} target="_blank">
      <Button variant="outline" size="icon">
        {icon}
      </Button>
    </Link>
  );
}


export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <FooterLink href="https://github.com/nadjib-boum/vidchat-ai" icon={<Github />} />
            <FooterLink href="https://x.com/nadjib_dev" icon={<Twitter />} />
            <FooterLink href="https://www.linkedin.com/in/nadjib-boumekhiet-08707a258" icon={<Linkedin />} />
          </div>
          <p className="text-muted-foreground">
            ©{" "} All rights reserved. {new Date().getFullYear ()}
          </p>
        </Container>
      </Section>
    </footer>
  );
}
