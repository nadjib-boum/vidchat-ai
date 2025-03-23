import AIUtil from '@/utils/ai';
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;


export async function POST(req: Request) {

  const { messages } = await req.json();

  const response = await AIUtil.streamText ({
    system: 'You are a helpful assistant.',
    messages,
  });

  return response;
  
}