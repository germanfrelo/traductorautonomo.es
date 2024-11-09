import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://traductorautonomo.es",
	integrations: [mdx(), sitemap()],
	devToolbar: {
		enabled: false,
	},
});
