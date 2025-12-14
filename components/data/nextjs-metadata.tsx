export interface NextJsMetadataFields {
  field: string;
  description: string;
  category: string;
}

export const nextjsMetadata: NextJsMetadataFields[] = [
  // ------------------------------
  // CORE
  // ------------------------------
  {
    field: "metadataBase",
    description: "Base URL used to construct absolute metadata URLs.",
    category: "Core",
  },
  {
    field: "title",
    description:
      "Document title. Can be a string or an object (default/template).",
    category: "Core",
  },
  {
    field: "description",
    description: "Document description for SEO and previews.",
    category: "Core",
  },

  // ------------------------------
  // SEO BASICS
  // ------------------------------
  {
    field: "keywords",
    description: "Array of meta keywords.",
    category: "SEO",
  },
  {
    field: "alternates",
    description: "Alternate URLs (canonical, languages, media).",
    category: "SEO",
  },
  {
    field: "robots",
    description: "Crawling and indexing rules for search engines.",
    category: "SEO",
  },
  {
    field: "authors",
    description: "List of authors with name and optional URL.",
    category: "SEO",
  },
  {
    field: "creator",
    description: "Creator of the page content.",
    category: "SEO",
  },
  {
    field: "publisher",
    description: "Publisher responsible for the content.",
    category: "SEO",
  },
  {
    field: "category",
    description: "Content category (non-SEO classification).",
    category: "SEO",
  },
  {
    field: "tags",
    description: "Array of content tags/keywords.",
    category: "SEO",
  },

  // ------------------------------
  // VISUAL APPEARANCE
  // ------------------------------
  {
    field: "icons",
    description: "Defines favicons, apple icons, shortcut icons, etc.",
    category: "Appearance",
  },
  {
    field: "themeColor",
    description: "Browser theme color for mobile and desktop.",
    category: "Appearance",
  },
  {
    field: "colorScheme",
    description: "Supported color schemes (light, dark).",
    category: "Appearance",
  },
  {
    field: "viewport",
    description: "Controls responsive layout behavior.",
    category: "Appearance",
  },
  {
    field: "manifest",
    description: "URL to the web manifest (manifest.json).",
    category: "Appearance",
  },

  // ------------------------------
  // VERIFICATION
  // ------------------------------
  {
    field: "verification",
    description:
      "Search engine site verification tokens (Google, Bing, Yandex).",
    category: "Verification",
  },

  // ------------------------------
  // FORMATTING & DETECTION
  // ------------------------------
  {
    field: "formatDetection",
    description: "Controls automatic detection of phone numbers, emails, etc.",
    category: "Formatting",
  },

  // ------------------------------
  // ARCHIVES & BOOKMARKS
  // ------------------------------
  {
    field: "archives",
    description: "Archive URLs related to the content.",
    category: "References",
  },
  {
    field: "bookmarks",
    description: "Bookmark links for related content.",
    category: "References",
  },

  // ------------------------------
  // APPLE WEB APP
  // ------------------------------
  {
    field: "appleWebApp",
    description: "Controls iOS PWA mode: fullscreen, title, statusBarStyle.",
    category: "Apple Web App",
  },

  // ------------------------------
  // OPEN GRAPH
  // ------------------------------
  {
    field: "openGraph",
    description: "Top-level Open Graph object for social previews.",
    category: "OpenGraph",
  },
  {
    field: "openGraph.title",
    description: "OG preview title.",
    category: "OpenGraph",
  },
  {
    field: "openGraph.description",
    description: "OG preview description.",
    category: "OpenGraph",
  },
  {
    field: "openGraph.url",
    description: "Canonical OG URL.",
    category: "OpenGraph",
  },
  {
    field: "openGraph.siteName",
    description: "Name of the website displayed on social previews.",
    category: "OpenGraph",
  },
  {
    field: "openGraph.images",
    description: "Array of OG preview images (width, height, alt).",
    category: "OpenGraph",
  },
  {
    field: "openGraph.videos",
    description: "Videos to display in OG previews.",
    category: "OpenGraph",
  },
  {
    field: "openGraph.type",
    description: "OG object type (website, article, profile, etc.).",
    category: "OpenGraph",
  },
  {
    field: "openGraph.locale",
    description: "Content locale (e.g., en_US).",
    category: "OpenGraph",
  },

  // ------------------------------
  // TWITTER
  // ------------------------------
  {
    field: "twitter",
    description: "Top-level Twitter metadata object.",
    category: "Twitter",
  },
  {
    field: "twitter.card",
    description: "Type of Twitter card (summary, summary_large_image).",
    category: "Twitter",
  },
  {
    field: "twitter.title",
    description: "Twitter preview title.",
    category: "Twitter",
  },
  {
    field: "twitter.description",
    description: "Twitter preview description.",
    category: "Twitter",
  },
  {
    field: "twitter.images",
    description: "Images used in Twitter previews.",
    category: "Twitter",
  },
  {
    field: "twitter.creator",
    description: "Twitter handle of the author.",
    category: "Twitter",
  },
  {
    field: "twitter.site",
    description: "Twitter handle of the website.",
    category: "Twitter",
  },

  // ------------------------------
  // CUSTOM FIELDS
  // ------------------------------
  {
    field: "other",
    description: "Add custom meta tags not covered by Next.js.",
    category: "Custom",
  },
];
