const sharp = require('sharp');

const generatePlaceholder = async (name, color) => {
  const outputPath = `public/images/ebooks/${name}.jpg`;
  
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
