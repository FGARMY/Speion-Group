/**
 * Image Optimization Script
 * Converts large PNGs to optimized WebP format for massive size reduction.
 */
import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync, mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

const optimizations = [
  // Hero Dashboard: 2.9MB PNG → WebP (target ~100-150KB)
  {
    input: resolve(rootDir, 'src/assets/hero-dashboard.png'),
    output: resolve(rootDir, 'src/assets/hero-dashboard.webp'),
    resize: { width: 1200 }, // Max display width is ~700px on desktop, 1200 gives 2x retina
    quality: 80,
  },
  // Logo dark: 360KB PNG → WebP (target ~10KB)
  {
    input: resolve(rootDir, 'public/logo-dark.png'),
    output: resolve(rootDir, 'public/logo-dark.webp'),
    resize: { width: 140 }, // 2x of 70px display size
    quality: 85,
  },
  // Logo light: 327KB PNG → WebP (target ~10KB)
  {
    input: resolve(rootDir, 'public/logo-light.png'),
    output: resolve(rootDir, 'public/logo-light.webp'),
    resize: { width: 140 },
    quality: 85,
  },
  // Logo (OG/favicon): keep higher res for social sharing
  {
    input: resolve(rootDir, 'public/logo.png'),
    output: resolve(rootDir, 'public/logo.webp'),
    resize: { width: 512 },
    quality: 85,
  },
  // Favicon: optimize
  {
    input: resolve(rootDir, 'public/favicon.png'),
    output: resolve(rootDir, 'public/favicon.webp'),
    resize: { width: 64 },
    quality: 85,
  },
  // Hero global image in public
  {
    input: resolve(rootDir, 'public/hero-global.png'),
    output: resolve(rootDir, 'public/hero-global.webp'),
    resize: { width: 1200 },
    quality: 80,
  },
  // Method dash
  {
    input: resolve(rootDir, 'public/method-dash.png'),
    output: resolve(rootDir, 'public/method-dash.webp'),
    resize: { width: 1200 },
    quality: 80,
  },
];

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  for (const opt of optimizations) {
    if (!existsSync(opt.input)) {
      console.log(`⏭️  Skipping (not found): ${opt.input}`);
      continue;
    }

    try {
      const inputInfo = await sharp(opt.input).metadata();
      const inputSize = (await sharp(opt.input).toBuffer()).length;

      const result = await sharp(opt.input)
        .resize(opt.resize.width, opt.resize.height || null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: opt.quality })
        .toFile(opt.output);

      const savings = ((1 - result.size / inputSize) * 100).toFixed(1);
      console.log(
        `✅ ${opt.input.split('\\').pop().split('/').pop()} → ${opt.output.split('\\').pop().split('/').pop()}`
      );
      console.log(
        `   ${(inputSize / 1024).toFixed(0)}KB (${inputInfo.width}x${inputInfo.height}) → ${(result.size / 1024).toFixed(0)}KB (${result.width}x${result.height}) | ${savings}% smaller\n`
      );
    } catch (err) {
      console.error(`❌ Error optimizing ${opt.input}:`, err.message);
    }
  }

  console.log('✨ Image optimization complete!');
}

optimizeImages();
