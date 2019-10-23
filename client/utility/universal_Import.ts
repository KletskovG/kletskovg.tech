// Read storage
// get type of import file
// Get name of import file
// Check the path to dist folder

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const storage = JSON.parse(fs.readFileSync(path.join(__dirname, 'storage.json'), 'utf8'));

const keys = storage.keys as string[];

const paths = storage.paths as string[];
const sourcePaths = storage.source as string[];

console.log(keys);
function getKey() {
    console.log('*** GET THE KEY *** ');
    rl.question('Which type of file you want to append \n', answer => {
        let isKeyFinded = false;
        let commandKey: string = null;

        keys.forEach(key => {
            console.log(key);
            if (key === `${answer.trim().toLowerCase()}`) {
                isKeyFinded = true;
                commandKey = answer;
            }
        });

        if (isKeyFinded) {
            appendFile(commandKey)
        } else {
            console.log(' **** This command was not specified **** ')
            getKey();
        }
    });
}



function appendFile(key: string): void {
    console.log('*** APPENDING THE FILE ****');
    let pathToEntry: string = null;

    paths.forEach((elem, index) => {
        const pathArr = elem.split('--');
        const keyWord = pathArr[0];
        const pathToEntry = pathArr[1];

        if (keyWord === key) {
            writeFile(index, pathToEntry);
        }
    })
}

// Required: src folder, dist file, filename
// TODO: refactor this function
function writeFile(index: number, pathToEntryFile: string): void {
    console.log('*** WRITING THE FILE ***');
    const startFolder= sourcePaths[index];

    function findFile(startFolder: string, requiredFile: string) {
        console.log('**** FINDING THE FILE ***');

        const files = fs.readdirSync(path.join(__dirname, startFolder), 'utf8');

        files.forEach(file => {
            const isDir = fs.statSync(path.join(__dirname, startFolder, file)).isDirectory();
            const isRequiredFile = file.trim().toLowerCase() === requiredFile;

            console.log(`**** EQUALIYY OF FILEs \n  ${file} \n ${requiredFile}  ***`);

            if (!isDir) {
                if (isRequiredFile) {
                    // TODO: append file here
                    const importString = `import '${startFolder}/${file}'; \n`;
                    fs.appendFileSync(path.join(__dirname, pathToEntryFile), importString, 'utf8');

                    cleanUpEntryFile(pathToEntryFile);

                    console.log('FILE WAS FOUND AND ADDED');
                    process.exit(0);
                }
            } else {
                findFile(path.join(startFolder, file), requiredFile);
            }
        });

    }

    rl.question('What is the name of your file? (with extension) \n', answer => {
       answer = answer.trim().toLowerCase();

       findFile(startFolder, answer);
    });
}


function cleanUpEntryFile(pathToEntry: string) {
    let data = fs.readFileSync(path.join(__dirname,  pathToEntry), 'utf8');

    data = data.split('\n').map(str => {
        return str.replace(/\/\//g, '/');
    }).join().replace(/,/g, '\n');

    fs.writeFileSync(path.join(__dirname, pathToEntry), data, 'utf8');
}

getKey();