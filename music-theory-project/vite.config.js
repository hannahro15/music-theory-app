import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: import.meta.env.NODE_ENV === 'production' ? '/music-theory-app/' : '/',
})
