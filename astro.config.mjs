import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSiteGraph from 'starlight-site-graph';
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightLinksValidator from "starlight-links-validator";

export default defineConfig({
  site: "https://keyly-app.github.io",
  prefetch: true,
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
        baseUrl:
          "https://github.com/hoaiphongdev/keyly-docs/edit/main/",
      },
      customCss: ["./src/styles/global.css"],
      plugins: [
        starlightLinksValidator({
          errorOnInvalidHashes: false,
        }),
        starlightSiteGraph(),
        starlightThemeObsidian({ overrideWarnings: true }),
      ],
      favicon: "/src/assets/keyly.svg",
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
