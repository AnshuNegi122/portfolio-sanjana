import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,     // or use your IP instead of 'localhost'
    port: 5173
  }
})
