import sharp from 'sharp';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const generatePlaceholder = async (name: string, color: string) => {
  const outputPath = join(__dirname, '..', '..', 'public', 'images', 'ebooks', `${name}.jpg`);
  
  await sharp({
    create: {
      width: 400,
      height: 600,
      channels: 3,
      background: color
    }
  })
  .jpeg({ quality: 80 })
  .toFile(outputPath);
};

const main = async () => {
  await generatePlaceholder('nyash-guide', '#f4f4f4');
  await generatePlaceholder('hips-guide', '#e0e0e0');
  await generatePlaceholder('skin-guide', '#d4d4d4');
};

main().catch(console.error);
