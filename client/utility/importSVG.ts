// TODO: rework it for command line interface
import * as fs from 'fs';
import * as path from 'path';

let importString: string;

function importImages(): void {
  buildImportString('../src/assets/svgs/');
  console.log(importString);
  const indexFile = fs.readFileSync(path.join(__dirname, '../src/index.ts'), 'utf8');
  console.log(indexFile);
  const newFile = indexFile.replace(/\/\/ TODO: import SVGS here/, importString);
  console.log(newFile);
  fs.writeFileSync(path.join(__dirname, '../src/index.ts'), newFile, 'utf8');
}

function buildImportString(startFolderPath: string): void {
  const files = fs.readdirSync(path.join(__dirname, startFolderPath), 'utf8');

  files.forEach(file => {
    const isDir = fs.statSync(path.join(__dirname, startFolderPath, file)).isDirectory();

    if (!isDir) {
      importString += `import "./${startFolderPath.slice(5, startFolderPath.length - 1)}/${file}" \n`;
    } else {
      buildImportString(path.join(startFolderPath, file));
    }
  });
}

importImages();