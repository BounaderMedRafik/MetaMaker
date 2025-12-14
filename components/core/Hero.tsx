import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const supportedFrames = ["Next.js", "Svelte", "Vue"];

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen mt-44 text-center px-4">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <img
          src="/brand/logo-abstract-minus.png"
          alt="MetaMaker"
          className="size-16 opacity-90"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-semibold max-w-lg mt-6 leading-none">
        Generate and manage metadata effortlessly.
      </h1>

      {/* Description */}
      <p className="mt-3 opacity-70 max-w-xl leading-relaxed">
        MetaMaker streamlines how you create titles, descriptions, and SEO
        metadata across frameworks like Next.js, Svelte, Vue, and more — giving
        you clean, consistent{" "}
        <span className=" underline underline-offset-4">metadata</span> blocks
        with zero effort.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-7">
        <Link href={"/m"}>
          <Button size="lg">
            Start Now <ArrowRight size={14} className="ml-1" />
          </Button>
        </Link>
        <Button disabled size="lg" variant="outline">
          Check Docs <ArrowUpRight size={14} className="ml-1" />
        </Button>
      </div>

      {/* Tech support chips */}
      <div className="flex flex-wrap justify-center gap-2 mt-10 opacity-80">
        {supportedFrames.map((framework) => (
          <Badge
            key={framework}
            variant="outline"
            className="px-3 py-1 rounded-full"
          >
            {framework}
          </Badge>
        ))}
      </div>

      <img className=" h-[520px] mt-14" src="/brand/HeroScreen.png" alt="" />
    </section>
  );
};

export default Hero;
