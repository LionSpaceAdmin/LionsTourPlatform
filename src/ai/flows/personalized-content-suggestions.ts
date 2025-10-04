'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized content suggestions to users.
 *
 * The flow analyzes user interactions and interests to suggest relevant articles from the Academy and highlight guides with aligned personal stories.
 *
 * - personalizedContentSuggestions - A function that orchestrates the personalized content suggestion process.
 * - PersonalizedContentSuggestionsInput - The input type for the personalizedContentSuggestions function.
 * - PersonalizedContentSuggestionsOutput - The return type for the personalizedContentSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedContentSuggestionsInputSchema = z.object({
  userInteractions: z
    .string()
    .describe(
      'A string containing the user interactions, such as viewed articles, guides, and search queries.'
    ),
  userInterests: z
    .string()
    .describe('A string describing the stated interests of the user.'),
});
export type PersonalizedContentSuggestionsInput = z.infer<
  typeof PersonalizedContentSuggestionsInputSchema
>;

const PersonalizedContentSuggestionsOutputSchema = z.object({
  suggestedArticles: z
    .array(z.string())
    .describe('An array of suggested article titles from the Academy.'),
  highlightedGuides: z
    .array(z.string())
    .describe('An array of guide names whose stories align with user interests.'),
  reasoning: z
    .string()
    .describe(
      'A description of why specific articles and guides were suggested.'
    ),
});

export type PersonalizedContentSuggestionsOutput = z.infer<
  typeof PersonalizedContentSuggestionsOutputSchema
>;

export async function personalizedContentSuggestions(
  input: PersonalizedContentSuggestionsInput
): Promise<PersonalizedContentSuggestionsOutput> {
  return personalizedContentSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedContentSuggestionsPrompt',
  input: {schema: PersonalizedContentSuggestionsInputSchema},
  output: {schema: PersonalizedContentSuggestionsOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized content suggestions to users based on their interactions and interests.

  Analyze the following user interactions and interests to suggest relevant articles from the Academy and highlight guides whose personal stories align with their interests. Provide a short reasoning for your suggestions.

  User Interactions: {{{userInteractions}}}
  User Interests: {{{userInterests}}}

  Format your response as a JSON object with suggestedArticles, highlightedGuides, and reasoning fields.
  Make sure to include reasoning for each suggestion.
  `,
});

const personalizedContentSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizedContentSuggestionsFlow',
    inputSchema: PersonalizedContentSuggestionsInputSchema,
    outputSchema: PersonalizedContentSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
