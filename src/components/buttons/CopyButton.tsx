import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Copy } from "lucide-react";
import { toast } from "sonner";

type CopyButtonProsp = {
  text: string;
}

const CopyButton = ({ text }: CopyButtonProsp) => {

  const handleClick = async () => {

    await navigator.clipboard.writeText (text);

    toast.success("Text Copied!");

  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-fit h-fit py-1 rounded-md cursor-pointer" onClick={handleClick}>
            <Copy size={16} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          Copy
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

}

export default CopyButton;