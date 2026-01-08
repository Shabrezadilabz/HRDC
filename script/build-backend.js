import { build } from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🔨 Building backend...');

await build({
  entryPoints: [join(rootDir, 'server/index.ts')],
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'cjs',
  outfile: join(rootDir, 'dist/index.cjs'),
  external: [
    'express',
    'mongoose',
    'cors',
    'dotenv',
    'nodemailer',
    'ws',
    'zod',
    'zod-validation-error',
    'express-session',
    'memorystore'
  ],
  minify: false,
  sourcemap: true,
});

console.log('✅ Backend build complete!');

