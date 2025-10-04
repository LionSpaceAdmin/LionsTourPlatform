import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Compass, ShieldCheck, Feather, Trees } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const pillars = [
  {
    icon: Compass,
    title: 'Heritage',
    description:
      'Journey through millennia of history, faith, and culture.',
  },
  {
    icon: ShieldCheck,
    title: 'Resilience',
    description:
      'Witness the strength and spirit of a nation that has overcome.',
  },
  {
    icon: Feather,
    title: 'Artistry',
    description:
      'Discover the vibrant pulse of contemporary Israeli art and innovation.',
  },
  {
    icon: Trees,
    title: 'Nature',
    description:
      'Explore the breathtaking and diverse landscapes of the Holy Land.',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-landing');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover brightness-50"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg font-headline">
            Your Story, Etched in an Ancient Land
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-shadow">
            This is more than a tour. It's a journey into the heart of a story
            that defines us all. Discover Israel with guides who have lived its
            modern resilience.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/experiences">
                Discover Your Experience <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              The Four Pillars of Your Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our experiences are crafted around four core narratives, allowing
              you to connect with Israel on your own terms. Which story will

              you live?
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="bg-card/80 text-card-foreground border-border/50 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="items-center">
                  <div className="p-4 bg-accent/20 rounded-full mb-4">
                    <pillar.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-headline">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Planner CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-lg shadow-xl overflow-hidden md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Craft Your Personal Odyssey
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our AI Itinerary Planner doesn't just find locations, it builds
                a narrative. Tell us the feeling, theme, or question you want
                to explore, and our AI will design a complete, story-driven
                journey just for you.
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/planner">
                    Start Planning <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="h-64 md:h-full relative">
                <Image
                    src="https://picsum.photos/seed/123/800/600"
                    alt="AI Planner visualization"
                    fill
                    className="object-cover"
                    data-ai-hint="map travel"
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
