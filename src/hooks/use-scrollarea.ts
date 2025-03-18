import { useRef, useEffect } from "react";

export const useScrollArea = ({ size }: { size: number; }) => {

  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  
  // Effect to scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      // Get the actual viewport element (this is the element that can scroll)
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      
      if (viewport) {
        // Scroll to bottom
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [size]);

  return {
    scrollAreaRef
  }

}