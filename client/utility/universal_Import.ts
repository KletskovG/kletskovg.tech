// Read storage
// get type of import file
// Get name of import file
// Check the path to dist folder

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

type Path = {
    key: string
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const storage = JSON.parse(fs.readFileSync(path.join(__dirname, 'storage.json'), 'utf8'));
const keys = storage.keys as String[];
const paths = storage.paths as Path[];

rl.question('Which type of file you want to append', answer => {
    keys.forEach(key => {
       if (key === answer) {

       } else {
           console.log('This type is not specified');
       }
    });
});




function appendFile(fileName: string, type: string): void {

}