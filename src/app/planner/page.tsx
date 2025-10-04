'use client';

import { useState } from 'react';
import { planItinerary } from '@/app/actions/ai';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Loader2,
  Map,
  FileText,
  Lightbulb,
  ArrowRight,
  Send,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

type ItineraryResult = {
  itinerary: string;
  narrativeReasoning: string;
  googleMapsUrl: string;
};

export default function PlannerPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ItineraryResult | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const desiredFeeling = formData.get('feeling') as string;

    if (!desiredFeeling.trim()) {
      toast({
        title: 'Input Required',
        description: 'Please describe the feeling or theme for your trip.',
        variant: 'destructive',
      });
      setLoading(false);
      return;
    }

    const response = await planItinerary({ desiredFeeling });

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        title: 'Error Generating Itinerary',
        description:
          response.error || 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-xl border-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-headline">
              AI-Powered Itinerary Planner
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              Tell us the story you want to live. Our AI will craft a
              narrative-driven journey just for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid w-full gap-2">
                <Textarea
                  name="feeling"
                  placeholder="e.g., 'I want to feel the resilience of the Israeli spirit,' or 'I want to explore the intersection of ancient history and modern innovation.'"
                  rows={4}
                  className="bg-secondary"
                  disabled={loading}
                />
                <p className="text-sm text-muted-foreground">
                  Describe the desired feeling, theme, or question for your
                  trip.
                </p>
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Crafting Your Journey...
                  </>
                ) : (
                  <>
                    Generate Itinerary <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {result && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center mb-4 font-headline">
              Your Personalized Itinerary
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5" />
                        <span className="font-semibold">The Plan</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-wrap p-2">
                      {result.itinerary}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <div className="flex items-center gap-3">
                        <Lightbulb className="h-5 w-5" />
                        <span className="font-semibold">The Narrative</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-wrap p-2">
                      {result.narrativeReasoning}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {result.googleMapsUrl && (
                  <div className="mt-6">
                    <Button asChild className="w-full">
                      <Link
                        href={result.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Map className="mr-2 h-4 w-4" />
                        View on Google Maps
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
