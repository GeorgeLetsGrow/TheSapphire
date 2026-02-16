import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";
import { resolve } from "path";

const projectRoot = process.cwd();

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: resolve(projectRoot),
      contentDirs: ["content"],
      models: [
        {
          name: "HomePage",
          type: "page",
          urlPath: "/",
          filePath: "content/home.json",
          fields: [
            {
              name: "hero",
              type: "object",
              label: "Hero Section",
              fields: [
                {
                  type: "string",
                  name: "title",
                  label: "Title",
                  default: "THE SAPPHIRE",
                },
                {
                  type: "string",
                  name: "subtitle",
                  label: "Subtitle",
                  default: "MODERN LUXURY • TAMPA",
                },
                {
                  type: "string",
                  name: "description",
                  label: "Description",
                  default: "A refined nightlife destination built for atmosphere, premium service, and unforgettable entertainment.",
                },
              ],
            },
            {
              name: "location",
              type: "object",
              label: "Location Section",
              fields: [
                {
                  type: "string",
                  name: "address",
                  label: "Address",
                  default: "4410 W Boy Scout Blvd",
                },
                {
                  type: "string",
                  name: "city",
                  label: "City",
                  default: "Tampa, FL",
                },
                {
                  type: "string",
                  name: "mapUrl",
                  label: "Google Maps URL",
                  default: "https://maps.google.com/?q=4410+W+Boy+Scout+Blvd+Tampa+FL",
                },
              ],
            },
            {
              name: "newsletter",
              type: "object",
              label: "Newsletter Section",
              fields: [
                {
                  type: "string",
                  name: "heading",
                  label: "Heading",
                  default: "Subscribe",
                },
                {
                  type: "string",
                  name: "description",
                  label: "Description",
                  default: "Get 10% off your first purchase when you sign up for our newsletter!",
                },
              ],
            },
          ],
        },
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/",
      },
    }),
  ],
});
