import { Button } from "@/components/ui/button";

export default function ShadcnTester() {
  const variants = [
    "default",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "link",
  ] as const;

  const sizes = ["sm", "default", "lg", "icon", "icon-sm", "icon-lg"] as const;

  return (
    <div className="p-8 space-y-10">
      {/* Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          {variants.map((v) => (
            <Button key={v} variant={v}>
              {v}
            </Button>
          ))}
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          {sizes.map((s) => (
            <Button key={s} size={s}>
              {s === "icon" || s.includes("icon") ? "🔔" : s}
            </Button>
          ))}
        </div>
      </section>

      {/* All combinations */}
      <section>
        <h2 className="text-xl font-semibold mb-4">All combinations</h2>
        <div className="space-y-6">
          {variants.map((v) => (
            <div key={v}>
              <p className="font-medium mb-2">{v}</p>
              <div className="flex flex-wrap gap-4">
                {sizes.map((s) => (
                  <Button key={`${v}-${s}`} variant={v} size={s}>
                    {s === "icon" || s.includes("icon") ? "⭐" : `${v} ${s}`}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
