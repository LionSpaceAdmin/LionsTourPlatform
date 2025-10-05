"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const Hero = () => {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "hero-landing"
  );

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(250, 204, 21, 0.15), transparent 50%), radial-gradient(circle at 85% 18%, rgba(96, 165, 250, 0.12), transparent 52%), radial-gradient(circle at 70% 70%, rgba(249, 115, 22, 0.12), transparent 55%), radial-gradient(circle at 25% 80%, rgba(45, 212, 191, 0.08), transparent 55%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-slate-900 via-slate-950 to-transparent" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent" aria-hidden />
        <div
          className="absolute inset-0 opacity-80 mix-blend-lighten"
          aria-hidden
        >
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              priority
              className="object-cover object-center"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
        <div
          className="absolute inset-0 opacity-50"
          aria-hidden
          style={{
            backgroundImage:
              "repeating-linear-gradient(120deg, rgba(15, 118, 110, 0.15) 0, rgba(15, 118, 110, 0.15) 1px, transparent 1px, transparent 22px), repeating-linear-gradient(60deg, rgba(99, 102, 241, 0.12) 0, rgba(99, 102, 241, 0.12) 1px, transparent 1px, transparent 26px)",
          }}
        />
        <div className="absolute -left-1/3 bottom-[-20%] h-[70%] w-[80%] rounded-full bg-gradient-to-tr from-amber-200/40 via-amber-500/10 to-transparent blur-3xl" aria-hidden />
        <div className="absolute -right-1/4 bottom-[-25%] h-[65%] w-[70%] rounded-full bg-gradient-to-tl from-sky-300/35 via-indigo-500/20 to-transparent blur-3xl" aria-hidden />
      </div>
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight font-headline drop-shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          You feel it, don&apos;t you?
        </motion.h1>
        <motion.h2
          className="mt-4 text-2xl md:text-3xl font-light text-slate-100 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
        >
          A pull. A question. A memory of a place you&apos;ve never been.
        </motion.h2>
        <motion.p
          className="mt-8 text-lg md:text-xl max-w-3xl mx-auto text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          This is not a place you simply visit. It is a place you return to. Come. Let me show you the source. Let me show you the
          truth that lives in this soil. Let me help you find the part of you that is already here.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-amber-500/40"
          >
            <Link href="/experiences">Begin Your Journey</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
