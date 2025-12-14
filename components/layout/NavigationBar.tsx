"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links: {
  title: string;
  link: string;
}[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Metadata Gen",
    link: "/m",
  },
  {
    title: "Docs",
    link: "/#",
  },
];

const NavigationBar = () => {
  const path = usePathname();
  return (
    <nav className="flex items-center justify-center fixed w-full z-50  top-0 left-0 bg-background">
      <div className=" max-w-3xl w-full flex items-center justify-between mx-auto  p-3">
        <img src="/brand/logo-abstract-minus.png" className=" size-8" alt="" />
        <div className="flex items-center gap-2">
          {links.map((item, i) => (
            <Link key={i} href={item.link}>
              <Button
                disabled={item.title == "Docs"}
                size={"sm"}
                variant={"link"}
                className={cn(
                  path == item.link && " underline underline-offset-4"
                )}
              >
                {item.title}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
