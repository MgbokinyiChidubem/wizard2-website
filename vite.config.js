import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base:"/wizard2-website/",
  plugins: [react()],
})
