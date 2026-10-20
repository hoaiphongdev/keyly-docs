import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightLinksValidator from "starlight-links-validator";
import sitemapRename from "./src/integrations/sitemap-rename";

export default defineConfig({
  site: "https://keyly-docs.com",
  integrations: [
    starlight({
      title: "Keyly Docs",
      credits: true,
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        vi: {
          label: "Tiếng Việt",
          lang: "vi",
        },
      },
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
          translations: { vi: "Bắt đầu" },
          items: [
            { label: "Getting Started", translations: { vi: "Cài đặt" }, slug: "getting-started" },
            { label: "Features", translations: { vi: "Tính năng" }, slug: "features" },
          ],
        },
        {
          label: "Configuration",
          translations: { vi: "Cấu hình" },
          autogenerate: { directory: "configuration" },
        },
        {
          label: "Resources",
          translations: { vi: "Tài liệu thêm" },
          autogenerate: { directory: "resources" },
        },
        {
          label: "Help",
          translations: { vi: "Trợ giúp" },
          items: [
            { label: "Troubleshooting", translations: { vi: "Xử lý sự cố" }, slug: "troubleshooting" },
            { label: "FAQ", translations: { vi: "Câu hỏi thường gặp" }, slug: "faq" },
          ],
        },
      ],
      components: {
        Head: "./src/overrides/Head.astro",
        LanguageSelect: "./src/overrides/LanguageSelect.astro",
      },
    }),
    sitemapRename(),
  ],
  devToolbar: { enabled: false },
});
