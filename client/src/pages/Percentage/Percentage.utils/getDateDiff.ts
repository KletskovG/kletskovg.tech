import { TimePeriods } from '@typings/TimePeriods';

export function getDateDiff(start: string, end: string) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diff = endDate.getTime() - startDate.getTime();
    const months = Math.floor(diff / TimePeriods.DAY / 30);
    const days = Math.floor(diff / TimePeriods.DAY);
    return {
        months,
        days,
    };
}