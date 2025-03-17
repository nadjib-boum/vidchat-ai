import { useState, useEffect } from "react";

type CircularProgressPrsop = {
  percentage: number;
}

const CircularProgress = ({ percentage }: CircularProgressPrsop) => {

    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    const [offset, setOffset] = useState(circumference);

    useEffect(() => {
        
      setTimeout (() => {
        setOffset(circumference - (percentage / 100) * circumference);
      }, 50)

    }, [percentage, circumference]);

    return (
        <div style={{ position: "relative", width: "120px", height: "120px" }}>
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="transparent"
              strokeWidth="2"
            />
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{
                transition: "stroke-dashoffset 1s ease-in-out",
              }}
            />
          </svg>
          <div
              style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "20px",
                  color: "#FFF",
              }}
          >
              {percentage}%
          </div>
        </div>
    );
};

export default CircularProgress;
