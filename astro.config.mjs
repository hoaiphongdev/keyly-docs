import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightLinksValidator from "starlight-links-validator";

export default defineConfig({
  site: "https://docs.keyly.app",
  integrations: [
    starlight({
      title: "Keyly Docs",
      credits: true,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/hoaiphongdev/keyly",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/hoaiphongdev/keyly/edit/main/docs/",
      },
      customCss: ["./src/styles/global.css"],
      plugins: [
        starlightLinksValidator({
          errorOnInvalidHashes: false,
        }),
        starlightThemeObsidian({ overrideWarnings: true }),
      ],
      favicon: "./favicon.svg",
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "Getting Started", slug: "getting-started" },
            { label: "Features", slug: "features" },
          ],
        },
        {
          label: "Configuration",
          autogenerate: { directory: "configuration" },
        },
        {
          label: "Resources",
          autogenerate: { directory: "resources" },
        },
        {
          label: "Help",
          items: [
            { label: "Troubleshooting", slug: "troubleshooting" },
            { label: "FAQ", slug: "faq" },
            { label: "Changelog", slug: "changelog" },
          ],
        },
      ],
      components: {
        Head: "./src/overrides/Head.astro",
      },
    }),
  ],
  devToolbar: { enabled: false },
});
