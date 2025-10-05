'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, MapPin, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';

const pillars = ['All', 'Heritage', 'Resilience', 'Artistry', 'Nature'];

export default function ExperiencesPage() {
  const firestore = useFirestore();
  const experiencesQuery = useMemoFirebase(
    () => (firestore ? collection(firestore, 'experiences') : null),
    [firestore]
  );
  const {
    data: experiences,
    isLoading,
    error,
  } = useCollection<any>(experiencesQuery);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Discover Your Journey
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Explore our curated experiences, designed to connect you with the
          heart and soul of Israel. Filter by the story you want to live.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {pillars.map((pillar) => (
          <Button
            key={pillar}
            variant={pillar === 'All' ? 'default' : 'secondary'}
            className="rounded-full"
          >
            {pillar}
          </Button>
        ))}
      </div>
      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-4 text-muted-foreground">Loading Experiences...</p>
        </div>
      )}
      {error && (
        <div className="text-center py-12 text-destructive">
          <p>Sorry, we couldn&apos;t load the experiences.</p>
          <p className="text-sm">{error.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences?.map((exp) => {
          const image = PlaceHolderImages.find(
            (img) => img.id === exp.imageId
          );
          return (
            <Card
              key={exp.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <CardHeader className="p-0">
                <div className="relative h-60 w-full">
                  {exp.imageUrl ? (
                    <Image
                      src={exp.imageUrl}
                      alt={exp.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="bg-secondary h-full w-full flex items-center justify-center text-muted-foreground">
                      No Image
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline mb-2">{exp.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  {exp.location}
                </div>
                <CardDescription>{exp.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 bg-secondary/50">
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href={`/experiences/${exp.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
