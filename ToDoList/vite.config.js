import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5173-sonika1311-todolist-vct6d63wl6l.ws-us117.gitpod.io']
  }
})
