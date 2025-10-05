import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const guides = [
  {
    id: "1",
    name: "Avi Ronen",
    quote: "To understand our future, you must be willing to stand where our past was forged. I'll take you there.",
    imageId: "guide-1",
    initials: "AR",
  },
  {
    id: "2",
    name: "Dalia Levi",
    quote: "Resilience isn't just in our history; it's in the art, the food, the arguments. Let me introduce you to our beautiful, stubborn life.",
    imageId: "guide-2",
    initials: "DL",
  },
  {
    id: "3",
    name: "Yosef Alon",
    quote: "I've seen this land from the cockpit of a fighter jet and from the seat of a tractor. Both views tell the same story of survival.",
    imageId: "guide-3",
    initials: "YA",
  },
];

const FeaturedGuides = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Meet Your Guides
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our guides are not just experts; they are the story. They are veterans, historians, artists, and farmers who share a deep, personal connection to this land.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === guide.imageId
            );
            return (
              <Card key={guide.id} className="text-center flex flex-col">
                <CardContent className="p-6 flex-grow flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    {image && <AvatarImage src={image.imageUrl} alt={guide.name} />}
                    <AvatarFallback>{guide.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg font-headline">{guide.name}</h3>
                  <blockquote className="mt-2 text-muted-foreground italic flex-grow">
                    &quot;{guide.quote}&quot;
                  </blockquote>
                  <Button asChild variant="link" className="mt-4">
                    <Link href={`/guides/${guide.id}`}>
                      View Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
