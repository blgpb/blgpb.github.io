// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 目标为 blgpb 用户主页域名：https://blgpb.github.io
  // 当前仓库位于 blgpb 账号，使用 User Pages 无需 base 前缀。
  site: 'https://blgpb.github.io',
  // User Pages 不需要 base 前缀
  output: 'static',
  prefetch: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});