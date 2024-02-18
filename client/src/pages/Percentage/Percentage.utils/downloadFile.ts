import { saveAs } from 'file-saver';

export function downloadFile(values: (number|string)[]) {
    let result = 'Initial amount,Percent,Time Range,Date Start,Date End,Result\n';
    result += values.join('\n');
    const currentDate = new Date();

    const fileData = new Blob([`${result}`], {type: 'text/plain;charset=utf-8'});

    let fileName = 'PayoutReport';
    fileName += `${currentDate.getUTCFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    fileName += `_-${currentDate.getHours()}-${currentDate.getMinutes()}`;
    fileName += '.csv';

    saveAs(fileData, fileName);
}