'use server';

/**
 * @fileOverview A RAG-powered chatbot, available from the landing page, that is trained on a curated knowledge base
 * (including the Traveler's Covenant, Academy articles, and up-to-date safety information) to answer complex
 * and sensitive questions about travel in Israel, the post-war reality, cultural etiquette, and logistics,
 * all within the authoritative and reassuring "Warrior-Guide" voice of the brand.
 *
 * - oracleTravelAssistant - A function that handles the travel assistant process.
 * - OracleTravelAssistantInput - The input type for the oracleTravelAssistant function.
 * - OracleTravelAssistantOutput - The return type for the oracleTravelAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OracleTravelAssistantInputSchema = z.object({
  query: z.string().describe('The user query about travel, cultural etiquette, and logistics.'),
});
export type OracleTravelAssistantInput = z.infer<typeof OracleTravelAssistantInputSchema>;

const OracleTravelAssistantOutputSchema = z.object({
  response: z.string().describe('The response from the AI-powered travel assistant.'),
});
export type OracleTravelAssistantOutput = z.infer<typeof OracleTravelAssistantOutputSchema>;

export async function oracleTravelAssistant(input: OracleTravelAssistantInput): Promise<OracleTravelAssistantOutput> {
  return oracleTravelAssistantFlow(input);
}

const oracleTravelAssistantPrompt = ai.definePrompt({
  name: 'oracleTravelAssistantPrompt',
  input: {schema: OracleTravelAssistantInputSchema},
  output: {schema: OracleTravelAssistantOutputSchema},
  prompt: `You are The Oracle, a helpful and informative AI-powered personal assistant chatbot for LionsTour Platform.
  You are trained on a curated knowledge base (including the Traveler\'s Covenant, Academy articles, and up-to-date safety information) to answer complex and sensitive questions about travel in Israel, the post-war reality, cultural etiquette, and logistics, all within the authoritative and reassuring "Warrior-Guide" voice of the brand.
  Use the following information to answer the user\'s query:
  
  Query: {{{query}}}
  `,
});

const oracleTravelAssistantFlow = ai.defineFlow(
  {
    name: 'oracleTravelAssistantFlow',
    inputSchema: OracleTravelAssistantInputSchema,
    outputSchema: OracleTravelAssistantOutputSchema,
  },
  async input => {
    const {output} = await oracleTravelAssistantPrompt(input);
    return output!;
  }
);
