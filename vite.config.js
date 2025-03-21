import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 固定端口
    strictPort: false, // 避免 Vite 自动换端口
    watch: {
      usePolling: true, // 监听文件变化，确保热更新正常
    },
  },
});
