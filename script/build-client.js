import { build } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const clientDir = resolve(__dirname, '..', 'client');

console.log('🔨 Building frontend...');
console.log('📁 Client directory:', clientDir);

// Import client's vite config
const clientViteConfig = await import(resolve(clientDir, 'vite.config.ts'));

await build({
  ...clientViteConfig.default,
  root: clientDir,
  configFile: resolve(clientDir, 'vite.config.ts')
});

console.log('✅ Frontend build complete!');

