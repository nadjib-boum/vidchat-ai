import { ScrollArea } from "@/components/ui/scroll-area";
import CopyButton from "@/components/buttons/CopyButton";
import { useScrollArea } from "@/hooks/use-scrollarea";
import type { Message } from "@/types";

type UserMessageProps = {
  message: Message;
}

const UserMessage = ({ message }: UserMessageProps) => {
  return (
    <div className="flex justify-end w-max-[60%]">
      <span className="px-3 py-2 bg-white text-black rounded-xl">{message.text}</span>
    </div>
  );
}

type AssistantMessageProps = {
  message: Message;
}

const AssistantMessage = ({ message }: AssistantMessageProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-white rounded-xl">{message.text}</span>
      <CopyButton text={message.text} />
    </div>
  );
}

type MessagesProps = {
  messages: Message[]
}

const Messages = ({ messages }: MessagesProps) => {

  const { scrollAreaRef } = useScrollArea ({ size: messages.length });

  return (
    <ScrollArea className="flex flex-col h-full overflow-hidden p-3 pb-10" ref={scrollAreaRef}>
      <div className="flex flex-col gap-6">
        { 
          messages.map ((msg, index) => {
            const msgKey = `${msg.role}_${index}`;
            return (
              (msg.role == "ASSISTANT") ? <AssistantMessage key={msgKey} message={msg} /> : <UserMessage key={msgKey} message={msg} />
            )
          })
        }
      </div>
    </ScrollArea>
  );
}


export default Messages;