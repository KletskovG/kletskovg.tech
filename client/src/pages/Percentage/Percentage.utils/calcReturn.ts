import { TimePeriods } from '@typings/TimePeriods';
import { getDateDiff } from './getDateDiff';
import { getDateStr } from './getDateStr';

export interface IIncomeResult {
    income: string;
    details: [number, string][];
}

export function calcReturn(
    initialMoney: number,
    interestRange: string,
    dates: [string, string],
    interest: number,
): IIncomeResult {
    let details: [number ,string][] = [];
    let income = initialMoney;
    let incomePercentMultiplier = interestRange === 'month'
        ? Number((interest / 100 + 1).toFixed(2))
        : Number((interest / 12 / 100 + 1).toFixed(4));
    const rangeDiff = getDateDiff(dates[0], dates[1]);
    
    for (let i = 1; i <= rangeDiff; i++) {
        income *= incomePercentMultiplier;
        
        if (interestRange === 'year') {
            if (i % 12 === 0) {
                const incomeTick = Number(income.toFixed(0));
                const startTimestamp = new Date(dates[0]).getTime();
                const incomeTickDate = getDateStr(startTimestamp + TimePeriods.YEAR * (i / 12));
                details.push([incomeTick, incomeTickDate]);        
            }
        } else {
            const incomeTick = Number(income.toFixed(0));
            const startTimestamp = new Date(dates[0]).getTime();
            const incomeTickDate = getDateStr(startTimestamp + TimePeriods.MONTH * (i));
            details.push([incomeTick, incomeTickDate]);
        }
    }

    income = Number(income.toFixed(0));

    return {
        details,
        income: String(income),
    }
}