import { promptSuggestions } from "@/data";

const PromptSuggestions = () => {

  return (
    <div className="grid sm:grid-cols-2 gap-2 w-full">
      {promptSuggestions.map(({ title, subtitle, hidden }, index) => (
        <div key={index} className={`${hidden ? "hidden sm:block" : "block"}`} style={{ opacity: 1, transform: "none" }}>
          <button className="inline-flex whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start">
            <span className="font-medium">{title}</span>
            <span className="text-muted-foreground">{subtitle}</span>
          </button>
        </div>
      ))}
    </div>
  );

}