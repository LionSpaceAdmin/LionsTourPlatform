'use server';

/**
 * @fileOverview An AI-powered itinerary planner flow.
 *
 * - planItinerary - A function that plans a personalized tour itinerary based on user input.
 * - PlanItineraryInput - The input type for the planItinerary function.
 * - PlanItineraryOutput - The return type for the planItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PlanItineraryInputSchema = z.object({
  desiredFeeling: z
    .string()
    .describe(
      'The desired feeling, theme, or question the user wants to explore during their trip.'
    ),
});
export type PlanItineraryInput = z.infer<typeof PlanItineraryInputSchema>;

const PlanItineraryOutputSchema = z.object({
  itinerary: z
    .string()
    .describe(
      'A personalized tour itinerary, including specific locations and activities.'
    ),
  narrativeReasoning: z
    .string()
    .describe(
      'The narrative reasoning behind the itinerary choices, connecting different sites and experiences into a coherent, story-driven journey.'
    ),
  googleMapsUrl: z
    .string()
    .describe(
      'A URL to a Google Maps interface with the itinerary plotted on it.'
    ),
});
export type PlanItineraryOutput = z.infer<typeof PlanItineraryOutputSchema>;

export async function planItinerary(
  input: PlanItineraryInput
): Promise<PlanItineraryOutput> {
  return planItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'planItineraryPrompt',
  input: {schema: PlanItineraryInputSchema},
  output: {schema: PlanItineraryOutputSchema},
  prompt: `You are an AI tour guide specializing in creating personalized itineraries.

  Based on the user's desired feeling, theme, or question for their trip, craft a detailed itinerary with specific locations and activities.
  Also, provide a narrative reasoning that connects different sites and experiences into a coherent, story-driven journey.
  Finally, provide a URL to a Google Maps interface with the itinerary plotted on it.  If you are unable to generate a URL, leave it blank.

  Desired Feeling, Theme, or Question: {{{desiredFeeling}}}
  Output the itinerary, narrative reasoning, and Google Maps URL in a JSON format:
  {
    "itinerary": "...",
    "narrativeReasoning": "...",
    "googleMapsUrl": "..."
  }`,
});

const planItineraryFlow = ai.defineFlow(
  {
    name: 'planItineraryFlow',
    inputSchema: PlanItineraryInputSchema,
    outputSchema: PlanItineraryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
