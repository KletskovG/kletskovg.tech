export function getDateStr(timestamp: number) {
    const date = new Date(timestamp);

    const month = date.getMonth() + 1;

    return `${date.getFullYear()}-${month < 10 ? `0${month}` : month}-${date.getDate()}`;
}