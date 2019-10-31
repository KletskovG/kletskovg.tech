import * as readline from 'readline';
import * as fs from 'fs';
import * as path from 'path';

let todoName: string = null;
let todoLine: string = null;
let todoFile: string = null;

const questionString = `Enter your todo 
Separate with --
in format: TODONAME -- TODOLINE -- TODOFILE \n`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(questionString, (answer: string) => {
  const result = answer.split('--');
  addTodo(result[0], result[1], result[2]);
  rl.close();
});


function addTodo(name: string, line: string, file: string) : void {
  const todoString = ` \n - ${name} on line ${line} in file ${file} \n`;

  fs.appendFileSync(path.join(__dirname, '../../TODO.md'), todoString, 'utf8');
}

