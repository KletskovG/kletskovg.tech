import React, {useState, useCallback} from 'react';
import Page from '../../shared/Page/Page';
import { LogsWatcherSettings } from './__Logs/__Settings/LogsWatcherSettings';
import { LogsWatcherTail } from './__Logs/__Tail/LogsWatcherTail';

const DEFAULT_SINCE_TIMEOUT = 10;
const FETCH_LOGS_INTERVAL = 70;

export function KrakenPage() {
  const [logSince, setLogSince] = useState(DEFAULT_SINCE_TIMEOUT);
  const [fetchLogsInterval, setFetchLogsInterval] = useState(FETCH_LOGS_INTERVAL);

  const updateSettings = useCallback((since: number, interval: number) => {
    setLogSince(since);
    setFetchLogsInterval(interval);
  }, []);


  return (
    <Page>
      <div className="kraken">
        <LogsWatcherSettings
          fetchLogsInterval={fetchLogsInterval}
          logSince={logSince}
          updateSettings={updateSettings}
        />
        <LogsWatcherTail
          fetchInterval={fetchLogsInterval}
          since={logSince}
        />
      </div>
    </Page>
  )
}
