import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],

    sitemap: "https://tokyo-tennis-club.com/sitemap.xml",

    host: "https://tokyo-tennis-club.com",
  };
}