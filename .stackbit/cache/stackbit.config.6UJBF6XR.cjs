"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");
var import_path = require("path");
var projectRoot = process.cwd();
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "18",
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: (0, import_path.resolve)(projectRoot),
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
                  default: "THE SAPPHIRE"
                },
                {
                  type: "string",
                  name: "subtitle",
                  label: "Subtitle",
                  default: "MODERN LUXURY \u2022 TAMPA"
                },
                {
                  type: "string",
                  name: "description",
                  label: "Description",
                  default: "A refined nightlife destination built for atmosphere, premium service, and unforgettable entertainment."
                }
              ]
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
                  default: "4410 W Boy Scout Blvd"
                },
                {
                  type: "string",
                  name: "city",
                  label: "City",
                  default: "Tampa, FL"
                },
                {
                  type: "string",
                  name: "mapUrl",
                  label: "Google Maps URL",
                  default: "https://maps.google.com/?q=4410+W+Boy+Scout+Blvd+Tampa+FL"
                }
              ]
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
                  default: "Subscribe"
                },
                {
                  type: "string",
                  name: "description",
                  label: "Description",
                  default: "Get 10% off your first purchase when you sign up for our newsletter!"
                }
              ]
            }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});
//# sourceMappingURL=stackbit.config.6UJBF6XR.cjs.map
