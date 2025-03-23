import { CoreMessage, streamText, type LanguageModel } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
// import { createOpenAI } from '@ai-sdk/openai';


class AIUtilBase {

  private model;
  
  constructor ({ model }: { model: LanguageModel }) {

    this.model = model;

  }

  async streamText ({ system, messages }: { system: string, messages: CoreMessage[] }) {

    const result = streamText({
      model: this.model,
      system: 'You are a helpful assistant.',
      messages,
    });
    
    return result.toDataStreamResponse();
  
  }

}


// const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });
const google = createGoogleGenerativeAI({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY });

const AIUtil = new AIUtilBase({
  // model: openai('gpt-4-turbo'),
  model: google('gemini-2.0-flash-001'),
});

export default AIUtil;