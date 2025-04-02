import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
  base: "/urbanGrow/", // 注意最后的斜杠
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
  ],
  server: {
    port: 5173, // 固定端口
    strictPort: false, // 避免 Vite 自动换端口
    watch: {
      usePolling: true, // 监听文件变化，确保热更新正常
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 配置 @ 指向 src
    },
  },
});
