import { CoreMessage, streamText, type LanguageModel } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';


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


const google = createGoogleGenerativeAI({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY });

const AIUtil = new AIUtilBase({
  model: google('gemini-2.0-flash-001'),
});

export default AIUtil;