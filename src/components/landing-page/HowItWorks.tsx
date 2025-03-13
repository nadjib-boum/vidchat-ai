"use client";

import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import HowItWorkCard from "@/components/HowItWorkCard";
import type { CardItem } from "@/components/HowItWorkCard";

const cards: CardItem[] = [
  {
    title: "Sign Up",
    description: "Create your account for a personalized experience."
  },
  {
    title: "Upload a Video",
    description: "Add any video to your dashboard."
  },
  {
    title: "Start Chatting",
    description: "Ask questions and get instant AI answers!"
  },
]

const HowItWorks = () => {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl md:text-4xl mb-8 text-center">
          <Balancer>
            How It Works
          </Balancer>
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          { cards.map((card, index) => <HowItWorkCard key={index} card={card} index={index} />) }
        </div>
      </Container>
    </Section>
  )
}

export default HowItWorks;
