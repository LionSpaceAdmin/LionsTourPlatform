import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        poster="https://storage.googleapis.com/proudcity/israel/hero-video-poster.jpg"
      >
        <source
          src="https://storage.googleapis.com/proudcity/israel/pexels-eyal-goodman-4655425_1080p.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg font-headline">
          You feel it, don&apos;t you?
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-light text-shadow">
          A pull. A question. A memory of a place you&apos;ve never been.
        </h2>
        <p className="mt-8 text-lg md:text-xl max-w-3xl mx-auto text-shadow-md">
          This is not a place you simply visit. It is a place you return to. Come. Let me show you the source. Let me show you the truth that lives in this soil. Let me help you find the part of you that is already here.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/experiences">
              Begin Your Journey
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
