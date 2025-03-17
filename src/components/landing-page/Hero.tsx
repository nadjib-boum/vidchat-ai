import { GridPattern } from "@/components/magicui/grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import CTAButton from "@/components/buttons/CTAButton";
import LoginButton from "@/components/buttons/LoginButton";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center gap-10 overflow-hidden rounded-lg bg-background md:p-20 p-10 h-[70vh]">
      <div className="text-4xl md:text-5xl lg:text-6xl flex flex-col gap-4 items-center mt-20 text-center">
        <TextAnimate animation="blurIn" duration={1} className="font-bold">Turn Any Video into a Chat</TextAnimate> 
        <p className="md:text-xl text-lg text-white">
          Say No More To Endless Scrubbing!
        </p>
      </div>
      <div className="flex gap-2">
        <CTAButton />
        <LoginButton />
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
    </section>
  );
}


export default Hero;