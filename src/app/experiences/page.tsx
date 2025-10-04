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
import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const pillars = ['All', 'Heritage', 'Resilience', 'Artistry', 'Nature'];

const experiences = [
  {
    id: 'exp1',
    title: 'Jerusalem: Old City Pathways',
    pillar: 'Heritage',
    location: 'Jerusalem',
    description: 'Walk through millennia of history in the ancient, sacred streets.',
    imageId: 'experience-1',
  },
  {
    id: 'exp2',
    title: 'Galilee: Footsteps of Faith',
    pillar: 'Nature',
    location: 'Northern Israel',
    description: 'Hike the lush landscapes and discover sites of profound spiritual significance.',
    imageId: 'experience-2',
  },
  {
    id: 'exp3',
    title: 'Tel Aviv: Carmel Market Pulse',
    pillar: 'Artistry',
    location: 'Tel Aviv',
    description: 'Immerse yourself in the vibrant flavors, sounds, and culture of modern Israel.',
    imageId: 'experience-3',
  },
  {
    id: 'exp4',
    title: 'The Dead Sea: Desert Rejuvenation',
    pillar: 'Nature',
    location: 'Judean Desert',
    description: 'Experience the unique sensation of floating in the world\'s most ancient spa.',
    imageId: 'experience-4',
  },
  {
    id: 'exp5',
    title: 'Haifa: Gardens of Harmony',
    pillar: 'Heritage',
    location: 'Haifa',
    description: 'Witness the breathtaking beauty and tranquility of the Baháʼí Terraces.',
    imageId: 'experience-5',
  },
   {
    id: 'exp6',
    title: 'Tel Aviv: Bauhaus & Innovation',
    pillar: 'Artistry',
    location: 'Tel Aviv',
    description: 'Explore the White City\'s architectural gems and burgeoning tech scene.',
    imageId: 'experience-6',
  },
];


export default function ExperiencesPage() {
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
          <Button key={pillar} variant={pillar === 'All' ? 'default' : 'secondary'} className="rounded-full">
            {pillar}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp) => {
          const image = PlaceHolderImages.find((img) => img.id === exp.imageId);
          return (
            <Card key={exp.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0">
                <div className="relative h-60 w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={exp.title}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
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
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
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
