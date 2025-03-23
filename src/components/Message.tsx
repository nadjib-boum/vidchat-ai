import { ScrollArea } from "@/components/ui/scroll-area";
import ThinkingLoading from "@/components/ThinkingLoading";
import { AssistantMessage, UserMessage } from "@/components/ChatMessages";
import { useScrollArea } from "@/hooks/use-scrollarea";
import type { Message } from "@/types";
import ChatErrorAlert from "./ChatErrorAlert";

type MessagesProps = {
  messages: Message[];
  isThinking: boolean;
  isError: boolean;
}

const Messages = ({ messages, isThinking, isError }: MessagesProps) => {

  const { scrollAreaRef } = useScrollArea ({ size: messages.length });

  return (
    <ScrollArea className="flex flex-col h-full overflow-hidden p-3 pb-10" ref={scrollAreaRef}>
      <div className="flex flex-col gap-6">
        { 
          messages.map ((msg, index) => {
            const msgKey = `${msg.role}_${index}`;
            return (msg.role != "user") ? <AssistantMessage key={msgKey} message={msg} /> : <UserMessage key={msgKey} message={msg} />
          })
        }
        { isThinking ? <ThinkingLoading /> : null }
        { isError ? <ChatErrorAlert /> : null }
      </div>
    </ScrollArea>
  );
}


export default Messages;