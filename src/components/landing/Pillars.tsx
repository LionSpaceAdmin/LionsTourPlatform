"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const pillarsData = [
  {
    title: "The Bedrock of Faith",
    subtitle: "A Pilgrim's Heart",
    body: "I have stood at the Wall and felt the weight of millennia of prayer pressed into its stones. I have walked the quiet groves of the Galilee where a new message of compassion was born for the world. I have heard the call to prayer from the minaret echo over the golden dome. These are not separate stories. They are threads of the same sacred tapestry, woven into this one piece of earth where humanity reached for the divine. Whatever your path, it has roots here. Let me show you the places where the heavens touched the earth.",
    imageId: "pillar-faith",
  },
  {
    title: "The Echo of Empires",
    subtitle: "A Historian's Path",
    body: "Empires have washed over this land like tides, each leaving its mark etched in stone. I can show you where Roman legions built their ramp to conquer the last Jewish stronghold at Masada. We can walk the secret underground streets of the Crusaders in Acre, and stand in the magnificent port Herod the Great built to rival Rome itself at Caesarea. This is not a graveyard of empires. It is a library, and every stone is a page. Let me teach you how to read them.",
    imageId: "pillar-history",
  },
  {
    title: "The Pulse of Creation",
    subtitle: "An Innovator's Spirit",
    body: "The same energy that carved cities from the desert now builds world-leading technology. The same creative force that inspired prophets now fuels artists, chefs, and architects in Tel Aviv. Look at the White City—a dream of a new way of living, built on sand. This spirit of making something new in an old land, of defiant creation, is our lifeblood. It is in the markets of Jaffa and the galleries of Neve Tzedek. Let me show you the Israel that is being born today, from the heart of all that came before.",
    imageId: "pillar-innovation",
  },
  {
    title: "The Strength of the Earth",
    subtitle: "A Survivor's Land",
    body: "This is not an easy land. It is a land of harsh desert and sudden, life-giving oases. To survive here, you must be strong like the ibex that leap the cliffs of Ein Gedi, and patient like the ancient olive tree. You must learn to draw life from the rock itself. From the silent, geological power of the Ramon Crater to the green hills of the Galilee, the earth itself teaches you how to endure. In our communities, you will see that lesson lived with courage every day. Let me show you the meaning of resilience, written in the landscape and in the hearts of its people.",
    imageId: "pillar-resilience",
  },
];

const Pillars = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            The Four Pillars of Origin
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillarsData.map((pillar) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === pillar.imageId
            );
            return (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="relative h-48">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={pillar.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline">{pillar.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{pillar.subtitle}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{pillar.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;