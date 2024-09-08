const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../src/content/posts');
const targetDir = path.join(__dirname, '../public/images/posts');

function moveImages(dir) {
  fs.readdirSync(dir).forEach(file => {
    const sourcePath = path.join(dir, file);
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      moveImages(sourcePath);
    } else if (path.extname(file).match(/\.(jpg|jpeg|png|gif)$/)) {
      const targetPath = path.join(targetDir, path.basename(dir), file);
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.renameSync(sourcePath, targetPath);
      console.log(`Moved ${sourcePath} to ${targetPath}`);
    }
  });
}

moveImages(sourceDir);