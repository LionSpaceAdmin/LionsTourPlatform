import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/placeholders/hero-journey.svg"
          alt="Illustrated sunset skyline of Israel"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/70" aria-hidden />
        <div
          className="absolute inset-0 opacity-40"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(250, 204, 21, 0.2), transparent 45%), radial-gradient(circle at 80% 30%, rgba(56, 189, 248, 0.2), transparent 50%), radial-gradient(circle at 50% 80%, rgba(8, 145, 178, 0.15), transparent 55%)",
          }}
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-headline drop-shadow-xl">
          You feel it, don&apos;t you?
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-light text-slate-100 drop-shadow-lg">
          A pull. A question. A memory of a place you&apos;ve never been.
        </h2>
        <p className="mt-8 text-lg md:text-xl max-w-3xl mx-auto text-slate-200">
          This is not a place you simply visit. It is a place you return to. Come. Let me show you the source. Let me show you the truth that lives in this soil. Let me help you find the part of you that is already here.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
            <Link href="/experiences">Begin Your Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
