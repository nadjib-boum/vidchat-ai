"use client";

import { useRef } from "react";
import { useChat } from '@ai-sdk/react';
import Messages from "@/components/Message";
import SendMessageButton from "@/components/buttons/SendMessageButton";

const ChatForm = () => {

  const formRef = useRef<HTMLFormElement | null>(null);

  const { messages, input, handleInputChange, handleSubmit, status } = useChat ();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); 
      formRef.current?.requestSubmit(); 
    }

  };

  return (
    <form className="flex h-full w-full md:max-w-3xl mx-auto" onSubmit={handleSubmit} ref={formRef}>
      <div className="relative w-full flex flex-col justify-end gap-3">
        <Messages messages={messages} isThinking={status == "submitted"} isError={status == "error"} />
        <textarea
          name="prompt"
          className="flex w-full border border-input px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none rounded-2xl !text-base bg-muted pb-10 dark:border-zinc-700"
          placeholder="Send a message..."
          onChange={handleInputChange}
          value={input}
          onKeyDown={handleKeyDown}
          autoFocus
        ></textarea>
        <SendMessageButton />
      </div>
    </form>
  );

}

export default ChatForm;