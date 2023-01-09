import React, {useCallback, useRef, useState} from "react";
import type { LogsWatcherSettingsProps } from "./LogsWatcherSettings.types";

const FetchIntervalMultipliers = [1, 60] as const;
type TFetchIntervalMultplier = typeof FetchIntervalMultipliers[number];

const FetchIntervalMultiplierName: Record<TFetchIntervalMultplier, string> = {
  1: 'SEC',
  60: 'MIN',
}

export function LogsWatcherSettings(props: LogsWatcherSettingsProps) {
  const {
    fetchLogsInterval,
    logSince,
    updateSettings
  } = props;

  const [since, setSince] = useState(logSince);
  const [fetchInterval, setFetchInterval] = useState(fetchLogsInterval);
  const [intervalMultiplier, setintervalMultiplier] = useState<TFetchIntervalMultplier>(1);

  const updateSince = useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    setSince(Number(e.currentTarget.value));
  }, []);

  const updateInterval = useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    setFetchInterval(Number(e.currentTarget.value) * intervalMultiplier);
  }, [intervalMultiplier]);

  const updateIntervalMultiplier = useCallback((e: React.SyntheticEvent<HTMLSelectElement>) => {
    const newMult = Number(e.currentTarget.value);
    const validMult = FetchIntervalMultipliers.find(item => item === newMult);

    if (validMult) {
      setintervalMultiplier(validMult);
    }
  }, []);

  const submitSettingsHandler = useCallback(() => {
    updateSettings(since, fetchInterval);
  }, [fetchInterval, since, updateSettings]);

  const intervalRef = useRef(null);

  return (
    <div className="LogsWatcherSettings">
      <div>
        <h3> Grab Logs since: </h3>
          <input
            placeholder="Since"
            value={since}
            type="number"
            onChange={updateSince}
          />

        <h3> With interval: </h3>
        <div>
          <input
            type="number"
            value={fetchInterval}
            onChange={updateInterval}
            ref={intervalRef}
          />
          <select value={intervalMultiplier} onChange={updateIntervalMultiplier}>
            {FetchIntervalMultipliers.map(mult => (
              <option key={mult} value={mult}>
                {FetchIntervalMultiplierName[mult]}
              </option>
            ))}
          </select>
        </div>
      </div>


      <button onClick={submitSettingsHandler}>Update settings</button>
    </div>
  )
}
