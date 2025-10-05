import { getAuth } from '@/lib/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, UserCheck } from 'lucide-react';
import Link from 'next/link';

// The Suggestions component is temporarily disabled due to a build-time issue.
// The `genkit` library or its dependencies appear to be incorrectly pulling in the
// client-side Firebase SDK during the server-side build, causing an `app/no-options` error.
// This should be investigated further, but for now, the component is disabled to allow
// the core application to be submitted.
/*
async function Suggestions() {
  const { user } = await getAuth();
  if (!user) return null;

  // In a real app, userInteractions and userInterests would be fetched from your database.
  const suggestions = await personalizedContentSuggestions({
    userInteractions: 'Viewed articles on Jerusalem history, searched for "ancient ruins"',
    userInterests: 'History, Archaeology',
  });

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary rounded-full">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>Suggested Articles</CardTitle>
              <CardDescription>
                Based on your interests in {suggestions.reasoning.toLowerCase().split(' and ')[0]}.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {suggestions.suggestedArticles.map((article, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-muted-foreground">{article}</span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="#">
                    Read <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="shadow-lg">
        <CardHeader>
        <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary rounded-full">
                <UserCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
                <CardTitle>Highlighted Guides</CardTitle>
                <CardDescription>
                Guides whose stories align with your interests.
                </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {suggestions.highlightedGuides.map((guide, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-muted-foreground">{guide}</span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="#">
                    View Profile <ArrowRight className="ml-2 h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
*/

export default async function DashboardPage() {
  const { user } = await getAuth();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">
          Welcome, Warrior-Guide
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Here&apos;s what we&apos;ve tailored for your next journey.
        </p>
      </div>

      {/* <Suggestions /> */}

      <div className="mt-12">
        <Card className="bg-secondary border-none shadow-lg">
            <CardHeader>
                <CardTitle>Ready to plan?</CardTitle>
                <CardDescription>Our AI can craft a personalized itinerary based on your desired theme or feeling.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/planner">Go to AI Planner <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}