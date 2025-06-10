import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "/https://github.com/prince783/dashBoard.git",
  plugins: [
    tailwindcss(),
  ],
})