import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import path from 'node:path';

export default defineConfig({
	envPrefix: 'VITE_',
	plugins: [TanStackRouterVite({}), react()],
	server: {
		port: 3000,
	},
	publicDir: 'public/',
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
			public: path.resolve(__dirname, './public'),
		},
	},
});
