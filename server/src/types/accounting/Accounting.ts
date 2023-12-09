export const accountingCommands = ['add', 'list', 'remove', 'report', 'update'] as const;
export type TAccountingCommand = typeof accountingCommands[number];

