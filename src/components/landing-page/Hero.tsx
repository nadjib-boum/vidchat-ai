"use client";

import { GridPattern } from "@/components/magicui/grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { cn } from "@/lib/utils";
import CTAButton from "../CTAButton";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center gap-10 overflow-hidden rounded-lg bg-background p-20 h-[75vh]">
      <div className="text-5xl font-bold flex flex-col gap-3 items-center mt-20">
        <TextAnimate animation="blurIn" duration={.8}>Turn Any Video into a Chat</TextAnimate> 
        <TextAnimate animation="blurIn" duration={.8} delay={1}>No More Endless Scrubbing!</TextAnimate> 
      </div>
      <div>
        <CTAButton text="Try It Now" />
      </div>
      <div>
        <GridPattern
          width={35}
          height={35}
          x={-1}
          y={-1}
          squares={[[10, 10]]}
          strokeDasharray={"0 0"}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
    </div>
  );
}


export default Hero;