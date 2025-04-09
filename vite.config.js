import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nz_weather_app/', // ← 这里是你仓库名
  plugins: [react()],
})
