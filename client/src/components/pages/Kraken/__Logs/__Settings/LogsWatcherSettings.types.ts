export type LogsWatcherSettingsProps = {
  logSince: number;
  fetchLogsInterval: number;
  updateSettings(since: number, interval: number): void;
}
