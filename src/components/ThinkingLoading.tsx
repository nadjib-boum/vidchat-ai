import { Loader2 } from "lucide-react";

const ThinkingLoading = () => {
  return (
    <div className="flex items-center gap-1 text-white">
      <Loader2 size={18} className="animate-spin" />
      <span>Thinking...</span>
    </div>
  );
}

export default ThinkingLoading;