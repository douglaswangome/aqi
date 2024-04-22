import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: "/src",
			components: "/src/components",
			pages: "/src/pages",
			styles: "/src/styles",
			routes: "/src/routes",
			types: "/src/types",
			store: "/src/store",
			data: "/src/data",
			utils: "/src/utils",
		},
	},
});
