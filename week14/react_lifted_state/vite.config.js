import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/react_assign/week14/react_lifted_state/',
  plugins: [react()],
})
