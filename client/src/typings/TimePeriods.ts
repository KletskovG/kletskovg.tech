export const enum TimePeriods {
    SECOND = 1000,
    MINUTE = 60 * TimePeriods.SECOND,
    HOUR = 60 * TimePeriods.MINUTE,
    DAY = 24 * TimePeriods.HOUR,
    WEEK = 7 * TimePeriods.DAY,
    MONTH = 30 * TimePeriods.DAY,
    YEAR = 365 * TimePeriods.DAY,
}