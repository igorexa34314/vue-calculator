// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Igor/vue-projects/vue-calculator/.yarn/__virtual__/vite-virtual-1c057caa54/0/cache/vite-npm-4.4.6-ea3602d704-5a821897f1.zip/node_modules/vite/dist/node/index.js";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import vue from "file:///C:/Igor/vue-projects/vue-calculator/.yarn/__virtual__/@vitejs-plugin-vue-virtual-aa7d066caa/0/cache/@vitejs-plugin-vue-npm-4.2.3-f2af5ce2fe-1c70c1cd18.zip/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
var __vite_injected_original_import_meta_url = "file:///C:/Igor/vue-projects/vue-calculator/vite.config.ts";
var vite_config_default = ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    base: process.env.VITE_BASE || "/",
    server: {
      port: +process.env.VITE_PORT || 3e3
    },
    resolve: {
      alias: {
        "@": resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./src")
      }
    },
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      quasar({
        autoImportComponentCase: "kebab",
        sassVariables: "src/assets/styles/variables.scss"
      })
    ],
    define: {
      "process.env.DEBUG": false
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxJZ29yXFxcXHZ1ZS1wcm9qZWN0c1xcXFx2dWUtY2FsY3VsYXRvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcSWdvclxcXFx2dWUtcHJvamVjdHNcXFxcdnVlLWNhbGN1bGF0b3JcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L0lnb3IvdnVlLXByb2plY3RzL3Z1ZS1jYWxjdWxhdG9yL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyByZXNvbHZlLCBkaXJuYW1lIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB7IHF1YXNhciwgdHJhbnNmb3JtQXNzZXRVcmxzIH0gZnJvbSAnQHF1YXNhci92aXRlLXBsdWdpbic7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH0pID0+IHtcblx0cHJvY2Vzcy5lbnYgPSB7IC4uLnByb2Nlc3MuZW52LCAuLi5sb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpIH07XG5cblx0cmV0dXJuIGRlZmluZUNvbmZpZyh7XG5cdFx0YmFzZTogcHJvY2Vzcy5lbnYuVklURV9CQVNFIHx8ICcvJyxcblx0XHRzZXJ2ZXI6IHtcblx0XHRcdHBvcnQ6ICtwcm9jZXNzLmVudi5WSVRFX1BPUlQgfHwgMzAwMFxuXHRcdH0sXG5cdFx0cmVzb2x2ZToge1xuXHRcdFx0YWxpYXM6IHtcblx0XHRcdFx0J0AnOiByZXNvbHZlKGRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKSwgJy4vc3JjJylcblx0XHRcdH1cblx0XHR9LFxuXHRcdHBsdWdpbnM6IFtcblx0XHRcdHZ1ZSh7XG5cdFx0XHRcdHRlbXBsYXRlOiB7IHRyYW5zZm9ybUFzc2V0VXJscyB9XG5cdFx0XHR9KSxcblx0XHRcdHF1YXNhcih7XG5cdFx0XHRcdGF1dG9JbXBvcnRDb21wb25lbnRDYXNlOiAna2ViYWInLFxuXHRcdFx0XHRzYXNzVmFyaWFibGVzOiAnc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3MnXG5cdFx0XHR9KVxuXHRcdF0sXG5cdFx0ZGVmaW5lOiB7XG5cdFx0XHQncHJvY2Vzcy5lbnYuREVCVUcnOiBmYWxzZVxuXHRcdH1cblx0fSk7XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUyxTQUFTLGNBQWMsZUFBZTtBQUN6VSxTQUFTLFNBQVMsZUFBZTtBQUNqQyxTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxRQUFRLDBCQUEwQjtBQUowSSxJQUFNLDJDQUEyQztBQU90TyxJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDNUIsVUFBUSxNQUFNLEVBQUUsR0FBRyxRQUFRLEtBQUssR0FBRyxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUMsRUFBRTtBQUVoRSxTQUFPLGFBQWE7QUFBQSxJQUNuQixNQUFNLFFBQVEsSUFBSSxhQUFhO0FBQUEsSUFDL0IsUUFBUTtBQUFBLE1BQ1AsTUFBTSxDQUFDLFFBQVEsSUFBSSxhQUFhO0FBQUEsSUFDakM7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNSLE9BQU87QUFBQSxRQUNOLEtBQUssUUFBUSxRQUFRLGNBQWMsd0NBQWUsQ0FBQyxHQUFHLE9BQU87QUFBQSxNQUM5RDtBQUFBLElBQ0Q7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNSLElBQUk7QUFBQSxRQUNILFVBQVUsRUFBRSxtQkFBbUI7QUFBQSxNQUNoQyxDQUFDO0FBQUEsTUFDRCxPQUFPO0FBQUEsUUFDTix5QkFBeUI7QUFBQSxRQUN6QixlQUFlO0FBQUEsTUFDaEIsQ0FBQztBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNQLHFCQUFxQjtBQUFBLElBQ3RCO0FBQUEsRUFDRCxDQUFDO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
