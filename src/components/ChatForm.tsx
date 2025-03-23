"use client";

import { useRef, useState } from "react";
import { useChat } from '@ai-sdk/react';
import Messages from "@/components/Message";
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
        <Messages messages={messages} isThinking={status == "submitted"} />
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