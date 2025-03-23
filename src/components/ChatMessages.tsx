import CopyButton from "@/components/buttons/CopyButton";
import type { Message } from "@/types";


type UserMessageProps = {
  message: Message;
}

export const UserMessage = ({ message }: UserMessageProps) => {
  return (
    <div className="flex justify-end w-max-[60%]">
      <span className="px-3 py-2 bg-white text-black rounded-xl">{message.content}</span>
    </div>
  );
}

type AssistantMessageProps = {
  message: Message;
}

export const AssistantMessage = ({ message }: AssistantMessageProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-white rounded-xl">{message.content}</span>
      <CopyButton text={message.content} />
    </div>
  );
}
