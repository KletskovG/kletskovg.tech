import { TimePeriods } from '@typings/TimePeriods';
import { getDateDiff } from './getDateDiff';
import { getDateStr } from './getDateStr';

export interface IIncomeResult {
    income: string;
    details: [number, string][];
    incomePercentMultiplier: number;
}

export function calcReturn(
    initialMoney: number,
    interestRange: string,
    dates: [string, string],
    interest: number,
): IIncomeResult {
    let details: [number ,string][] = [];
    let income = initialMoney;
    let incomePercentMultiplier = getIncomePercentMultiplier(interest, interestRange);
    const { months, days } = getDateDiff(dates[0], dates[1]);

    // TODO: Refactor with loop below
    if (interestRange === 'day') {
        for (let i = 1; i <= days; i++) {
            income *= incomePercentMultiplier;
            const incomeTick = Number(income.toFixed(0));
            const startTimestamp = new Date(dates[0]).getTime();
            const incomeTickDate = getDateStr(startTimestamp + TimePeriods.DAY * i);
            details.push([incomeTick, incomeTickDate]);
        }
    } else if (interestRange === 'month') {
        for (let i = 1; i <= days; i++) {
            income *= incomePercentMultiplier;
            const incomeTick = Number(income.toFixed(0));
            const startTimestamp = new Date(dates[0]).getTime();
            let incomeTickDate: string = '';
            
            if (i % 30 === 0) {
                incomeTickDate = getDateStr(startTimestamp + TimePeriods.MONTH * (i / 30));
                details.push([incomeTick, incomeTickDate]);
            } else if (days - i < 29) {
                incomeTickDate = getDateStr(startTimestamp + TimePeriods.DAY * i);
                details.push([incomeTick, incomeTickDate]);
            }
        }
    } else if (interestRange === 'year') {
        for (let i = 1; i <= months; i++) {
            income *= incomePercentMultiplier;
            
            if (i % 12 === 0) {
                const incomeTick = Number(income.toFixed(0));
                const startTimestamp = new Date(dates[0]).getTime();
                const incomeTickDate = getDateStr(startTimestamp + TimePeriods.YEAR * (i / 12));
                details.push([incomeTick, incomeTickDate]);        
            }
            // if (interestRange === 'year') {
            // } 
            // else {
            //     const incomeTick = Number(income.toFixed(0));
            //     const startTimestamp = new Date(dates[0]).getTime();
            //     const incomeTickDate = getDateStr(startTimestamp + TimePeriods.MONTH * (i));
            //     details.push([incomeTick, incomeTickDate]);
            // }
        }
    }   
    
    income = Number(income.toFixed(0));

    return {
        details,
        income: String(income),
        incomePercentMultiplier,
    }
}

function getIncomePercentMultiplier(interest:number, interestRange: string): number {
    switch (interestRange) {
        case 'day':
            return Number((interest / 100 + 1).toFixed(4));
        case 'month':
            return Number((interest / 30 / 100 + 1).toFixed(5));
        case 'year':
            return Number((interest / 12 / 100 + 1).toFixed(4))
        default:
            return Number((interest / 12 / 100 + 1).toFixed(4));
    }
}
