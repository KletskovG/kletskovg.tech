export default interface ILogger {
  id: any;
  moduleName: string;
  isWarning: boolean;
  information?: string;
  warning?: string;
  time?: Date;
}
