import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig(({ mode, command}) => {
    const env = loadEnv(mode, process.cwd());
    const { VITE_APP_BASE_API } = env;
    return {
        base: '/',
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/styles/variables.scss";`,
                }
            }
        },
        resolve: {
            extensions: [".vue",".mjs",".ts",".txs",".js"],
            alias: {
                "@": resolve("src")
            },
        },
        define: {
            "process.env": {},
        },
        plugins: [ vue() ],
        server: {
            host: true,   //本机ip
            port: 8080,   //本机端口
            https: false,
            open: false,
            proxy:{
                "/api":{
                    changeOrigin: true,   //允许跨域
                    target: VITE_APP_BASE_API,      //代理服务器地址
                    rewrite: (path) => path.replace(new RegExp("^/api"),""),    // 忽略api前缀，将'/api'替换成''
                    ws: true,
                }
            }
        },
        build: {
            target: 'chrome63',
            cssTarget: 'chrome63',
            outDir: "dist",
            terserOptions: {
                compress: {
                    keep_infinity: true,
                    // Used to delete console in production environment
                    drop_console: true,
                }
            },
            // Turning off brotliSize display can slightly reduce packaging time
            brotliSize: false,
            chunkSizeWarningLimit: 2000,
            // rollupOptions: {
            //     external: ['date-fns/esm']
            // }
        },

        
    }
})