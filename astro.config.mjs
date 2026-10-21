import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import sitemapRename from "./src/integrations/sitemap-rename";
import rehypeKeycaps from "./src/plugins/rehype-keycaps.mjs";
import keylyGrammar from "./src/plugins/keyly-grammar.mjs";

export default defineConfig({
  site: "https://keyly-docs.com",
  integrations: [
    starlight({
      title: "Keyly Docs",
      credits: false,
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
      customCss: ["./src/styles/fonts.css", "./src/styles/theme.css", "./src/styles/global.css"],
      expressiveCode: {
        shiki: { langs: [keylyGrammar] },
        // `# App: /path/to/App.app` is content in .keyly files, not a file-name comment to lift into a tab
        frames: { extractFileNameFromCode: false },
        styleOverrides: {
          borderRadius: "0",
          borderColor: "var(--kc-line)",
          codeFontFamily: "var(--sl-font-mono)",
          uiFontFamily: "var(--sl-font-mono)",
          codeBackground: "var(--kc-sunken)",
          frames: {
            frameBoxShadowCssValue: "none",
            editorTabBarBackground: "var(--kc-raised)",
            editorActiveTabBackground: "var(--kc-sunken)",
            editorActiveTabIndicatorTopColor: "var(--sl-color-accent)",
            editorActiveTabIndicatorBottomColor: "transparent",
            editorTabBarBorderBottomColor: "var(--kc-line)",
            terminalTitlebarBackground: "var(--kc-raised)",
            terminalTitlebarBorderBottomColor: "var(--kc-line)",
            terminalTitlebarForeground: "var(--kc-muted)",
            terminalBackground: "var(--kc-sunken)",
            inlineButtonBorder: "var(--kc-line)",
            tooltipSuccessBackground: "var(--sl-color-accent)",
          },
        },
      },
      plugins: [
        starlightLinksValidator({
          errorOnInvalidHashes: false,
        }),
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
          label: "Templates",
          translations: { vi: "Mẫu phím tắt" },
          collapsed: true,
          autogenerate: { directory: "templates" },
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
        Search: "./src/overrides/Search.astro",
        ThemeProvider: "./src/overrides/ThemeProvider.astro",
        ThemeSelect: "./src/overrides/ThemeSelect.astro",
        Hero: "./src/overrides/Hero.astro",
        PageTitle: "./src/overrides/PageTitle.astro",
        Footer: "./src/overrides/Footer.astro",
        TableOfContents: "./src/overrides/TableOfContents.astro",
      },
    }),
    sitemapRename(),
  ],
  markdown: {
    rehypePlugins: [rehypeKeycaps],
  },
  // Inline CSS into each page: removes the render-blocking stylesheet round trip on first load
  build: { inlineStylesheets: "always" },
  vite: {
    build: {
      // Never base64 fonts into CSS: with inlined stylesheets every page would carry all of them,
      // while as files the browser only fetches the unicode-range subsets a page actually uses
      assetsInlineLimit: (file) => (/\.(woff2?|ttf|otf)$/.test(file) ? false : undefined),
    },
  },
  devToolbar: { enabled: false },
});
