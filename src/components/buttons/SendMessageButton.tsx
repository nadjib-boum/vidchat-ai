import { SendHorizonal } from "lucide-react";

const SendMessageButton = () => {

  return (
    <div className="absolute bottom-0 right-0 p-2 w-fit flex flex-row justify-end">
      <button role="submit" className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-1.5 h-fit border dark:border-zinc-600">
        <SendHorizonal color="#000" />
      </button>
    </div>
  );

} 

export default SendMessageButton;