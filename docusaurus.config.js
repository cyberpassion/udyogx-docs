// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "UdyogX Docs",
	tagline: "UdyogX Documentation",
	favicon: "img/favicon.ico",

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: "https://docs.udyogx.in",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "cyberpassion", // Usually your GitHub org/user name.
	projectName: "udyogx-docs", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/cyberpassion/udyogx-docs/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/cyberpassion/udyogx-docs/tree/main/packages/create-docusaurus/templates/shared/",
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/docusaurus-social-card.jpg",
			navbar: {
				title: "UdyogX Docs",
				logo: {
					alt: "UdyogX Docs Logo",
					src: "img/logo.png",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "Docs",
					},
					{
						href: "https://github.com/cyberpassion/udyogx-docs",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Docs",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Stack Overflow",
								href: "https://stackoverflow.com/questions/tagged/udyogx",
							},
							{
								label: "Discord",
								href: "https://discordapp.com/invite/udyogx",
							},
							{
								label: "X",
								href: "https://x.com/udyogx",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} UdyogX.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
			algolia: {
				// The application ID provided by Algolia
				appId: "G1KHC3G2ZZ",

				// Public API key: it is safe to commit it
				apiKey: "75cd000c4c22bc2ab8b9cebe2f13c29e",

				indexName: "udyogx",

				// Optional: see doc section below
				// contextualSearch: true,

				// Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
				// externalUrlRegex: "external\\.com|domain\\.com",

				// Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
				/*replaceSearchResultPathname: {
					from: "/docs/", // or as RegExp: /\/docs\//
					to: "/",
				},*/

				// Optional: Algolia search parameters
				// searchParameters: {},

				// Optional: path for search page that enabled by default (`false` to disable it)
				// searchPagePath: "search",

				// Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
				insights: false,

				//... other Algolia params
			},
		}),
};

export default config;
