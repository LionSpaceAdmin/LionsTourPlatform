'use server';

import {
  planItinerary as planItineraryFlow,
  type PlanItineraryInput,
} from '@/ai/flows/ai-powered-itinerary';
import {
  oracleTravelAssistant as oracleTravelAssistantFlow,
  type OracleTravelAssistantInput,
} from '@/ai/flows/oracle-travel-assistant';
import {
  personalizedContentSuggestions as personalizedContentSuggestionsFlow,
  type PersonalizedContentSuggestionsInput,
} from '@/ai/flows/personalized-content-suggestions';

export async function planItinerary(input: PlanItineraryInput) {
  try {
    const result = await planItineraryFlow(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in planItinerary flow:', error);
    return { success: false, error: 'Failed to generate itinerary.' };
  }
}

export async function oracleTravelAssistant(input: OracleTravelAssistantInput) {
  try {
    const result = await oracleTravelAssistantFlow(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in oracleTravelAssistant flow:', error);
    return { success: false, error: 'Failed to get response from The Oracle.' };
  }
}

export async function personalizedContentSuggestions(
  input: PersonalizedContentSuggestionsInput
) {
  // This flow is less critical for immediate user feedback,
  // so we'll provide a default if it fails.
  try {
    return await personalizedContentSuggestionsFlow(input);
  } catch (error) {
    console.error('Error in personalizedContentSuggestions flow:', error);
    return {
      suggestedArticles: ['The History of Masada', 'A Guide to Tel Aviv Cuisine'],
      highlightedGuides: ['Meet David, our history expert', 'Meet Sarah, a culinary guide'],
      reasoning: 'your interests in history and food',
    };
  }
}
