import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { Folder, KeyRound, MessageCircle } from "lucide-react";
import type { JSX } from "react";

type Feature = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <KeyRound className="h-6 w-6" />,
    title: "Create Your Account",
    description: "Sign up and access your video conversations anytime, anywhere. Your data stays secure and easily retrievable.",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Chat with Videos",
    description: "Type your questions, and AI will fetch the answers from your videos instantly. No need to rewind or fast-forward ever again.",
  },
  {
    icon: <Folder className="h-6 w-6" />,
    title: "Dedicated Video Dashboard",
    description: "Store, manage, and revisit your uploaded videos in an organized dashboard. Your conversations stay saved for future reference.",
  },
];


const Features = () => {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              Powerful Features to Transform How You Interact with Videos
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
            Chat with videos, store them in your dashboard, and get instant answers, no more scrubbing. Experience smarter video interaction with AI!
            </Balancer>
          </h4>

          <div className="mt-3 grid gap-6 md:grid-cols-3">
            {features.map(
              ({ icon, title, description, }, index) => (
                <div
                  className="flex flex-col justify-between gap-6 rounded-lg p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Features;
