import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import mdx from '@mdx-js/rollup'

 
export default defineConfig({
  plugins: [react(),
    {enforce: 'pre', ...mdx({/* jsxImportSource: …, otherOptions… */})},
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})