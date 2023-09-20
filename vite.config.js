import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/rozet/',
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{
				find: '@components',
				replacement: path.resolve(__dirname, 'src/components'),
			},
			{ find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
			{ find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
			{ find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
			{ find: '@stores', replacement: path.resolve(__dirname, 'src/stores') },
			{ find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
		],
	},
});
