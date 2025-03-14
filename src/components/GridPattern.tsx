"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

type GridPatternProps = {
  children: React.ReactNode
}

const GridPatternDashed = ({ children }: GridPatternProps) => {
  return (
    <div className="">
      {children}
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
  );
}

export default GridPatternDashed;