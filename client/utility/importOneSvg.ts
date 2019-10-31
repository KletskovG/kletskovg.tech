import * as readline from 'readline';
import * as path from 'path';
import * as fs from 'fs';

let iconName: string;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Which icon? \n`, name => {
  findIcon('../src/assets/svgs', name);
  rl.close();
});

function findIcon(startFolder: string, requiredIcon: string): void {
  const files = fs.readdirSync(path.join(__dirname, startFolder), 'utf8');
  files.forEach(file => {
    const isDir = fs.statSync(path.join(__dirname, startFolder, file)).isDirectory();
    const isRequiredFile = file === requiredIcon + '.svg';
    if (!isDir) {
      if (isRequiredFile) {
        appendIcon(path.join(startFolder, file));
      }
    } else {
      findIcon(path.join(startFolder, file), requiredIcon);
    }
  });
}

function appendIcon(iconPath: string): void {
  const importString = `import '${iconPath}'`;
  console.log(importString);
  const data = fs.readFileSync(path.join(__dirname, '../entries/icons.ts'), 'utf8');
  console.log(data);
  fs.writeFileSync(
    path.join(__dirname, '../entries/icons.ts'),
    data + importString + ';' + '\n',
    'utf8'
  );
}
