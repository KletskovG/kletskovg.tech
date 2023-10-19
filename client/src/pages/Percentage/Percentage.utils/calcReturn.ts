import { getDateDiff } from './getDateDiff';

export function calcReturn(
    initialMoney: number,
    interestRange: string,
    dates: [string, string],
    interest: number,
) {
    let calcExplanation = '';
    let result = initialMoney;
    let incomePercentMultiplier = interestRange === 'month'
        ? Number((interest / 100 + 1).toFixed(2))
        : Number((interest / 12 / 100 + 1).toFixed(4));
    const rangeDiff = getDateDiff(dates[0], dates[1]);
    
    for (let i = 0; i < rangeDiff; i++) {
        result = result * incomePercentMultiplier
    }

    result = Number(result.toFixed(0));

    return {
        calcExplanation,
        result,
    }
}