const sharp = require('sharp');

const generatePlaceholder = async () => {
  const outputPath = `public/images/ebooks/hair-guide.jpg`;
  
  await sharp({
    create: {
      width: 400,
      height: 600,
      channels: 3,
      background: '#c4c4c4'
    }
  })
  .jpeg({ quality: 80 })
  .toFile(outputPath);
};

const main = async () => {
  await generatePlaceholder();
};

main().catch(console.error);
