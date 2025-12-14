"use client";
import { useState } from "react";
import { nextjsMetadata } from "../data/nextjs-metadata";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Info } from "lucide-react";

/* ---------------------------------
   INPUT TYPE RESOLUTION (LOGIC ONLY)
---------------------------------- */
type InputKind = "text" | "textarea" | "url" | "array" | "json";

const fieldInputMap: Record<string, InputKind> = {
  metadataBase: "url",
  title: "text",
  description: "textarea",

  keywords: "array",
  tags: "array",
  authors: "array",

  alternates: "json",
  robots: "json",
  verification: "json",
  appleWebApp: "json",
  formatDetection: "json",
  other: "json",

  icons: "url",
  manifest: "url",

  "openGraph.url": "url",
  "openGraph.title": "text",
  "openGraph.description": "textarea",
  "openGraph.images": "array",
  "openGraph.videos": "array",

  "twitter.title": "text",
  "twitter.description": "textarea",
  "twitter.images": "array",
};

const getInputKind = (field: string): InputKind =>
  fieldInputMap[field] ?? "text";

/* ---------------------------------
   COMPONENT
---------------------------------- */
const MetaDataGenerator = () => {
  return (
    <div className="max-w-6xl mx-auto pt-14">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Metadata Generator</h1>
        <p className="opacity-75 max-w-sm mx-auto leading-tight mt-2">
          Generate and preview real-world metadata for Google, Twitter (X), and
          Discord...ect
        </p>
      </div>

      <Gen />
    </div>
  );
};

const Gen = () => {
  const initialState = Object.fromEntries(
    nextjsMetadata.map((item) => [item.field, ""])
  );

  const [values, setValues] = useState<Record<string, string>>(initialState);

  const grouped = nextjsMetadata.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof nextjsMetadata>);

  return (
    <TooltipProvider>
      <div className="flex gap-10 mt-12">
        {/* LEFT – FORM */}
        <div className="space-y-6 w-1/2">
          {Object.entries(grouped).map(([category, fields]) => (
            <div key={category}>
              <h2 className="font-semibold text-lg mb-3">• {category}</h2>

              {fields.map((item) => {
                const kind = getInputKind(item.field);

                return (
                  <div key={item.field} className="mb-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <label className="font-medium text-sm">
                        {item.field}
                      </label>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="w-4 h-4 text-muted-foreground cursor-pointer" />
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p className="max-w-xs text-sm">{item.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    {/* 🔴 JSX STRUCTURE PRESERVED */}
                    {kind === "textarea" || kind === "json" ? (
                      <textarea
                        rows={kind === "json" ? 4 : 3}
                        className={`px-3 py-2 w-full border rounded-md bg-background ${
                          kind === "json" ? "font-mono text-sm" : "resize-none"
                        }`}
                        placeholder={
                          kind === "json" ? '{"key": "value"}' : undefined
                        }
                        value={values[item.field]}
                        onChange={(e) =>
                          setValues({
                            ...values,
                            [item.field]: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <input
                        type={kind === "url" ? "url" : "text"}
                        placeholder={
                          kind === "array"
                            ? "comma, separated, values"
                            : kind === "url"
                            ? "https://example.com"
                            : undefined
                        }
                        className="px-3 py-1.5 w-full border rounded-md bg-background"
                        value={values[item.field]}
                        onChange={(e) =>
                          setValues({
                            ...values,
                            [item.field]: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* RIGHT – REAL PREVIEWS */}
        <div className="w-1/2 space-y-10">
          {/* GOOGLE PREVIEW */}
          <div className="rounded-xl p-5 bg-[#1a1a1a] text-white border border-[#2a2a2a]">
            <h2 className="text-lg font-semibold mb-4">Google Preview</h2>

            <div className="flex items-start gap-3 mb-3">
              <img
                src={values.icons || "/brand/logo-abstract-minus.png"}
                className="w-6 h-6 rounded-full object-cover"
              />

              <div className="leading-tight">
                <p className="text-sm font-medium">
                  {values["openGraph.siteName"] || "My Website"}
                </p>
                <p className="text-xs text-white/50">
                  {values["openGraph.url"] || "https://example.com"}
                </p>
              </div>
            </div>

            <p className="text-xl font-semibold text-[#a786ff] mb-2">
              {values.title || "Example Title • Developer & Writer"}
            </p>

            <p className="text-[15px] text-white/70 leading-relaxed">
              {values.description ||
                "This is a realistic Google search snippet preview using your metadata."}
            </p>
          </div>

          {/* TWITTER (X) CARD */}
          <div className="rounded-xl p-5 border ">
            <h2 className="text-lg font-semibold mb-3">
              Twitter (X) Card Preview
            </h2>

            <div className="max-w-md rounded-xl overflow-hidden border">
              {values["twitter.image"] ? (
                <img
                  src={values["twitter.image"]}
                  className="w-full h-52 object-cover"
                />
              ) : (
                <div className="w-full h-52 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                  No image
                </div>
              )}

              <div className="p-4">
                <p className="text-sm text-gray-500 truncate">
                  {values["twitter.site"] || "example.com"}
                </p>
                <p className="font-bold text-[15px] leading-snug">
                  {values.title || "Preview title goes here"}
                </p>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {values.description ||
                    "This is how your content appears when shared on Twitter (X)."}
                </p>
              </div>
            </div>
          </div>

          {/* DISCORD EMBED */}
          <div className="rounded-xl p-5 border ">
            <h2 className="text-lg font-semibold mb-3">
              Discord Embed Preview
            </h2>

            <div className="max-w-md bg-[#2b2d31] rounded-xl p-4 text-white border border-[#1e1f22]">
              <div className="border-l-4 border-[#5865f2] pl-3">
                <p className="text-xs text-[#b5b6ba] truncate">
                  {values["openGraph.url"] || "https://example.com"}
                </p>

                <p className="text-[15px] font-semibold mt-1">
                  {values.title || "Embed title"}
                </p>

                <p className="text-sm text-[#d1d1d1] mt-1 line-clamp-3">
                  {values.description ||
                    "This preview matches how Open Graph metadata renders in Discord."}
                </p>

                {values["openGraph.image"] ? (
                  <img
                    src={values["openGraph.image"]}
                    className="mt-3 rounded-lg max-h-48 w-full object-cover"
                  />
                ) : (
                  <div className="mt-3 h-40 rounded-lg bg-[#1e1f22] flex items-center justify-center text-xs text-[#b5b6ba]">
                    No embed image
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MetaDataGenerator;
