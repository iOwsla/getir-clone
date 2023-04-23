import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite';
export default defineConfig({
  plugins: [react(), UnoCSS()],
})
