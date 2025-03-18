"use client";

import { useRef, useState } from "react";
import Messages from "@/components/Message";
import type { Message } from "@/types";

const SendMessageButton = () => {

  return (
    <div className="absolute bottom-0 right-0 p-2 w-fit flex flex-row justify-end">
      <button role="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-1.5 h-fit border dark:border-zinc-600">
        <svg height="14" viewBox="0 0 16 16" width="14" strokeLinejoin="round">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  );

} 

const ChatForm = () => {

  const formRef = useRef<HTMLFormElement | null>(null);

  const [ messages, setMessages ] = useState<Message[]>([]);
  const [ prompt, setPrompt ] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault ();

    setMessages((prev) => ([ ...prev, { text: prompt, date: "my_date", role: "USER" } ]));

    setPrompt ("");

    setTimeout (() => {

      setMessages((prev) => ([ ...prev, { text: "Hi I am a stupid LLM", date: "my_date", role: "ASSISTANT" } ]));

    }, 500)

  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); 
      formRef.current?.requestSubmit(); 
    }

  };

  return (
    <form className="flex h-full w-full md:max-w-3xl mx-auto" onSubmit={handleSubmit} ref={formRef}>
      <div className="relative w-full flex flex-col justify-end gap-3">
        <Messages messages={messages} />
        <textarea
          name="prompt"
          className="flex w-full border border-input px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none rounded-2xl !text-base bg-muted pb-10 dark:border-zinc-700"
          placeholder="Send a message..."
          onChange={(e) => setPrompt (e.target.value)}
          value={prompt}
          onKeyDown={handleKeyDown}
          autoFocus
        ></textarea>
        <SendMessageButton />
      </div>
    </form>
  );

}

export default ChatForm;