import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This repository is intended for https://USERNAME.github.io/
// If you use a project repository instead, set base to '/REPOSITORY-NAME/'.
export default defineConfig({
  plugins: [react()],
  base: '/'
})
