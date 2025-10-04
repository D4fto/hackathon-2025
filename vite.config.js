import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 server: {
    allowedHosts: [
      '.ngrok-free.dev', 
      // You can also use a pattern for all ngrok subdomains:
      // '.ngrok-free.app'
    ]
  }
})
